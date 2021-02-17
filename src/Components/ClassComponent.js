import React from 'react';

class Class_Component extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
            <h3>This is ClassComponent-1a</h3>
            <h3>This is ClassComponent-1b</h3>
            </React.Fragment>
        )
    }
}

class Class_Component2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <h3>This is ClassComponent-2b</h3>
            <h3>This is ClassComponent-2b</h3>
            </>
        )
    }
}

export {Class_Component,Class_Component2};