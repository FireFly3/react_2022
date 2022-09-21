import React from 'react';

const Post = (props) => {
    let {post} = props;
    return (
        <div>
            <div>UserID: {post?.userId}</div>
            <div>ID: {post?.id}</div>
            <div>Title: {post?.title}</div>
            <div>Body: {post?.body}</div>
        </div>
    );
};

export default Post;