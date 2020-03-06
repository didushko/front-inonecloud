import * as React from "react";
import {store} from "../App";
import ChangeLanguage from "./ChangeLanguage";
import ChangeLanguageContainer from "./ChangeLanguageContainer";
import {connect, Provider} from "react-redux";
import LogInForm from "./LogInForm";
import {getL} from "../language";


function SignUpForm(): JSX.Element {
    // @ts-ignore
    const language = getL(store.getState().language.language);
    return (
        <form id='regist' method='post' action="?">
            <fieldset id="inputs">

                <input name='username' type='text' placeholder={language.SignUp.form.username}
                       autoFocus={true} required={true} className='username'/>
                <input name='email' type='email' placeholder={language.SignUp.form.email} required={true}
                       className='email'/>

                <input name='password' type='password' placeholder={language.SignUp.form.password} required={true}
                       pattern='[0-9a-zA-Z]{6,32}' title='Password should have 6 sybols with digits'
                       className='password'/>
                <input name='CNFpassword' type='password' placeholder={language.SignUp.form.rpassword}
                       required={true}
                       pattern='[0-9a-zA-Z]{6,32}' className='password'/>
            </fieldset>
            <ChangeLanguageContainer/>
        </form>
    )
}

const mapStateToProps = (state: any)=>{
    return{
        language: state.language.language,
    };
};


export default connect(mapStateToProps)(SignUpForm);