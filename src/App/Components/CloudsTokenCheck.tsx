import React from 'react';
import {State, Token} from "../Store/reducers";
import {useSelector} from "react-redux";
import axios, {AxiosResponse} from "axios";

export default function CheckTokens(): JSX.Element {

    const token: Token = useSelector((state: State) => state.token)

    async function checkConnectedTokens(){
        try{
            let result: AxiosResponse = await axios.get(
                "http://localhost:8080/api/clouds/checkTokens",
                {
                    headers: {
                        Authorization: "Bearer " + token.token
                    }
                }
            );
            if(result.status === 302 || result.status === 200){
                console.log("Connected")
            }
        }catch (e){
            console.log(e.response)

            switch (e.response.status) {
                case 404: console.log("Not connected"); break;
                case 401: console.log("Unauthorized"); break;
                case 500: console.log(e.response.data.message); break;
                default: ; break;
            }
        }

    }

    return (<div>
        <button onClick={checkConnectedTokens}>Check Token</button>
    </div>)
}