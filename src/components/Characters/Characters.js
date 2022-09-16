import React, {useState} from 'react';
import Character from "../Character/Character";

const Characters = () => {

    let [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0,6))
        })

    return (
        <div>
            {characters.map((character, index) => (<Character item={character} key={index}/>))}

        </div>
    );
};

export default Characters;



