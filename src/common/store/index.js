import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import generalReducer from "../store/reducer/";
import userReducer from "./../../modules/users/store/users-reducer";
import loginReducer from "./../../modules/login/store/login-reducer";

const reducers = combineReducers({
  general: generalReducer,
  user: userReducer,
  login: loginReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export { store };

