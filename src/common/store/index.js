import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import generalReducer from "../store/reducer/";
import userReducer from "./../../modules/users/store/users-reducer";

const reducers = combineReducers({
  general: generalReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export { store };

