import {Link} from "react-router-dom";
import React from "react";
import Header from "../Components/Header";
import {connect} from "react-redux";
import {getL} from "../language";
import {store} from "../App";


function HeaderElement(){
    // @ts-ignore
    const language = getL(store.getState().language.language);
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
const mapStateToProps = (state: any)=>{
    return{
        language: state.language.language,
    };
};

export default connect(mapStateToProps)(HeaderElement);
