import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();

    const {users, error, loading, userFromAPI} = useSelector(state => state.userReducer);

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])
    return (
        <div>
            {loading && <h1>Loading..................</h1>}
            {error && JSON.stringify(error)}
            {userFromAPI&& userFromAPI.email}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};