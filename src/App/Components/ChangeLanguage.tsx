import * as React from "react";
import {languages} from "../language";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../Store/language/actions";
import {State} from "../Store/reducers";

export default function ChangeLanguage(): JSX.Element {
    const language :string = useSelector((state :State) =>state.language);
    const dispatch = useDispatch();
    const langList: Array<JSX.Element> = languages.map((lang) => <option key = {lang.id} value={lang.id}>{lang.title}</option>);

    const onSelectChange = (event: React.SyntheticEvent)=>{
        let target = event.target as HTMLInputElement;
        dispatch(setLanguage(target.value));
    };
    return (
        <select defaultValue={language} name="lang" onChange={onSelectChange}>
            {langList}
        </select>
    )
}