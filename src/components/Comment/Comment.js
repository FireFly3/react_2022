import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <Link to={'/posts/'+ comment.postId} state={{...comment}}>{comment.id} - {comment.name}</Link>
        </div>
    );
};

export {Comment};