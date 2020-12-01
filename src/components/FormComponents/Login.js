import { useCookies } from 'react-cookie'
import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './form-styles.css'

const Login = (props) => {
  return (
    <>
      <h1 className="form-title">Login</h1>

      <div className="form">
        <div className="form-container">
          <label for="user" className="login-label"><FontAwesomeIcon icon={faUser} /></label>
          <input id="user" className="" type="text" placeholder="Username" />
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <label for="pass" className="login-label"><FontAwesomeIcon icon={faLock} /></label>
          <input id="pass" className="" type="password" placeholder="Password" />
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <button className="form-submit">Login </button>
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <h5>Have An Account? <Link to="/register"> Register Here</Link></h5>
        </div>
      </div>

    </>
  )
}

export default Login