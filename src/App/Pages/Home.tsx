import React from 'react';
import {getLanguage, Language} from "../language";
import {store} from "../App";
import SignIn from "./SignIn";
import {AuthProps} from "../Store/auth/actions";
import {useSelector} from "react-redux";
import {State} from "../Store/reducers";
import { Redirect } from "react-router-dom";



export default function Home() : JSX.Element {

    const language :Language = getLanguage(store.getState().language);
    const token :string = useSelector((state :State) =>state.token);


    console.log(token);

    if(!store.getState().token){return (<SignIn/>)};

    return(
        <Redirect
            to={{
                pathname: "/dashboard"
            }}
        />
        // <h2 style={{margin: "25%"}}>Вход выполнен</h2>
    )
}