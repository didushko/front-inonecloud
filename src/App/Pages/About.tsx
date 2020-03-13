import React from 'react';
import {getLanguage, Language} from "../language";
import {store} from "../App";

export default function About() : JSX.Element {

    const language :Language = getLanguage(store.getState().language);

    const aboutUs :Array<JSX.Element> = language.About.text.map((p: any)=><p>{p}</p>);

    return(
        <article id="main" className="container">
            <header className="aboutcloud">
                <h2>{language.About.header}</h2>
                <hr/>
                {aboutUs}
            </header>
        </article>
    )
}