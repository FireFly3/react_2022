import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";


const Users = ({userIdLift}) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            {users.map((user, index)=>(<User user={user} key={index} userIdLift={userIdLift}/>))}
        </div>
    );
};

export {Users};