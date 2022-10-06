import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {LOAD_POSTS} from "../../reducers/actions";
import {postService} from "../../services/post.service";
import {Post} from "../Post/Post";

const Posts = () => {
    let {posts} = useSelector(state => state.postReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        postService.getAllPosts().then(({data}) => {
            dispatch({type: LOAD_POSTS, payload: data})
        })
    },[])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};