import React, {useEffect, useState} from 'react';

import {getPostsAxios, getUsersAxios} from "../services/users.api.axios.service";
import User from "../User/User";
import Post from "../Post/Post";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [post, setPost] = useState(null)

    const lift = (id) => {
        getPostsAxios().then(value => setPost(value.data))
    }

    useEffect(()=>{
        getUsersAxios().then(value => setUsers(value.data))
    },[]);


    return (
        <div>
            <div>{users.map((user, index) => (<User user={user} key={index} lift={lift}/>))}</div>
            {post && <div><Post/></div>}
        </div>
    );
};

export default Users;