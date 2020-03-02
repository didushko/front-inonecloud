import React from 'react';

interface IProps {
    text: string;

}


export default function HeaderElem(props: IProps){
    return(
        <span>{props.text}</span>
    )
}