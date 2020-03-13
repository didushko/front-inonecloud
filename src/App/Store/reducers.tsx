import {combineReducers} from "redux";
import {languageReducer} from "./language/reducers";

export interface State{
    language: string,
}

export default combineReducers({
    language: languageReducer
});