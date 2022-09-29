import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const UserDetailsV2 = () => {
    const {id} = useParams();

    const [user, setUser] = useState();

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users/'+ id)

        .then(value => value.json())
           .then(value => setUser({...value}))
    },[id])
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export {UserDetailsV2};