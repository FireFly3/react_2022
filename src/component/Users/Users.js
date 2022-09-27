import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";
import {UserForm} from "../UserForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};