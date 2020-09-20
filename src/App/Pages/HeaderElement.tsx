import {Link, NavLink} from "react-router-dom";
import React from "react";
import Header from "../Components/Header";
import {useSelector} from "react-redux";
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {State, Token} from "../Store/reducers";


export default function HeaderElement() {
    useSelector((state: State) => state.language);
    const language: Language = getLanguage(store.getState().language);
    const token: Token = useSelector((state: State) => state.token);
    const headerElements: Array<JSX.Element> = [<h1 key="header">InOneCloud</h1>];

    if (store.getState().token) {
        headerElements.push(<nav key="nav">
            <ul key="menu" id="topmenu">
                <li key="/"><NavLink to='/'>{language.Header.dashboard}</NavLink></li>
                <li key="/about"><NavLink to='/about'>{language.Header.about}</NavLink></li>
                <li key="/settings"><NavLink to='/settings'>{language.Header.settings}</NavLink></li>
                <li key="/signup"><NavLink to='/signup'>{language.Header.signOut}</NavLink></li>
            </ul>
        </nav>);
    } else {
        headerElements.push(<nav key="nav">
            <ul key="menu" id="topmenu">
                <li key="/"><NavLink to='/'>{language.Header.home}</NavLink></li>
                <li key="/about"><NavLink to='/about'>{language.Header.about}</NavLink></li>
                <li key="/signup"><Link to='/signup'>{language.Header.signUp}</Link></li>
            </ul>
        </nav>);
    }
    return (
        <Header children={headerElements}></Header>
    )

}
