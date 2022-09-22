import React from 'react';

const User = ({user, userIdLift}) => {
    return (
        <div>
            <div>{user.id}-{user.name}</div>
            <button onClick={()=> userIdLift(user.id)}>Posts</button>
        </div>
    );
};

export {User};