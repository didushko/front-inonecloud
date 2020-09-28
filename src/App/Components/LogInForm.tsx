import React, {useReducer, useRef} from "react";
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {State, Token} from "../Store/reducers";
import {setAuth} from "../Store/auth/actions";

import authService from "../Api/AuthService"
import {IAuth, IAuthResponse} from "../Models/LoginModel";

function LogInForm(): JSX.Element {
    const language: Language = getLanguage(store.getState().language);
    const token: Token = useSelector((state: State) => state.token);
    const dispatch = useDispatch();


    const [logState, logDispatch] = useReducer((state: IAuth, newState: object) => ({...state, ...newState}),
        {
            username: '',
            password: '',
            error: '',
        });

    async function logIn() {
        if (!logState.username || !logState.password) {
            logDispatch({error: "Введите корректные данные"});
            return;
        }
        const data: IAuth = {
            username: logState.username.toString(),
            password: logState.password.toString()
        }

        try {
            let result: any = await authService.authUser(data);

            if (result.data.token) {
                logDispatch({error: "Вход выполнен!"});
                console.log(result);
                dispatch(setAuth(result.data.token));
                console.log("result", result);
                console.log("token", store.getState().token);
            }
        } catch (e) {
            switch (e.response.status) {
                case 400:
                    logDispatch({error: "Некорректный логин/пароль"});
                    break;
                default:
                    logDispatch({error: "К сожалению сервер временно недоступен, попробуйте позже"});
                    break;
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
                   onChange={(e) => logDispatch({[e.target.name]: e.target.value, error: ''})}
            />
            <input name="password"
                   type="password"
                   placeholder={language.SignIn.password}
                   required={true} className="password"
                   value={logState.password}
                   onChange={(e) => logDispatch({[e.target.name]: e.target.value, error: ''})}
            />
        </fieldset>
        <fieldset id="actions">
            <input type="button" name="logIN" value={language.SignIn.login} className="button" onClick={logIn}/>
            <div style={{color: "red", position: "absolute", textAlign: "center", left: "40%"}}>{logState.error}</div>
        </fieldset>
    </form>)
}

export default LogInForm;