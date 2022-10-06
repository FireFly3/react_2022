import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {commentReducer, postReducer, userReducer} from "./reducers";
import {BrowserRouter} from "react-router-dom";


// const userReducer = (state = {users: [], user: null}, action) => {
//     switch (action.type) {
//         case "LOAD_USERS":
//             return {...state, users: action.payload};
//         case "CHOOSE_USER":
//             let id = action.payload;
//             let user = state.users.find(value => value.id === id);
//             return {...state, user: user}
//         default:
//             return state
//     }
// };
//
// const postReducer = (state = {posts: [], post: null}, action) => {
//     switch (action.type) {
//         case "LOAD_POSTS":
//             return {...state, posts: action.payload};
//         case "CHOOSE_POST":
//             let id = action.payload;
//             let post = state.posts.find(value => value.id === id);
//             return {...state, post: post}
//         default:
//             return state
//     }
// };
//
// const commentReducer = (state = {comments: [], comment: null}, action) => {
//     switch (action.type) {
//         case "LOAD_COMMENTS":
//             return {...state, comments: action.payload};
//         case "CHOOSE_COMMENT":
//             let id = action.payload;
//             let comment = state.comments.find(value => value.id === id);
//             return {...state, comment: comment}
//         default:
//             return state
//     }
// };

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

