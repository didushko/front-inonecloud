import React from 'react';
import Header from "./Components/Header/Header";
import Elem from "./Components/Header/Elem";
import HeaderElem from "./Components/Header/HeaderElem";


const a = [
    <HeaderElem text="Logo"/>,
    <HeaderElem text="Home"/>,
    <HeaderElem text="About"/>,
    <HeaderElem text="Sign Up"/>,
]


export default function App (){
    return(<Header children={a}/>)
}