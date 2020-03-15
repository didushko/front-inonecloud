export const SET_AUTH: string = 'SET_AUTH';

export interface AuthProps {
    type: string;
    payload: string;
}

export const setAuth = (token: string) :AuthProps=>({
    type: SET_AUTH,
    payload: token,
});