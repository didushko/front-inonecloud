import {LangAction, LANGUAGE_CHANGE} from "./actions";
interface IState {
    language: string;
}

const defaultState: IState = {
    language: 'en'
};

export const languageReducer = (state: object = defaultState, action: LangAction) => {
    switch (action.type) {
        case LANGUAGE_CHANGE:
            return {
                ...state, language: action.payload
            }
    }
    return state;
};