import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h3>{user.id}-{user.name}</h3>
            <div>{user.username}</div>
            <div>{user.email}</div>
        </div>
    );
};

export {User};