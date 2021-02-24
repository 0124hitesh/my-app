import logo from './logo.svg';
//import './App.css';
import React from 'react';
// if there is single component in FunctionalComponent then no need to specify exact component name and can write any name
// import fcc from from './Components/FunctionalComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import {Class_Component,Class_Component2} from './Components/ClassComponent';

import LifeCycle from './LifeCycle/LifeCycle';
import Test from './LifeCycle/Test_Unmount';

import RS from './ReactState';

import Counter from './Practical/Practical8_Counter';
import More from './Practical/Practical8_b';

function App() {
  return (
    <>
    {/* <h1>Heading 1</h1>
    <p>this is a para</p>
    <FunctionalComponent title="Title_xyz__1" content="Conetent_XYZ__1"/>
    <FunctionalComponent title="Title_xyz__2" content="Conetent_XYZ__2"/>
    <Class_Component/>
    <Class_Component2/> */}

    {/* <LifeCycle/>
    <Test/> */}

    {/* <RS namee='hitesh' mob={5454545}/> */}

    {/* <Counter counter={0}/> */}
    <More/>
    </>
  );
}

//Stateless Functional Component
// function FunctionalComponent(){
//   return <h1>StateLess</h1> 
// }

//Statefull
// class ClassComponent extends React.Component{
//   render(){
//     return <p>StateFull</p>
//   }
// }

export default App;
