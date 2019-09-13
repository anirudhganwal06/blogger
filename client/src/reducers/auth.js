import { SIGN_UP } from '../actions/types';

const initialState = {
    newUser: {},
    user: {},
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return ({
                ...state,
                newUser: action.payload,
                isLoggedIn: true
            });
        default:
            return state;
    }
}