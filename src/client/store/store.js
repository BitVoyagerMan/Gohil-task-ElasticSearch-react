import { createStore, applyMiddleware } from "redux";
import roleReducer from "../reducers/role";
import thunk from "redux-thunk";

const store = createStore(roleReducer, applyMiddleware(thunk));

export default store;