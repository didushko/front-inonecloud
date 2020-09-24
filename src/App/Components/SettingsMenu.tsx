import React from "react";
import {getLanguage, Language} from "../language";
import {store} from "../App";

export default function SettingsMenu(): JSX.Element {
    const language: Language = getLanguage(store.getState().language);


    return (
        <nav className='sideMenu'>
            <ul>
                <li className='hoverable'>
                    <a>
                        <div className='image'><img src='https://www.gstatic.com/identity/boq/accountsettingsmobile/menu_home_selected_72x72_c44a4fb6458c97e6db62ae4d6144397e.png'/></div>
                        <div className='menuText'>{language.Settings.sideMenu.main}</div>
                    </a>
                </li>
                <li className='hoverable'>
                    <a>
                        <div className='image'><img src='https://www.gstatic.com/identity/boq/accountsettingsmobile/menu_personalinfo_24x24_2b08480abc2504e2d70d74f2470f0ae0.png'/></div>
                        <div className='menuText'>{language.Settings.sideMenu.personalInfo}</div>
                    </a>
                </li>
                <li className='hoverable'>
                    <a>
                        <div className='image'><img src=''/></div>
                        <div className='menuText'>{language.Settings.sideMenu.security}</div>
                    </a>
                </li>
                <li className='hoverable'>
                    <a>
                        <div className='image'><img src=''/></div>
                        <div className='menuText'>{language.Settings.sideMenu.payment}</div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}