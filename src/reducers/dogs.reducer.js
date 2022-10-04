import {useReducer} from "react";

import {AddDog, DelDog} from "./animals.actions";

const reducer = (state, actions) => {
    switch (actions.type) {
        case AddDog:
            return {...state, dogs: [...state.dogs, {name: actions.payload, id: new Date().getTime()}]}
        case DelDog:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== actions.payload)}
        default:
            return state
    }
}

const useDogsReduser = () => useReducer(reducer, {dogs: []})

export {
    useDogsReduser
}