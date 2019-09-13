import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    console.log('reducer start');
    console.log(action.payload);
    console.log('reducer end');
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}