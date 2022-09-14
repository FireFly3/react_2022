import React, {useState} from 'react';
import User from "../User/User";

const Users = () => {

    let [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
setUsers(value)
        });
    return (
        <div>
            {users.map((user, index)=>(<User item={user} key={index}/>))}
        </div>
    );
};

export default Users;