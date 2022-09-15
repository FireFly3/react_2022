// import React, {useState} from 'react';
// import Character from "./Character";
//
//
// const Characters = () => {
//
//     let [characters, setCharacters] = useState([]);
//
//     fetch('https://rickandmortyapi.com/api/character')
//         .then(value => value.json())
//         .then(value => {
//             setCharacters(value)
//         });
//     return (
//         <div>
//             {characters.map((character, index)=>(<Character item={character} key={index}/>))}
//         </div>
//     );
// };

export default Characters;

// import React, {useState} from 'react';
// import User from "../User/User";
//
// const Users = () => {
//
//     let [users, setUsers] = useState([]);
//
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//         .then(value => {
//             setUsers(value)
//         });
//     return (
//         <div>
//             {users.map((user, index)=>(<User item={user} key={index}/>))}
//         </div>
//     );
// };
//
// export default Users;

import React from 'react';

const Character = (props) => {
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

export default Character;