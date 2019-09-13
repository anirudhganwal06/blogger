import { SIGN_UP, GET_ERRORS } from './types';
import axios from 'axios';

export const signup = newUserData => async dispatch => {
    try {
        console.log('newuserdata start');
        console.log(newUserData);
        console.log('newuserdata end');
        const result = await axios.post('/api/auth/signup', newUserData);
        console.log(result);
        dispatch({
            type: SIGN_UP,
            payload: newUserData
        });
    } catch (err) {
        console.log('authaction start');
        console.log(err.response.data);
        console.log('authaction end');
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}