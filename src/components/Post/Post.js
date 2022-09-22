import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div><b>User ID:</b> {post.userId}</div>
            <div><b>ID:</b> {post.id}</div>
            <div><b>Title:</b> {post.title}</div>
            <div><b>Body:</b> {post.body}</div>
        </div>
    );
};

export {Post};