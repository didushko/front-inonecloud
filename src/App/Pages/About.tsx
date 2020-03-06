import React from 'react';
import {getL} from "../language";
import {store} from "../App";

export default function About() : JSX.Element {
    // @ts-ignore
    const language = getL(store.getState().language.language);

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