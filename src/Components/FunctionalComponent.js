import React, {Component} from 'react';

//to export single component
export default function FunctionalComponent(props){
    return (
        <div>
        <h1>{props.title}</h1>
        <h1>{props.content}</h1>
        </div>
    );
}
