import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// if there is single component in FunctionalComponent then no need to specify exact component name and can write any name
// import fcc from from './Components/FunctionalComponent';
// import FunctionalComponent from './Components/FunctionalComponent';
// import {Class_Component,Class_Component2} from './Components/ClassComponent';

// import LifeCycle from './LifeCycle/LifeCycle';
// import Test from './LifeCycle/Test_Unmount';

// import RS from './ReactState';

// import Counter from './Practical/Practical8_Counter';
// import More from './Practical/Practical8_b';

// import ReactHooks from './Components/ReactHooks'

// import Event from './events'

// import Table from './Practical/Practical_9';

// import Navbar from './Navbar_prac10'
// import Home from './Practical/Home';
// import About from './Practical/About';
// import Contact from './Practical/Contact';
// import None from './Practical/p10_none';

import {Display1, Display2} from './DisplayData';



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

    {/* <ReactHooks/> */}

    {/* <Event/> */}

    {/* <Table/> */}

    {/* <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="" component={None}></Route>
      </Switch>
    </Router> */}

    {/* <Display1/> */}
    <Display2/>
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
