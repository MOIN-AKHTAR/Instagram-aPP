import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
