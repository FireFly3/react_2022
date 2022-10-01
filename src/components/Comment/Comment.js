import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <div>{comment.id} - {comment.name}</div>
            <Link>Comment Post</Link>
        </div>
    );
};

export {Comment};