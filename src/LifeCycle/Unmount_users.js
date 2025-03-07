import React,{Component} from 'react';

export default class Users extends Component{
    componentWillUnmount(){
        console.log('componentWillUnmount    user_deleted');
    }

    render(){
        return(
            <React.Fragment>
            <h3>Name:Yash</h3>
            <h3>Address:545bbb</h3>
            <h3>Mob:6854654</h3>
            </React.Fragment>
        );
    }
}