import {Link} from "react-router-dom";
import React from "react";
import Header from "../Components/Header";
import {useSelector} from "react-redux";
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {State} from "../Store/reducers";


export default function HeaderElement() {
    useSelector((state: State) => state.language);
    const language: Language = getLanguage(store.getState().language);
    const token: string = useSelector((state: State) => state.token);
    const headerElements: Array<JSX.Element> = [<h1 key="header">InOneCloud</h1>];

    if (store.getState().token) {
        headerElements.push(<nav key="nav">
            <ul key="menu" id="topmenu">
                <li key="/"><Link to='/'>{language.Header.dashboard}</Link></li>
                <li key="/about"><Link to='/about'>{language.Header.about}</Link></li>
                <li key="/settings"><Link to='/settings'>{language.Header.settings}</Link></li>
                <li key="/signup"><Link to='/signup'>{language.Header.signOut}</Link></li>
            </ul>
        </nav>);
    } else {
        headerElements.push(<nav key="nav">
            <ul key="menu" id="topmenu">
                <li key="/"><Link to='/'>{language.Header.home}</Link></li>
                <li key="/about"><Link to='/about'>{language.Header.about}</Link></li>
                <li key="/signup"><Link to='/signup'>{language.Header.signUp}</Link></li>
            </ul>
        </nav>);
    }
    return (
        <Header children={headerElements}></Header>
    )

}
