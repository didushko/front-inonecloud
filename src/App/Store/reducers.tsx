import {combineReducers} from "redux";
import {languageReducer} from "./language/reducers";
import {authReducer} from "./auth/reducers";

export interface State{
    language: string,
    token: string,
}

export default combineReducers({
    language: languageReducer,
    token: authReducer,
});