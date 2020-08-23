import * as actionType from './login-action-type';
import { submit } from 'redux-form';


export const actionButtonSubmit = () => (dispatch) => {
    dispatch(submit('login-form'));
};