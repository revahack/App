import React, { Component} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "fdweb/fluent.css";
import "fdweb/fluent-icons.css";
import "./App.css";

//import Navbar from "./components/Navbar";
import Home from "./components/HomeComp";


const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;

//import FourZeroFour from "./components/404Comp";
//<Route component={FourZeroFour} />        <Navbar />
