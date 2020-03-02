import React from 'react';


interface IProps {
    children: any[];
}

export default function Header (props: IProps){
    //let [logo, elem1, elem2, elem3] = props;
    return (
        <div>
            {props.children.map(i => i)}
        </div>
    );
}
