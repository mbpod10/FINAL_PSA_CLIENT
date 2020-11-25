import { useCookies } from 'react-cookie'
import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import './App.css';
import './styles.css'

import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
