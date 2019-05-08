import React, { Component, lazy, Suspense } from 'react';
import {  Route, Switch,  BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// Routes
const Home = lazy(() => import("./views"));

class App extends Component{
  render(){
    return ( 
      <Router>
        <Switch> 
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" render={()=> <Home />} />
          </Suspense>
        </Switch>
      </Router>
    );
  }
}
  
export default App;