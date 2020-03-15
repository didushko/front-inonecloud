import React, {useReducer} from "react";
import {getLanguage, Language} from "../language";
import {store} from "../App";

interface IState {
    username: string,
    password: string
}

function LogInForm(): JSX.Element {
    const language: Language = getLanguage(store.getState().language);

    const [logState, logDispatch] = useReducer((state: IState, newState: object) => ({...state, ...newState}),
        {
            username: '',
            password: '',
        });

    return (<form id="auth">
        <fieldset id="inputs">
            <input name="username" type="text"
                   placeholder={language.SignIn.username}
                   autoFocus={true} required={true}
                   className="username"
                   value={logState.username}
                   // onChange={(e)=>logDispatch({[e.target.name] : e.target.value})}
                   onChange={(e)=>logDispatch({[e.target.name] : e.target.value})}
            />
            <input name="password"
                   type="password"
                   placeholder={language.SignIn.password}
                   required={true} className="password"
                   value={logState.password}
                   onChange={(e)=>logDispatch({[e.target.name] : e.target.value})}
            />
        </fieldset>
        <fieldset id="actions">
            <input data-v-3eea7fb5="" type="button" name="logIN" value={language.SignIn.login} className="button"/>
        </fieldset>
    </form>)
}

export default LogInForm;