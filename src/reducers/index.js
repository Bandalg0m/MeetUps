import {combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./userReducer";

const rootReducer = combineReducers( {
    user:userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())