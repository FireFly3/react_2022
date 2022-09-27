import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>{comment.id} - {comment.name}</div>
            <div>{comment.email}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export {Comment};