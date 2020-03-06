import React from 'react';
import {getL} from "../language";
import {store} from "../App";
import {connect} from "react-redux";



interface IProps {
    children: Array <JSX.Element>;
}

export default function Header (props: IProps){
    return (
        <header id = "logo">
            {props.children.map(i=>i)}
        </header>
    );
}
