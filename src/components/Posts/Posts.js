import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";
import {useLocation} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);


    let location = useLocation();
    let {state: comment} = location;
    console.log(location);

    // useEffect(() => {
    //     postsService.getById(comment.postId).then(({data}) => setPosts(data))
    // },[postId])

    return (
        <div>
            {/*{*/}
            {/*    posts.map(post => <Post key={post.id} post={post}/>)*/}
            {/*}*/}
            J
        </div>
    );
};

export {Posts};