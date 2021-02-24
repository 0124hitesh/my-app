import React,{Component} from 'react';
import Child from './Child';
export default class LifeCycle extends Component{
    constructor(){
        super();
        this.state={
            dataa:""
        }
        console.log("Constructor Called");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
        console.log("render called");
        return(
            <>
            <h1>Render</h1>
            <button onClick={()=>{this.setState({dataa:"dataaa"})}}>Click</button>
            <Child dataa={this.state.dataa}/>
            </>
        )
    }
}