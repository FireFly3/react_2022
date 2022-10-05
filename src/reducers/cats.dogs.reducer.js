import {useReducer} from "react";

import {AddCat, AddDog, DelCat, DelDog} from "./animals.actions";

const reducer = (state, actions) => {
    switch (actions.type) {
        case AddCat:
            return {...state, cats: [...state.cats, {name: actions.payload, id: new Date().getTime()}]}
        case DelCat:
            return {...state, cats: state.cats.filter(cat => cat.id !== actions.payload)}
        case AddDog:
            return {...state, dogs: [...state.dogs, {name: actions.payload, id: new Date().getTime()}]}
        case DelDog:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== actions.payload)}
        default:
            return state
    }
}

const useCatsDogsReducer = () => useReducer(reducer, {cats: [], dogs:[]})

export {
    useCatsDogsReducer
}