import * as React from "react";
import {store} from "../App";
import {getL, languages} from "../language";

export default function ChangeLanguage(props: any): JSX.Element {
    const langs: Array<JSX.Element> = languages.map((lang) => <option value={lang.id}>{lang.title}</option>);

    // @ts-ignore
    const language = getL(store.getState().language.language);


    const onSelectChange = (event: any)=>{
        props.setLanguage(event.target.value);
        console.log(store.getState());
    };

    return (
        <select data-v-79d4827c="" name="lang" onChange={onSelectChange}>
            <option selected disabled={true} value={props.language}>{language.SignUp.form.choose}</option>
            {langs}
        </select>
    )
}