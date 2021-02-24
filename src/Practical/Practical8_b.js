import React,{Component} from 'react';

import './Counter.css'
export default class More extends Component{
    constructor(){
        super();
        this.state={
            con:"Development is often all about problem-solving and @Beta-Labs.in offers up plenty of memes for when you need to take a break from fixing that bug. Whether you're stuck on a line of code or can't seem to correct an error, you're sure to find a post you'll relate to and people willing to commiserate with you.",
            content:"",
            toggle:true,
            
        }
    }
    More=()=>{
        this.setState({
            content:this.state.toggle ? this.state.con:null,
            toggle:!this.state.toggle
        })
    }

    render(){
        return(
            <section>
            <h1>Welcome to Beta-Labs</h1>
            <h3>Click on button to see More | Less</h3>
            <p>{this.state.content}</p>
            <button onClick={this.More}>{this.state.toggle ? "Read More":"Show Less"}</button>
            </section>
        )
    };
}