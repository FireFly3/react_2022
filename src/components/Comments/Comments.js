import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    })
    return (
        <div>
            <Outlet/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};