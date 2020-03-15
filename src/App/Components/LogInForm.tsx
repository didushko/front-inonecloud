import React, {useReducer} from "react";
import {getLanguage, Language} from "../language";
import {store} from "../App";
import axios, {AxiosResponse} from "axios";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../Store/reducers";
import {authReducer} from "../Store/auth/reducers";
import {setAuth} from "../Store/auth/actions";

interface IState {
    username: string,
    password: string,
    error: string,
}

function LogInForm(): JSX.Element {
    const language: Language = getLanguage(store.getState().language);
    const token :string = useSelector((state :State) =>state.token);
    const dispatch = useDispatch();

    const [logState, logDispatch] = useReducer((state: IState, newState: object) => ({...state, ...newState}),
        {
            username: '',
            password: '',
            error: '',
        });

    async function logIn(){
        if(!logState.username || !logState.password){
            logDispatch({error: "Введите корректные данные"});
            return;
        }
        try {
            let result: AxiosResponse = await axios.post(
                "http://localhost:8080/api/auth",
                {
                    username: logState.username,
                    password: logState.password,
                },
            );
            if(result.status===200){
                logDispatch({error:"Вход выполнен!"});
                console.log(result);
                dispatch(setAuth(result.data))
            }
            //window.location.href = "/";
        } catch (e) {
                switch(e.response.status){
                case 403: logDispatch({error:"Некорректный логин/пароль"}); break;
                default: logDispatch({error:"К сожалению сервер временно недоступен, попробуйте позже"}); break;
            }

        }
    }

    return (<form id="auth">
        <fieldset id="inputs">
            <input name="username" type="text"
                   placeholder={language.SignIn.username}
                   autoFocus={true} required={true}
                   className="username"
                   value={logState.username}
                   // onChange={(e)=>logDispatch({[e.target.name] : e.target.value})}
                   onChange={(e)=>logDispatch({[e.target.name] : e.target.value, error: ''})}
            />
            <input name="password"
                   type="password"
                   placeholder={language.SignIn.password}
                   required={true} className="password"
                   value={logState.password}
                   onChange={(e)=>logDispatch({[e.target.name] : e.target.value, error: ''})}
            />
        </fieldset>
        <fieldset id="actions">
            <input type="button" name="logIN" value={language.SignIn.login} className="button" onClick={logIn}/>
            <div style={{color: "red", position: "absolute", textAlign: "center", left: "40%"}} >{logState.error}</div>
        </fieldset>
    </form>)
}

export default LogInForm;