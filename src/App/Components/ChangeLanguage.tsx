import * as React from "react";
import {store} from "../App";
import {getL, languages} from "../language";

export default function ChangeLanguage(props: any): JSX.Element {
    const langs: Array<JSX.Element> = languages.map((lang) => <option key = {lang.id} value={lang.id}>{lang.title}</option>);
// console.log("--store",store.getState());
    // @ts-ignore
    const language = store.getState().language.language;
console.log("--lang",language);

    const onSelectChange = (event: any)=>{
        props.setLanguage(event.target.value);
        console.log(store.getState());
    };

    return (
        <select defaultValue={language} name="lang" onChange={onSelectChange}>
            {/*<option selected disabled={true} id={"disabled"} value={props.language}>{language.SignUp.form.choose}</option>*/}
            {langs}
        </select>
    )
}