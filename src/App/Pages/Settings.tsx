import React from 'react';
import {getLanguage, Language} from "../language";
import {store} from "../App";
import {useSelector} from "react-redux";
import {State, Token} from "../Store/reducers";
import {Redirect} from "react-router-dom";
import ChangePasswordForm from "../Components/ChangePasswordForm";
import SettingsMenu from "../Components/SettingsMenu";


export default function Settings(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);
    const token: Token = useSelector((state: State) => state.token);

    if (!store.getState().token) {
        return <Redirect
            to={{
                pathname: "/"
            }}
        />
    }

    return (
        <div className='container'>
            <SettingsMenu/>
            {/*<h2>Settings</h2>*/}
            {/*<hr></hr>*/}

            <article className='settings_side'>
                <h2>Cloud storage connection</h2>
                <button>Connect Yandex Disk</button>
                <button>Connect Dropbox</button>
                <button>Connect Google Drive</button>
                <ChangePasswordForm/>
            </article>
        </div>
    )

}