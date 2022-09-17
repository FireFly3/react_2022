import React, {useEffect, useState} from 'react';

import User from "../User/User";

import {getUsersAxios} from "../services/user.api.axios.servise";


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
                <h4>Username:{user?.username}</h4>
                <h4>Email: {user?.email}</h4>
                <h4>City: {user?.address.city}</h4>
                <h4>Street: {user?.address.street}</h4>
                <h4>Suite: {user?.address.suite}</h4>

                <hr/>
                {users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
            </div>
        );
    };

    export default Users;