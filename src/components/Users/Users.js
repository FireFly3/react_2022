import React, {useEffect, useReducer} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services/user.service";
import {User} from "../User/User";
import {LOAD_USERS} from "../../reducers/actions";

const Users = () => {

    let {users} = useSelector(state => state.useReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        userService.getAllUsers().then(({value}) => {
            dispatch({type: LOAD_USERS, payload: value})
        })
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};