import React, {useEffect} from 'react';
import SignUpForm from "../Components/SignUpForm";
import {useSelector} from "react-redux";
import {store} from "../App";
import {getLanguage, Language} from "../language";
import {State} from "../Store/reducers";


export default function SignUp(): JSX.Element {

     useSelector((state:State) =>state.language);

     const language :Language= getLanguage(store.getState().language);

    return (
        <article id='main' className='container'>
            <header className="aboutcloud">
                <h2>{language.SignUp.header}</h2>
                <hr/>
            </header>
            <article id='registration'>
                <p>{language.SignUp.form.title}</p>
                <SignUpForm/>
            </article>
        </article>
    )
};