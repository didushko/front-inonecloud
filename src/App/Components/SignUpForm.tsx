import * as React from "react";
import {store} from "../App";
import {getLanguage, Language} from "../language";
import {useEffect, useReducer} from "react";
import {useSelector} from "react-redux";
import ChangeLanguage from "./ChangeLanguage";
import {State} from "../Store/reducers";
import axios, {AxiosResponse} from 'axios';

interface IState {
    username: string,
    email: string,
    password: string,
    rPassword: string,
    validation: boolean,
    error: string
}

export default function SignUpForm(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);

    useSelector((state: State) => state.language);



    let [formState, setFormState] = useReducer((state: IState, newState: object) =>{
        let st = {...state, ...newState};
        st = {...st, ...validation(st)};
        return st;
    }, {
        //({...state, ...newState}), {
        username: '',
        email: '',
        password: '',
        rPassword: '',
        validation: false,
        error: '',
    });

    useEffect(()=>{

    },[formState] );

    function validation(st: IState){
        if(st.username.length==0){
            st.error = language.SignUp.form.errors.username;
            st.validation = false;
        }
        //password example
        else if (st.password !== st.rPassword) {
            st.error =  language.SignUp.form.errors.rpassword;
            st.validation =  false;
        }
        else if(st.password.length<6){
            st.error =  language.SignUp.form.errors.password;
            st.validation = false;
        }
        //mailExample
        else if(!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(st.email)){
            st.error = language.SignUp.form.errors.email;
            st.validation = false;
        }
        else{
            st.error = "";
            st.validation = true;
        } //добавить проверки
        return st;
    }


    function changeInput(e: any) {
        setFormState({[e.target.name] : e.target.value});
        console.log(formState);

    }

    async function registration() {
        try {
            let result: AxiosResponse = await axios.post(
                "http://localhost:8080/api/user/signUp",
                {
                    username: formState.username,
                    email: formState.email,
                    password: formState.password,
                    activation: "true"
                },
            );
            if(result.status===201){
                setFormState({error:language.SignUp.form.registration});
            }
            //window.location.href = "/";
       } catch (e) {
            switch(e.response.status){
                case 409: setFormState({error:language.SignUp.form.errors.userExist}); break;
                case 400: setFormState({error: language.SignUp.form.errors.incorrectly}); break;
                default: setFormState({error:language.SignUp.form.errors.server}); break;
            }

        }
    }


    return (
        <form id='regist' method='post' action="?">
            <fieldset id="inputs">

                <input
                    value={formState.username}
                    name='username' type='text'
                    placeholder={language.SignUp.form.username}
                    autoFocus={true} required={true} className='username'
                    onChange={changeInput}
                />

                <input name='email' type='email' placeholder={language.SignUp.form.email} required={true}
                       className='email'
                       value={formState.email}
                       onChange={changeInput}
                />

                <input name='password' type='password' placeholder={language.SignUp.form.password} required={true}
                       pattern='[0-9a-zA-Z]{6,32}' title='Password should have 6 sybols with digits'
                       className='password'
                       value={formState.password}
                       onChange={changeInput}
                />

                <input name='rPassword' type='password' placeholder={language.SignUp.form.rpassword}
                       required={true}
                       pattern='[0-9a-zA-Z]{6,32}' className='password'
                       value={formState.rPassword}
                       onChange={changeInput}
                />

                <ChangeLanguage/>

                <input disabled={!formState.validation} style={!formState.validation ? {backgroundColor: "gray"} : undefined} type="button" name="Registration" value={language.SignUp.form.buttom} className="button"
                       onClick={registration}/>
                       <div style={{color: "red"}}>{formState.error}</div>

            </fieldset>
        </form>
    )
}