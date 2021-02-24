import React,{Component} from 'react';

export default class Child extends Component{

    constructor(props){
        super(props);
    }


    componentWillReceiveProps(props){
    console.log('componentWillReceiveProps')
}
    render(){
    return (
        <h1>{this.props.dataa}</h1>
    )
}
}