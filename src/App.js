import { useCookies } from 'react-cookie'
import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import './App.css';
import './styles.css'

import Navbar from "./components/Navbar"
import TitleHeader from "./components/TitleHeader"
import Login from "./components/FormComponents/Login"
import Register from './components/FormComponents/Register';
import VerifyInfo from "./components/FormComponents/VerifyInfo"
import Home from './components/Home';
import Schedule from "./components/ScheduleComponents/Schedule"


function App() {
  return (
    <div className="App">
      {/* <TitleHeader /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} />
        <Route path="/register" render={(props) => (<Register {...props} />)} />
        <Route path="/verify-info" render={(props) => (<VerifyInfo {...props} />)} />
        <Route path="/schedule" render={(props) => (<Schedule {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
