import React, {useState} from 'react';
import Character from "./Character";


const characters = () => {

    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacter(value)
        });
    return (
        <div>
            {characters.map((character, index)=>(<Character item={character} key={index}/>))}
        </div>
    );
};

export default Character;