import {} from './../action/index';

const intialState = {

};

export default (state = intialState, action) => {
    const {payload, type} = action;
    switch(type){
        default:
            return state;
    }
}