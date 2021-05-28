import React, {Component} from  'react';
import axios from 'axios';

// add "proxy":"http://localhost:4000" under private in package.json
// npm i axios
export default class React_Express extends Component{

    constructor(){
        super();
        this.state={
            express:'null'
        }
    }

    // componentDidMount = ()=>{
    //     axios.get('/express').then(response => {
    //         console.log(response.data.name);
    //         this.setState({
    //             express:response.data.name
    //         })
    // })

    Clickk=()=>{
            axios.get('/express').then(response => {
                console.log(response.data.name);
                this.setState({
                    express:response.data.name
                })
            })
    }

    render(){
        return(
            <>
            <h1>React-Express</h1>
            <h1>{this.state.express}</h1>
            <button onClick={this.Clickk}>CLICK</button>
            </>
        )
    }
}
