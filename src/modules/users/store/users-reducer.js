import * as actionType from './users-action-type';

const initialState = {
   users: 'jsdc',
}

const handler = (currentState) => {
    const setListUsers = payload => ({...currentState, users: payload})
    return{
        setListUsers,
    };
};

export default (state = initialState, action) => {
    const { payload, type} = action;
    switch(type) {
        case actionType.SET_LIST_USERS:
          return handler(state).setListUsers(payload);
        default:
            return state;
    };
};