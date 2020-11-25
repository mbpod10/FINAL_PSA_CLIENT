import { useCookies } from 'react-cookie'
import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import './App.css';
import './styles.css'

import Navbar from "./components/Navbar"
import TitleHeader from "./components/TitleHeader"
import Login from "./components/FormComponents/Login"


function App() {
  return (
    <div className="App">
      {/* <TitleHeader /> */}
      <Navbar />
      <Switch>
        <Route path="/login" render={(props) => (<Login {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
