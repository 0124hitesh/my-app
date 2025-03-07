import React,{Component} from 'react';
import Users from './Unmount_users';

export default class Test extends Component{
    constructor(){
        super();
        this.state={toggle:true}
    }
    render(){
        return(
            <>
            <h1>Unmount Component</h1>
            {this.state.toggle ? <Users/>:null}
            <button onClick={()=>{this.setState({toggle : !this.state.toggle})}} >Unmount</button>
            </>
        );
    }
}