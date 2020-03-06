import React from 'react';
import SignUpForm from "../Components/SignUpForm";
import {connect} from "react-redux";
import {setLanguage} from "../Store/language/actions";
import {store} from "../App";
import {getL} from "../language";


 function SignUp(props: any): JSX.Element {

     // @ts-ignore
     const language = getL(store.getState().language.language);

    return (
        <article id='main' className='container'>
            <header className="aboutcloud">
                <h2>{language.SignUp.header}</h2>
                <hr/>
            </header>
            <article id='registration'>
                <p>{language.SignUp.form.title}</p>
                <SignUpForm/>
            </article>
        </article>
    )
}
const mapStateToProps = (state: any)=>{
    return{
        language: state.language.language,
    };
};


export default connect(mapStateToProps)(SignUp);