import {Link} from "react-router-dom";
import React from "react";
import Header from "../Components/Header";
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {useSelector} from "react-redux";
import {State} from "../Store/reducers";


export default function FooterElement(){

    useSelector((state :State) =>state.language);
    const language :Language = getLanguage(store.getState().language);
    const headerElements: Array<JSX.Element> = [
        <h1 key="header">InOneCloud</h1>,
        <nav>
            <ul key="menu" id="topmenu">
                <li key="/"><Link to='/'>{language.Header.home}</Link></li>
                <li key="/about"><Link to='/about'>{language.Header.about}</Link></li>
                <li key="/signup"><Link to='/signup'>{language.Header.signUp}</Link></li>
            </ul>
        </nav>
    ];
    return(
        <Header children={headerElements}></Header>
    )
}
