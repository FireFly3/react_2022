import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";
import {CommentForm} from "../CommentForm/CommentForm";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAllComment().then(({data})=> setComments(data))
    },[])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};