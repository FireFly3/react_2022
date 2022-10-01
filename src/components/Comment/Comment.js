import React from 'react';
import {Link, Outlet} from "react-router-dom";


const Comment = ({comment}) => {
    return (
        <div>
            <Outlet/>
            <Link to={comment.postId.toString()} state={{...comment}}>{comment.id} - {comment.name}</Link>
        </div>
    );
};

export {Comment};