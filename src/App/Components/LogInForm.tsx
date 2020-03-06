import React from "react";
import {connect} from "react-redux";
import {getL} from "../language";
import {store} from "../App";

function LogInForm(): JSX.Element {
    // @ts-ignore
    const language = getL(store.getState().language.language);
   return(<form id="auth">
        <fieldset id="inputs">
            <input name="username" type="text" placeholder={language.SignIn.username} autoFocus={true} required={true}
    className="username"/>
            <input data-v-3eea7fb5="" name="password" type="password" placeholder={language.SignIn.password}
    required={true} className="password"/>
        </fieldset>
        <fieldset id="actions">
            <input data-v-3eea7fb5="" type="button" name="logIN" value={language.SignIn.login} className="button"/>
        </fieldset>
    </form>)
}

export default LogInForm;