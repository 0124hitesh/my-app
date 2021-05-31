import React,{Component} from 'react';

function A(){
    return(
        <>
        <h1>Heading-A1</h1>
        <h2>Heading-A2</h2>
        </>
    )
}

function B(){
    return(
        <>
        <h1>Heading-B1</h1>
        <h2>Heading-B2</h2>
        </>
    )
}

export default function C(props){
    if(props.x)
        return <A/>
    return <B/>

}