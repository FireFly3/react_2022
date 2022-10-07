import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()}>{user.id} - {user.name}</Link>
            
        </div>
    );
};

export {User};