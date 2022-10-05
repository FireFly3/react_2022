import {LOAD_USERS} from "./actions";

const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, users: action.payload};
        default:
            return state
    }
};

export {
    userReducer
}