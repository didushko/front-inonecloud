import * as React from "react";
import {store} from "../App";
import {getLanguage, Language} from "../language";
import {SyntheticEvent, useReducer} from "react";
import {useSelector} from "react-redux";
import ChangeLanguage from "./ChangeLanguage";
import {State} from "../Store/reducers";

interface IState {
    username: string | undefined,
    email: string | undefined,
    password: string | undefined,
    rPassword: string | undefined,
}

export default function SignUpForm(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);

    useSelector((state: State) =>state.language);


    let [formState, setFormState] = useReducer( (state: IState, newState: object) => ({ ...state, ...newState }),{
        username: undefined,
        email: undefined,
        password: undefined,
        rPassword: undefined
    });


    function changeInput(e: any) {
        setFormState(Object.assign(formState, {[e.target.name] : e.target.value}));
        console.log(formState);
        console.log(e.target.name);
        console.log(e.target.value);
    }


    return (
        <form id='regist' method='post' action="?">
            <h1>{formState.username}</h1>
            <fieldset id="inputs">

                <input
                    value={formState.username}
                    name='username' type='text'
                    placeholder={language.SignUp.form.username}
                    autoFocus={true} required={true} className='username'
                    onChange={changeInput}/>

                <input name='email' type='email' placeholder={language.SignUp.form.email} required={true}
                       className='email'
                       value={formState.email}
                       onChange={changeInput}/>

                <input name='password' type='password' placeholder={language.SignUp.form.password} required={true}
                       pattern='[0-9a-zA-Z]{6,32}' title='Password should have 6 sybols with digits'
                       className='password'
                       value={formState.password}
                       onChange={changeInput}/>

                <input name='rPassword' type='password' placeholder={language.SignUp.form.rpassword}
                       required={true}
                       pattern='[0-9a-zA-Z]{6,32}' className='password'
                       value={formState.rPassword}
                       onChange={changeInput}/>

                <ChangeLanguage/>

                <input type="button" name="Registration" value={language.SignUp.form.buttom} className="button"
                        onClick={()=>{console.log(formState.username)}}/>

            </fieldset>
        </form>
    )
}