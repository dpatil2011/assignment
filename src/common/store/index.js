import generalReducer from '../store/reducer/'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { connect } from 'react-redux'
import userReducer from './../../modules/users/store/users-reducer'

const reducers = combineReducers({
    general: generalReducer,
    user: userReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))
export { store };