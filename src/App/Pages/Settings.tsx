import React from 'react';
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {useSelector} from "react-redux";
import {State, Token} from "../Store/reducers";
import {Redirect} from "react-router-dom";
import ChangePasswordForm from "../Components/ChangePasswordForm";


export default function Settings(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);
    const token: Token = useSelector((state: State) =>state.token);

    if(!store.getState().token){
        return  <Redirect
            to={{
            pathname: "/"
        }}
        />
    }

    return (
        <article id='main' className='container'>
        <h2>Settings</h2>
            <ChangePasswordForm></ChangePasswordForm>
    </article>
)

}