import {combineReducers} from "redux";
import {languageReducer} from "./language/reducers";
import {authReducer} from "./auth/reducers";

export interface Token {
    token: string,
    expired_in: number
}

export interface State {
    language: string,
    token: Token,
}

export default combineReducers({
    language: languageReducer,
    token: authReducer,
});