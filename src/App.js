import './App.css';
import Header from './common/header/Header';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          {/* <Route path='/about'>
            <About/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
