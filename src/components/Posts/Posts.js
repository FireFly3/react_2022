import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {
    const [post, setPost] = useState(null);

    let {state: comment} = useLocation()
    let id = comment.postId;
    console.log(id);


    useEffect(() => {
        postsService.getById(id).then(({data}) => setPost(data))
    }, [id])

    return (
        <div>
            {
                post && (<Post post={post}/>)
            }
        </div>
    );
};

export {Posts};