import React from 'react';
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {useSelector} from "react-redux";
import {State} from "../Store/reducers";
import {Redirect} from "react-router-dom";


export default function Dashboard(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);
    const token: string = useSelector((state: State) =>state.token);

    if(!store.getState().token){
        return  <Redirect
            to={{
                pathname: "/"
            }}
        />
    }

    return (
        <article id='main' className='container'>
            <p>Вход выполнен</p>
        </article>
    )

}