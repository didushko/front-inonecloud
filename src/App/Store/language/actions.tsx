export const LANGUAGE_CHANGE: string = 'LANGUAGE_CHANGE';

export interface LangAction {
    type: string;
    payload: string;
}

export const setLanguage = (lang: string) :LangAction=>({
    type: LANGUAGE_CHANGE,
    payload: lang,
});