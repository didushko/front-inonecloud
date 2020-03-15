import * as React from "react";
import {store} from "../App";
import {getLanguage, Language} from "../language";
import {useReducer} from "react";
import {useSelector} from "react-redux";
import ChangeLanguage from "./ChangeLanguage";
import {State} from "../Store/reducers";
import axios from 'axios';

interface IState {
    username: string | undefined,
    email: string | undefined,
    password: string | undefined,
    rPassword: string | undefined,
    emailValid: boolean,
    passwordValid: boolean
}

export default function SignUpForm(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);

    useSelector((state: State) => state.language);


    let [formState, setFormState] = useReducer((state: IState, newState: object) => ({...state, ...newState}), {
        username: undefined,
        email: undefined,
        password: undefined,
        rPassword: undefined,
        emailValid: false,
        passwordValid: false,
    });


    function changeInput(e: any) {
        setFormState({[e.target.name]: e.target.value});
        if(formState.password==formState.rPassword){} //добавить проверки
    }

    async function registration() {
        let result = await axios.get(
            "http://localhost:8080/api/user/signUp",
            {
                data: {
                    username: formState.username,
                    email: formState.email,
                    password: formState.password,
                    activation: "true"
                },
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json;charset=UTF-8",
                }
            },
        )
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
                       onClick={registration}/>

            </fieldset>
        </form>
    )
}