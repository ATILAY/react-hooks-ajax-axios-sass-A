import React, {useState, useEffect, useRef} from 'react';
import '../App.css';
import Connector from '../api/Connnector';
import Characters from './Characters';
import uniqid from 'uniqid';
import DiscoverAppDoc from './DiscoverAppDoc';
import '../Responsive.scss';

function MainContent(props) {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState('https://rickandmortyapi.com/api/episode');
  const [readyPagination, setReadyPagination] = useState({next:'', prev:''});

  useEffect(() => {
    const fetchData = async () => {
      const {data:{info, results}} = await Connector.get(pagination, { params: 1000})

      setData(results);
      setReadyPagination({next:info.next, prev:info.prev});
    };
    
    try {
      fetchData();
    } catch (err) { console.log(err,'error bro')}
  }, [pagination]);

  const handlePagination = (nextPageUrl) => {
    setPagination(nextPageUrl);
  }

  return (
    <div className="App">
    <div className="Pagination">
    {readyPagination.prev ?<div  onClick={() => handlePagination(readyPagination.prev)}>Go Previous Page</div> : null}
    {readyPagination.next ?<div  onClick={() => handlePagination(readyPagination.next)}>Go Next Page</div> : null}
    </div>

      <ul key={uniqid()}>
      <h1 className="cartoon-title-text" data-hover=": It is Ricky And Morty, Babe!">
      Episodes of My Favorite Cartoon
      </h1>
      {data.map(episode=>{
        return (
        <li className="episodes-li" key={uniqid() + episode.id}>
        <div className="episode-names" data-episode-details = {episode.url}>
        <span>{episode.id} .</span> 
        name: {episode.name}
        </div>
        <div className="date-and-episode-order">
        <div>published on: {episode.air_date}</div>
        <div>episode: {episode.episode}</div>
        </div>
        <div className="characters-element">
        <ul key={uniqid()}>
          <Characters className="characters-react-element" episode={episode}/>
        </ul>
        </div>
        </li>
        )
      })}
      </ul>
      <div className="Pagination">
    </div>
      <DiscoverAppDoc></DiscoverAppDoc>
    </div>
  );
}

export default MainContent;
