import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {

    const dispatch = useDispatch();
    const {id, name, username, email} = user;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>User name: {username}</div>
            <div>Email: {email}</div>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>Select</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>Get From API</button>
            <button onClick={()=>dispatch(userActions.deleteById(id))}>Delete</button>
        </div>
    );
};

export {User};