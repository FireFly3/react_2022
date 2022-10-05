import React from 'react';

const User = ({user}) => {
    return (
        <div>
            {user.id} - {user.name}
        </div>
    );
};

export {User};