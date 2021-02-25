import React,{Component} from 'react';
import './Counter.css';

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            counter:this.props.counter,
        }

        this.dec=this.dec.bind(this);
    }

    inc=()=>{
        this.setState({
            counter:this.state.counter+1
        });
    }

    dec(){
        const cou=this.state.counter;
        if(cou!==0){
        this.setState({
            counter:this.state.counter-1
        })
    }
    }



    render(){
        return(
            <section>
            <h1 id="h">Ques -1</h1>
            <hr></hr>
            <h1>{this.state.counter}</h1>
            <button onClick={this.inc}>Increase</button>
            <button onClick={ ()=>{this.setState({counter:0})} }>Reset</button>
            <button onClick={this.dec}>Decrease</button>
            </section>
        );
    }
}