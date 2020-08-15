import React, {useReducer} from "react";
import {getLanguage, Language} from "../language";
import {store} from "../App";
import axios, {AxiosResponse} from "axios";


interface IState {
    currentPassword: string,
    newPassword: string,
    rPassword: string,
    validation: boolean,
    error: string,
    changePassword: string
}

function ChangePasswordForm(): JSX.Element {

    const language: Language = getLanguage(store.getState().language);


    let [formState, setFormState] = useReducer((state: IState, newState: object) => {
        let st = {...state, ...newState};
        st = {...st, ...validation(st)};
        return st;
    }, {
        currentPassword: '',
        newPassword: '',
        rPassword: '',
        validation: false,
        error: '',
        changePassword: ''
    });

    function validation(st: IState) {
        if(st.newPassword != st.rPassword){
            st.error="Passwords are not equals" //todo change to variable
            st.validation=false;
        }
        if(st.currentPassword == st.newPassword){
            st.error = "New password must not be equal current password"; //todo change to variable
            st.validation = false;
        }
        else {
            st.error='';
            st.validation = true;
        }
        return st;
    }


    function changeInput(e: any) {
        setFormState({[e.target.name]: e.target.value});
        console.log(formState);
    }

    async function changePassword() {
        try {
            let result: AxiosResponse = await axios.post(
                "http://localhost:8080/api/user/changePassword",
                //todo add authorization header
                {
                    current_password: formState.currentPassword,
                    new_password: formState.newPassword

                },
            );
            if (result.status === 201) {
                setFormState({changePassword: language.Settings.changePassword});
            }
            //window.location.href = "/";
        } catch (e) {
            switch (e.response.status) {
                // case 409: setFormState({registration:language.SignUp.form.errors.userExist}); break;
                // case 400: setFormState({registration: language.SignUp.form.errors.incorrectly}); break;
                // default: setFormState({registration:language.SignUp.form.errors.server}); break;
            }

        }
    }

    return (
        <form id='registration' method='post' action="?">
            <fieldset id="inputs">
                <input name='currentPassword' type='password'
                       placeholder={language.Settings.changePasswordForm.oldpassword} required={true}
                       pattern='[0-9a-zA-Z]{6,32}' title='Password should have 6 sybols with digits'
                       className='password'
                       value={formState.currentPassword}
                       onChange={changeInput}
                />

                <input name='newPassword' type='password' placeholder={language.Settings.changePasswordForm.newpassword}
                       required={true}
                       pattern='[0-9a-zA-Z]{6,32}' title='Password should have 6 sybols with digits'
                       className='password'
                       value={formState.newPassword}
                       onChange={changeInput}
                />

                <input name='rPassword' type='password' placeholder={language.Settings.changePasswordForm.rnewpassword}
                       required={true}
                       pattern='[0-9a-zA-Z]{6,32}' className='password'
                       value={formState.rPassword}
                       onChange={changeInput}
                />

                <input disabled={!formState.validation}
                       style={!formState.validation ? {backgroundColor: "gray"} : undefined} type="button"
                       name="ChangePassword" value={language.Settings.changePasswordForm.button} className="button"
                       onClick={changePassword}/>
                <div style={{color: "red"}}>{formState.error ? formState.error : formState.changePassword}</div>

            </fieldset>
        </form>
    )

}


export default ChangePasswordForm;