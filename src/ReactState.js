import React,{Component} from 'react';

export default class RS extends Component{
    // constructor() {
    //     super();
    //     this.state={
    //         name:'HItesh',
    //         mob:454465456,
    //     }
    // }

    constructor(props){
        super(props);

        this.state={
            mob:this.props.mob,
            name:this.props.namee
        };

        this.Alert=this.Alert.bind(this);
    }

    Alert(){
        alert("Binding Function");
    }

    // ()=> no need to bind
    Update2=()=>{
        this.setState({
            mob:97258421,
            name:'Hitesh'
        })
    }
    render(){
        return (
            <>
            <h2>{this.state.name}</h2>
            <h2>{this.state.mob}</h2>
            <button onClick={this.Alert}>Alert</button>
            <button onClick={this.Update2}>Update_2</button>
            <button onClick={()=>{this.setState({name:"Anonymous"})}}>Update_3</button>
            </>
        );
    }
}