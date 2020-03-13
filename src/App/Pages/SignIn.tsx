import React from 'react';
import LogInForm from "../Components/LogInForm";
import {getLanguage, Language} from "../language";
import {store} from "../App";

export default function SignIn(): JSX.Element {
     const language :Language = getLanguage(store.getState().language);
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