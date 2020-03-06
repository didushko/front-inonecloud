import React from 'react';
import {getL} from "../language";
import {store} from "../App";
import {connect} from "react-redux";



interface IProps {
    children: Array <JSX.Element>;
}

function Header (props: IProps){
    // @ts-ignore
    const language = getL(store.getState().language.language);
    return (
        <header id = "logo">
            {props.children.map(i=>i)}
        </header>
    );
}

const mapStateToProps = (state: any)=>{
    return{
        language: state.language.language,
    };
};

export default connect(mapStateToProps)(Header);
