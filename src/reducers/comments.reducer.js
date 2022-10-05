import {LOAD_COMMENTS} from "./actions";

const commentReducer = (state = {comments: [], comment: null}, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {...state, comments: action.payload};
        default:
            return state
    }
};

export {
    commentReducer
}