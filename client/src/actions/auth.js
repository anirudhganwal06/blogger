import { SIGN_UP, GET_ERRORS } from './types';
import axios from 'axios';

export const signup = newUserData => async dispatch => {
    try {
        await axios.post('/api/auth/signup', newUserData);
        dispatch({
            type: SIGN_UP,
            payload: newUserData
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}