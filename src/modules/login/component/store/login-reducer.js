import * as actionType from './login-action-type';

const initialState = {
    initialUser: {
        userName: 'ksdf',
        password: '`12',
      },
}

const handler = (currentState) => {

}

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        default:
            return state;
    }

}