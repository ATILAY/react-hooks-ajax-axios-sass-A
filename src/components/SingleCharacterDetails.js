import React from 'react';

const SingleCharacterDetails = ({singleCharacterData}) => {
    return (
        <div className="SingleCharacterDetails">
            <div>
                <img src={singleCharacterData.image} alt={singleCharacterData.name}></img>
            </div>
            <div>
            <h2>{singleCharacterData.name}</h2>
            <h5>
                <div>status: {singleCharacterData.status}, </div> 
                <div>spacies: {singleCharacterData.species}, </div>
                <div>gender: {singleCharacterData.gender}</div>
            </h5>
            <h4 className="comes-from">comes from: {singleCharacterData.location.name}</h4>
            </div>
        </div>
    );
};

export default SingleCharacterDetails;
