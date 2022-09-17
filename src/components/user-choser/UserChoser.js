import React, {useEffect, useState} from 'react';
import {getUserAxios} from "../services/user.api.axios.servise";

function UserChoser() {
    let [id, setID] = useState(1);
    let [user, setUser] = useState(null);
    const increment = () => {
        id++;
        setID(id)
    }
    const decrement = () => {
        id--;
        setID(id)
    }

    useEffect(() => {
        getUserAxios(id).then(({data}) => {
            setUser(data)
        })
    },[id])

    return (
        <div>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => {
                increment(id)
            }}>next
            </button>
            <button onClick={() => {
                decrement(id)
            }}>prev
            </button>
        </div>
    );
}

export default UserChoser;