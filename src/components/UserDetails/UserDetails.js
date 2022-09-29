import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {
    let {state:user} = useLocation();

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export {UserDetails};