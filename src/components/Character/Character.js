import React from 'react';

const Character = (props) => {
    let{item} = props;
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <p>{item.status} <br/>{item.species} <br/>{item.gender}</p>
            <img src={item.image} alt={item.name}/>
        </div>
    );
};

export default Character;
