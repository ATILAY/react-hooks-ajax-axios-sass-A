import React, {useState, useEffect, useRef} from 'react';
import SingleCharacter from './SingleCharacter';
import uniqid from 'uniqid';

const Characters = ({episode}) => {
    const [renderCharacters, setRenderCharacters] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setRenderCharacters(!renderCharacters);
    }

    return (
        <div>
          {renderCharacters ? episode.characters.map(endPoint => {
              return (
                  <li key={uniqid()}>
                  <SingleCharacter endPoint = {endPoint} key={uniqid()}>
                  </SingleCharacter>
                  </li>
               )
          }) : null}
        <div data-episode-id = {episode.id} onClick = {(e) => handleClick(e)} >
            {renderCharacters 
            ? <span className="see-unsee-characters"> close Characters</span> 
            : <span className="see-unsee-characters"> see Characters</span>}
            
        </div>
        </div>
    );
};

export default Characters;