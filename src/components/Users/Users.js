import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services/user.service";
import {User} from "../User/User";
import {LOAD_USERS} from "../../reducers/actions";

const Users = () => {

    let {users} = useSelector(state => state.userReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        userService.getAllUsers().then(({data}) => {
            dispatch({type: LOAD_USERS, payload: data})
        })
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};