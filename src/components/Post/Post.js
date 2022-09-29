import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    let navigate = useNavigate();
    return (
        <div>
            <Link to={`${post.id}`}><h3>{post.title}</h3></Link>
            <button onClick={() => {
                navigate(post.id.toString(), {state: {...post}});
            }}>{post.title}</button>

        </div>
    );
};

export {Post};