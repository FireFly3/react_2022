import {CHOOSER, LOAD_USERS} from "./actions";

const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, users: action.payload};
        case CHOOSER:
            const user = state.users.find(user => user.id === action.payload);
            return {...state, user};
        default:
            return state
    }
};

export {
    userReducer
}