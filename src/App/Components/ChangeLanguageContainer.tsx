import * as React from "react";
import ChangeLanguage from "./ChangeLanguage";
import {setLanguage} from "../Store/language/actions";
import {connect} from "react-redux";

function ChangeLanguageContainer(props: any): JSX.Element {

    const actionChange = (event: any)=>{
        console.log(event.target.value)
    };

    return (
        <ChangeLanguage language={props.language} setLanguage={props.setLanguage}/>
    )
}


const mapStateToProps = (state: any)=>{
    return{
        language: state.language.language,
    };
};
const mapDispatchToProps = {
    setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguageContainer);