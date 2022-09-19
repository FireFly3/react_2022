import React, {useEffect, useState} from 'react';

import {getUsersAxios} from "../services/users.api.axios.service";
import User from "../User/User";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null)

    const lift = (id) => {
        setPosts(id);
    }

    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))
    },[]);

    return (
        <div>
            {users.map((user, index)=>(<User user={user} key={index} lift={lift}/>))}
        </div>
    );
};

export default Users;