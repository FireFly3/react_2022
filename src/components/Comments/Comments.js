import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {LOAD_COMMENTS} from "../../reducers/actions";
import {commentService} from "../../services/comment.service";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    let {comments} = useSelector(state => state.commentReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        commentService.getAllComments().then(({data}) => {
            dispatch({type: LOAD_COMMENTS, payload: data})
        })
    },[])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} user={comment}/>)}
        </div>
    );
};

export {Comments};