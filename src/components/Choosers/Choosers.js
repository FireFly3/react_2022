import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CHOOSER} from "../../reducers/actions";
import {Chooser} from "../Chooser/Chooser";

const Choosers = () => {

    const {user} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: CHOOSER, payload: +id})
    }, [id])

    return (
        <div>
            {user && (<Chooser user={user}/>)}
        </div>
    );
};


export {Choosers};