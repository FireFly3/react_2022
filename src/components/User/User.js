import React from 'react';

const User = (props) => {
    let {user} = props;
    return (
        <div>
            <h2>{user.id} {user.name}</h2>
            <div>User Name: {user.username}</div>
            <div>Email: {user.email}</div>
        </div>
    );
};

export default User;