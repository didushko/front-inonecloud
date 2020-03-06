import React from 'react';
import LogInForm from "../Components/LogInForm";
import {connect} from "react-redux";
import {getL} from "../language";
import {store} from "../App";

 function SignIn(): JSX.Element {
     // @ts-ignore
     const language = getL(store.getState().language.language);
    return (
        <div>
            <section id="banner">
                <div id="cover">
                    <header>
                        <h2 id="hello">{language.SignIn.header}</h2>
                    </header>
                   <LogInForm/>
                </div>
            </section>
        </div>
    )
}
// const mapStateToProps = (state: any)=>{
//     return{
//         language: state.language.language,
//     };
// };

export default SignIn;