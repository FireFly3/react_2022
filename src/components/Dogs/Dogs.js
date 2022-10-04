import React, {useRef} from 'react';

import {useDogsReduser} from "../../reducers";

const Dogs = () => {
    const [state, dispatch] = useDogsReduser();

    const dogInput = useRef();

    return (
        <div>
            <span>Dogs: <input type="text" ref={dogInput}/></span>
            <button onClick={() => dispatch({
                type: 'AddDog',
                payload: dogInput.current.value
            }, dogInput.current.value = '')}>Add dog
            </button>
            {state.dogs.map(dog => (<div key={dog.id}>
                {dog.name}
                <button onClick={() => dispatch({type: 'DelDog', payload: dog.id})}>Delete dog</button>
            </div>))}

        </div>
    );
};

export {Dogs};