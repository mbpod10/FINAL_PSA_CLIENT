import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import * as RBS from "react-bootstrap"

import { API } from "../APIService"
import './form-styles.css'

const Login = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")
  const [success, setSuccess] = useState("")

  const [token, setToken] = useCookies(['psa-token']);
  const [ResponseUsername, setResponseUsername] = useCookies(['psa-username']);
  const [ResponseID, setResponseID] = useCookies(['psa-id']);

  const successLogin = () => {
    window.location.href = "/schedule"
  }

  const onSubmit = (event) => {
    API.login({ username: username, password: password })
      .then((response) => {
        console.log(response.data)
        if (response.data.message === "LOGGED_IN") {
          setErrors("")
          console.log("SUCCESS")
          setToken('psa-token', response.data.token)
          setResponseUsername('psa-username', response.data.user.username)
          setResponseID('psa-id', response.data.user.id)
          setSuccess("Successful Log In")
          setTimeout(successLogin, 1000)
        }
        else {
          console.log(response.data.message)
          setErrors(response.data.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1 className="form-title">Login</h1>

      <div className="form">
        <div className="form-container">
          <label for="user" className="login-label"><FontAwesomeIcon icon={faUser} /></label>
          <input id="user" className="" type="text" placeholder="Username"
            value={username} onChange={event => setUsername(event.target.value)} />
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <label for="pass" className="login-label"><FontAwesomeIcon icon={faLock} /></label>
          <input id="pass" className="" type="password" placeholder="Password"
            value={password} onChange={event => setPassword(event.target.value)} />
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <button className="form-submit" onClick={onSubmit}>Login </button>
          {errors ? <RBS.Alert key="danger" variant="danger">
            <FontAwesomeIcon icon={faExclamationTriangle} />{errors}
          </RBS.Alert> : null}
          {success ? <RBS.Alert key="success" variant="success">
            <FontAwesomeIcon icon={faCheckSquare} />{success}
          </RBS.Alert> : null}
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <h5>Don't Have An Account? <Link to="/register"> Register Here</Link></h5>
        </div>
      </div>
    </>
  )
}

export default Login