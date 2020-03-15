import {SET_AUTH, AuthProps} from "./actions";

const defaultToken: string = '';

export const authReducer = (state: string = defaultToken, action: AuthProps) => {
    switch (action.type) {
        case SET_AUTH:
            return  action.payload
    }
    return state;
};