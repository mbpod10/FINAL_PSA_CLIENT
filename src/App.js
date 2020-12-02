import { useCookies } from 'react-cookie'
import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import './App.css';
import './styles.css'

import Navbar from "./components/Navbar"
import TitleHeader from "./components/TitleHeader"
import Login from "./components/FormComponents/Login"
import Register from './components/FormComponents/Register';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      {/* <TitleHeader /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} />
        <Route path="/register" render={(props) => (<Register {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
