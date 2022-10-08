import React from 'react';

const Chooser = ({user}) => {
    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <h4>User name: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Address</h4>
            <h5>City: {user.address.city}</h5>
            <h5>Street: {user.address.street}</h5>
            <h5>Suite: {user.address.suite}</h5>
        </div>
    );
};

export {Chooser};