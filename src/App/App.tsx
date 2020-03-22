import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from "./Pages/SignIn";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import "./scss/styles.scss"
import {createStore, compose} from "redux";
import rootReducer, {State} from "./Store/reducers"
import {Provider, useSelector} from "react-redux";
import HeaderElement from "./Pages/HeaderElement";
import Home from "./Pages/Home";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers());

export default function App(): JSX.Element {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <HeaderElement/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/signup'} component={SignUp}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};