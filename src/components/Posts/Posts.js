import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";
import {useLocation} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

let {state: comment} = useLocation()
    let id = comment.postId;


    useEffect(() => {
        postsService.getById(id).then(({data}) => setPosts(data))
    },[id])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
            {/*{JSON.stringify(comment)}*/}
        </div>
    );
};

export {Posts};