import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Connector from '../api/Connnector';
import uniqid from 'uniqid';
import SingleCharacterDetails from  './SingleCharacterDetails';

const SingleCharacter = ({endPoint}) => {
    const [singleCharacterDataName, setSingleCharacterDataName] = useState('');
    const [isSCShown, setSCShown] = useState(false);
    const [singleCharacterData, setSingleCharacterData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await Connector.get(endPoint, { params: 1000});

            setSingleCharacterDataName(result.data.name);
            setSingleCharacterData(result.data);
        } catch (err){
            console.log('error exists bro', err);
        }
    };
    
    fetchData();
    }, []);
    return (
        <div className="SingleCharacterDetailsWrapper" onClick={() => setSCShown(!isSCShown)}>
            {/* {singleCharacterData} */}
            {isSCShown ? 
            <SingleCharacterDetails singleCharacterData = {singleCharacterData}></SingleCharacterDetails>
            : singleCharacterDataName}
        </div>
    )
}

export default SingleCharacter;