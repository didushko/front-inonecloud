import {LangAction, LANGUAGE_CHANGE} from "./actions";

const defaultState: string = 'en';

export const languageReducer = (state: string = defaultState, action: LangAction) => {
    switch (action.type) {
        case LANGUAGE_CHANGE:
            return  action.payload
    }
    return state;
};