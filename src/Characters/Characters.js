import React from 'react';

const Characters = (props) => {
    let{character} = props;
    return (
        <div>
            <h2>{character.id}-{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <img src={character.img} alt=""/>
        </div>
    );
};

export default Characters;

// import React from 'react';
//
// const User = (props) => {
//     let{item:user}=props;
//     return (
//         <div>
//             <h2>{user.id} - {user.name}</h2>
//             <p>{user.address.city} <br/>{user.email}</p>
//         </div>
//     );
// };
//
// export default User;

import React, {useState} from 'react';
import Character from "./Characters";


const Characters = () => {

    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value)
        });
    return (
        <div>
            {characters.map((character, index)=>(<Character item={character} key={index}/>))}
        </div>
    );
};

export default Characters;