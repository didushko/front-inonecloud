import React from 'react';
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {useSelector} from "react-redux";
import {State, Token} from "../Store/reducers";
import {Redirect} from "react-router-dom";
import axios, {AxiosResponse} from "axios";


export default function Dashboard(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);
    const token: Token = useSelector((state: State) => state.token);



    if (!store.getState().token) {
        return <Redirect
            to={{
                pathname: "/"
            }}
        />

    }

    checkConnectedTokens(token.token);

    async function checkConnectedTokens(token: String) {
        try {
            let result: AxiosResponse = await axios.get(
                "http://localhost:8080/api/clouds/checkTokens",
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            if (result.status === 302 || result.status === 200) {
              console.log("success")
            }

        } catch (e) {
            console.log(e.response)

            switch (e.response.status) {
                case 404:
                    console.error("Not connected");
                    break;
                case 401:
                    console.error("Unauthorized");
                    break;
                case 500:
                    console.log( e.response.data.message);
                    break;
                default:
                    console.log("");
                    break;
            }
        }
    }

    return (
        <article id='main' className='container'>

            <p>Вход выполнен</p>


        </article>
    )

}
