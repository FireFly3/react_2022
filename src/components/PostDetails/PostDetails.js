import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const PostDetails = () => {
    let {state} = useLocation();
    let {id} = useParams();
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export {PostDetails};