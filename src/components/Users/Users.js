import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {getUsers} from "../services/user.api.service";
import {getUsersAxios} from "../services/user.api.axios.servise";
import {logDOM} from "@testing-library/react";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null)

    const lift = (id) => {
        setUser(id);
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value)
    //         });
    // }, [])

    // useEffect(() => {
    //     getUsers().then(value =>
    //         setUsers(value));
    //     }, []);

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, []);

        return (
            <div>
                <hr/>
                {/*{user && <div>{JSON.stringify(user)} </div>}*/}
                {/*{user? <div>asd</div>:<div>qwe</div>}*/}
                {/*{JSON.stringify(user)}*/}
                <div>{user?.username}</div>
                <hr/>
                {users.map((user, index) => (<User item={user} key={index} lift={lift}/>))}
            </div>
        );
    };

    export default Users;