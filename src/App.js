import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Navbar from './Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Practical/Home';
import About from './Practical/About';
import Contact from './Practical/Contact';
import None from './Practical/p10_none';



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="" component={None}></Route>
      </Switch>
    </Router>
  );
}


export default App;
