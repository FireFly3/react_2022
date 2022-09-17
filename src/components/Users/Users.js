import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {getUsersAxios} from "../services/launch.api.axios.servise";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null)

    const lift = (id) => {
        setUser(id);
    }


    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, []);

        return (
            <div>
                <hr/>
                <div>User Name: {user?.username}</div>
                <div>Email: {user?.email}</div>
                <div>City: {user?.address.city}</div>
                <div>Street: {user?.address.street}</div>
                <div>Suite: {user?.address.suite}</div>


                <hr/>
                {users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
            </div>
        );
    };

    export default Users;