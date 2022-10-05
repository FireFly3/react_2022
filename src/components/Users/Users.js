import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Users = () => {

    let state = useSelector(state => state.userReducer);

    let dispatch = useDispatch();

    useEffect()

    return (
        <div>
            
        </div>
    );
};

export {Users};