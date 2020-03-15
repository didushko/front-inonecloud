
export interface Language {
    Header: {
        home: string,
        about: string,
        signUp: string
    }
    SignIn: {
        header: string,
        username: string,
        password: string,
        login: string
        article: {
            header: string,
            text: Array<string>
        }
    }
    About: {
        header: string,
        text: Array<string>
    },
    SignUp: {
        header: string,
        form: {
            title: string,
            username: string,
            email: string,
            password: string,
            rpassword: string,
            license: string,
            buttom: string,
            choose: string,
            errors: {
                username: string,
                email: string,
                password: string,
                rpassword: string
            }
        }

    }
}

interface LanguageId {
    id: string,
    title: string,
}


interface LangList {
    [key: string] : Language
}


const langList : LangList = {
        "en": {
            Header: {
                home: "Home",
                about: "About",
                signUp: "Sign Up"
            },
            SignIn: {
                header: "Welcome to InOneCloud",
                username: "Username",
                password: "Password",
                login: "Log in",
                article: {
                    header: "What is InOneCloud",
                    text:
                        [
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id sapien quam. Vivamus sed maximus risus. Fusce sem massa, viverra eu faucibus vel, gravida ac arcu. Maecenas faucibus ullamcorper massa eu vehicula. Aliquam luctus hendrerit ultricies. Nulla maximus vehicula ex id malesuada. Donec cursus facilisis consequat. Proin elementum ornare lacus. Quisque faucibus urna id ante volutpat vulputate. Curabitur quis luctus nisl. Suspendisse mattis, felis eu vehicula gravida, mi lacus venenatis risus, in congue libero lacus vel risus. Nam libero tellus, congue vel feugiat quis, tempus vitae justo. Phasellus vel est id lacus pretium ultricies. Curabitur semper finibus leo, et facilisis eros bibendum a. Aliquam lacinia maximus purus ut pretium. Praesent sollicitudin consequat volutpat.",
                            "Phasellus quis auctor augue, sit amet pretium libero. Aliquam id gravida velit. Phasellus ut mollis ex, id condimentum dolor. Vestibulum sem risus, vestibulum id malesuada nec, viverra quis risus. Cras sapien leo, auctor non mauris vitae, consequat suscipit ligula. Morbi commodo quam orci, ac congue metus imperdiet sit amet. Ut turpis neque, auctor id eros et, tempus consequat nisl. Suspendisse accumsan est et purus efficitur dictum. Aenean ullamcorper tincidunt placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam consectetur ornare quam eget interdum. Aenean elementum dictum nisi, ac pharetra enim viverra eu. Quisque ut urna aliquam ante luctus pellentesque. Ut laoreet, felis vitae malesuada aliquet, urna nibh bibendum turpis, a accumsan dolor lectus efficitur ante. Sed leo mauris, cursus id sem quis, maximus hendrerit eros.",
                            "Sed nec cursus ligula, ut fringilla dolor. Duis ut sapien at eros finibus dapibus eget posuere libero. Nullam eu massa pulvinar, tempor metus sit amet, tempus ante. Maecenas condimentum condimentum suscipit. Sed et sagittis ligula. Aenean convallis vel quam id tincidunt. Vestibulum ut felis pulvinar ipsum interdum rhoncus quis sit amet nisl. Quisque tincidunt libero sit amet mauris commodo luctus at sit amet massa. In molestie laoreet tellus eget sollicitudin. Morbi sit amet mollis nisl, et posuere urna. Nulla porta elit sed vulputate dapibus. In hac habitasse platea dictumst. In ac ornare elit."
                        ],
                }

            },
            About: {
                header: "Who we are",
                text:
                    [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id sapien quam. Vivamus sed maximus risus. Fusce sem massa, viverra eu faucibus vel, gravida ac arcu. Maecenas faucibus ullamcorper massa eu vehicula. Aliquam luctus hendrerit ultricies. Nulla maximus vehicula ex id malesuada. Donec cursus facilisis consequat. Proin elementum ornare lacus. Quisque faucibus urna id ante volutpat vulputate. Curabitur quis luctus nisl. Suspendisse mattis, felis eu vehicula gravida, mi lacus venenatis risus, in congue libero lacus vel risus. Nam libero tellus, congue vel feugiat quis, tempus vitae justo. Phasellus vel est id lacus pretium ultricies. Curabitur semper finibus leo, et facilisis eros bibendum a. Aliquam lacinia maximus purus ut pretium. Praesent sollicitudin consequat volutpat.",
                        "Phasellus quis auctor augue, sit amet pretium libero. Aliquam id gravida velit. Phasellus ut mollis ex, id condimentum dolor. Vestibulum sem risus, vestibulum id malesuada nec, viverra quis risus. Cras sapien leo, auctor non mauris vitae, consequat suscipit ligula. Morbi commodo quam orci, ac congue metus imperdiet sit amet. Ut turpis neque, auctor id eros et, tempus consequat nisl. Suspendisse accumsan est et purus efficitur dictum. Aenean ullamcorper tincidunt placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam consectetur ornare quam eget interdum. Aenean elementum dictum nisi, ac pharetra enim viverra eu. Quisque ut urna aliquam ante luctus pellentesque. Ut laoreet, felis vitae malesuada aliquet, urna nibh bibendum turpis, a accumsan dolor lectus efficitur ante. Sed leo mauris, cursus id sem quis, maximus hendrerit eros.",
                        "Sed nec cursus ligula, ut fringilla dolor. Duis ut sapien at eros finibus dapibus eget posuere libero. Nullam eu massa pulvinar, tempor metus sit amet, tempus ante. Maecenas condimentum condimentum suscipit. Sed et sagittis ligula. Aenean convallis vel quam id tincidunt. Vestibulum ut felis pulvinar ipsum interdum rhoncus quis sit amet nisl. Quisque tincidunt libero sit amet mauris commodo luctus at sit amet massa. In molestie laoreet tellus eget sollicitudin. Morbi sit amet mollis nisl, et posuere urna. Nulla porta elit sed vulputate dapibus. In hac habitasse platea dictumst. In ac ornare elit."
                    ],
            },
            SignUp: {
                header: "Create your InOneCloud account",
                form: {
                    title: "You can create your personal account here",
                    username: "Username",
                    email: "Email",
                    password: "Password",
                    rpassword: "Repeat password",
                    license: "I agree with license",
                    buttom: "Create account",
                    choose: "choose language",
                    errors: {
                        username: "Please, enter username",
                        email: "Please, enter correct email",
                        password: "Password should have 6 sybols with digits",
                        rpassword: "Passwords do not match"
                    }
                }

            }

        },
    "ru": {
        Header: {
            home: "Home",
            about: "О Нас",
            signUp: "Зарегистрироваться"
        },
        SignIn: {
            header: "Добро пожаловать в  InOneCloud",
            username: "Имя пользователя",
            password: "Пароль",
            login: "Войти",
            article: {
                header: "Что такое InOneCloud",
                text:
                    [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id sapien quam. Vivamus sed maximus risus. Fusce sem massa, viverra eu faucibus vel, gravida ac arcu. Maecenas faucibus ullamcorper massa eu vehicula. Aliquam luctus hendrerit ultricies. Nulla maximus vehicula ex id malesuada. Donec cursus facilisis consequat. Proin elementum ornare lacus. Quisque faucibus urna id ante volutpat vulputate. Curabitur quis luctus nisl. Suspendisse mattis, felis eu vehicula gravida, mi lacus venenatis risus, in congue libero lacus vel risus. Nam libero tellus, congue vel feugiat quis, tempus vitae justo. Phasellus vel est id lacus pretium ultricies. Curabitur semper finibus leo, et facilisis eros bibendum a. Aliquam lacinia maximus purus ut pretium. Praesent sollicitudin consequat volutpat.",
                        "Phasellus quis auctor augue, sit amet pretium libero. Aliquam id gravida velit. Phasellus ut mollis ex, id condimentum dolor. Vestibulum sem risus, vestibulum id malesuada nec, viverra quis risus. Cras sapien leo, auctor non mauris vitae, consequat suscipit ligula. Morbi commodo quam orci, ac congue metus imperdiet sit amet. Ut turpis neque, auctor id eros et, tempus consequat nisl. Suspendisse accumsan est et purus efficitur dictum. Aenean ullamcorper tincidunt placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam consectetur ornare quam eget interdum. Aenean elementum dictum nisi, ac pharetra enim viverra eu. Quisque ut urna aliquam ante luctus pellentesque. Ut laoreet, felis vitae malesuada aliquet, urna nibh bibendum turpis, a accumsan dolor lectus efficitur ante. Sed leo mauris, cursus id sem quis, maximus hendrerit eros.",
                        "Sed nec cursus ligula, ut fringilla dolor. Duis ut sapien at eros finibus dapibus eget posuere libero. Nullam eu massa pulvinar, tempor metus sit amet, tempus ante. Maecenas condimentum condimentum suscipit. Sed et sagittis ligula. Aenean convallis vel quam id tincidunt. Vestibulum ut felis pulvinar ipsum interdum rhoncus quis sit amet nisl. Quisque tincidunt libero sit amet mauris commodo luctus at sit amet massa. In molestie laoreet tellus eget sollicitudin. Morbi sit amet mollis nisl, et posuere urna. Nulla porta elit sed vulputate dapibus. In hac habitasse platea dictumst. In ac ornare elit."
                    ],
            }

        },
        About: {
            header: "Кто мы",
            text:
                [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id sapien quam. Vivamus sed maximus risus. Fusce sem massa, viverra eu faucibus vel, gravida ac arcu. Maecenas faucibus ullamcorper massa eu vehicula. Aliquam luctus hendrerit ultricies. Nulla maximus vehicula ex id malesuada. Donec cursus facilisis consequat. Proin elementum ornare lacus. Quisque faucibus urna id ante volutpat vulputate. Curabitur quis luctus nisl. Suspendisse mattis, felis eu vehicula gravida, mi lacus venenatis risus, in congue libero lacus vel risus. Nam libero tellus, congue vel feugiat quis, tempus vitae justo. Phasellus vel est id lacus pretium ultricies. Curabitur semper finibus leo, et facilisis eros bibendum a. Aliquam lacinia maximus purus ut pretium. Praesent sollicitudin consequat volutpat.",
                    "Phasellus quis auctor augue, sit amet pretium libero. Aliquam id gravida velit. Phasellus ut mollis ex, id condimentum dolor. Vestibulum sem risus, vestibulum id malesuada nec, viverra quis risus. Cras sapien leo, auctor non mauris vitae, consequat suscipit ligula. Morbi commodo quam orci, ac congue metus imperdiet sit amet. Ut turpis neque, auctor id eros et, tempus consequat nisl. Suspendisse accumsan est et purus efficitur dictum. Aenean ullamcorper tincidunt placerat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam consectetur ornare quam eget interdum. Aenean elementum dictum nisi, ac pharetra enim viverra eu. Quisque ut urna aliquam ante luctus pellentesque. Ut laoreet, felis vitae malesuada aliquet, urna nibh bibendum turpis, a accumsan dolor lectus efficitur ante. Sed leo mauris, cursus id sem quis, maximus hendrerit eros.",
                    "Sed nec cursus ligula, ut fringilla dolor. Duis ut sapien at eros finibus dapibus eget posuere libero. Nullam eu massa pulvinar, tempor metus sit amet, tempus ante. Maecenas condimentum condimentum suscipit. Sed et sagittis ligula. Aenean convallis vel quam id tincidunt. Vestibulum ut felis pulvinar ipsum interdum rhoncus quis sit amet nisl. Quisque tincidunt libero sit amet mauris commodo luctus at sit amet massa. In molestie laoreet tellus eget sollicitudin. Morbi sit amet mollis nisl, et posuere urna. Nulla porta elit sed vulputate dapibus. In hac habitasse platea dictumst. In ac ornare elit."
                ],
        },
        SignUp: {
            header: "Создать InOneCloud аккаунт",
            form: {
                title: "Вы можете создать аккаунт",
                username: "Логин",
                email: "Email",
                password: "Пароль",
                rpassword: "Повторите пароль",
                license: "Я согласен",
                buttom: "Создать акканут",
                choose: "Изменить язык",
                errors: {
                    username: "Введите логин",
                    email: "Некорректный email",
                    password: "Пароль должен содержать не меньше 6 символов",
                    rpassword: "Пароли не совпадают"
                }
            }

        }

    }
    }
;

const languages: Array<LanguageId> = [
    {
        id: "en",
        title: "English",
    },
    {
        id: "ru",
        title: "Русский"
    }
];

 // const getLang = (key: string) : Languages=> lang[`${key}`];

export function getLanguage (l: string){
    // @ts-ignore
    return langList[l];
}
//
export {languages};
//
// //export default lang.en;
// //console.log(store.getState());
//
// // export default lang["en"];
// export default lang[store.getState().language]