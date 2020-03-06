import React, {createContext} from 'react';
import Header from "./Components/Header";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import "./Style.scss"
import {createStore, compose} from "redux";
import rootReducer from "./Store/reducers"
import {connect, Provider} from "react-redux";
import {getL} from "./language";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers());


// @ts-ignore
export const language = getL(store.getState().language.language);

const headerElements: Array<JSX.Element> = [
    <h1>InOneCloud</h1>,
    <nav>
        <ul id="topmenu">
            <li><Link to='/'>{language.Header.home}</Link></li>
            <li><Link to='/about'>{language.Header.about}</Link></li>
            <li><Link to='/signup'>{language.Header.signUp}</Link></li>
        </ul>
    </nav>
];

console.log(store.getState());

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            {/*<LangContext.Provider value={store.getState()}>*/}
            <BrowserRouter>
                {/*<LangContext.Consumer>*/}
                <Header children={headerElements}/>
                <Switch>
                    <Route exact path={'/'} component={SignIn}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/signup'} component={SignUp}/>
                </Switch>
                {/*</LangContext.Consumer>*/}
            </BrowserRouter>
            {/*</LangContext.Provider>*/}
        </Provider>
    );
};