import {useReducer} from "react";

import {AddCat, DelCat} from "./animals.actions";

const reducer = (state, actions) => {
    switch (actions.type) {
        case AddCat:
            return {...state, cats: [...state.cats, {name: actions.payload, id: new Date().getTime()}]}
        case DelCat:
            return {...state, cats: state.cats.filter(cat => cat.id !== actions.payload)}
        default:
            return state
    }
}

const useCatsReducer = () => useReducer(reducer, {cats: []})

export {
    useCatsReducer
}