import React from 'react';



interface IProps {
    children: Array <JSX.Element>;
}

export default function Header (props: IProps){
    return (
        <header id = "logo">
            {props.children.map(i=>i)}
        </header>
    );
}
