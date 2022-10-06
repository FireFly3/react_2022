import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import {commentReducer, postReducer, userReducer} from "./reducers";


let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
})

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

