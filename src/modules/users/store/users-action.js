import * as actionType from './users-action-type';
import axios from 'axios';

const setListUsers = payload => ({
    type: actionType.SET_LIST_USERS,
    payload,
})

export const getListUsers = () => dispatch => new Promise((resolve, reject) => {
    axios.get('http://localhost:3004/members')
    .then((response) => {
        dispatch(setListUsers(response.data))
        resolve(response.data)
    },
    (error) => {
        alert(error);
        reject();
    }
    );
})
