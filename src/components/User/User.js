import React from 'react';

const User = (props) => {
    let {item: user, lift} = props;
    return (
        <div>
            <h3>{user.id} - {user.name}</h3>
            <button onClick={() => {
                lift(user)
            }}>details
            </button>
        </div>
    );
};

export default User;