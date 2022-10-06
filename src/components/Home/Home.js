import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <Outlet/>
        </div>
    );
};

export {Home};