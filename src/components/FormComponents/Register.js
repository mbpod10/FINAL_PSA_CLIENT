import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RBS from "react-bootstrap"

import { API } from "../APIService"

import './form-styles.css'

const Register = (props) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState("")
  const [success, setSuccess] = useState("")


  const [ResponseID, setResponseID] = useCookies(['psa-id']);

  const goToVerifyInfo = () => {
    window.location.href = "/verify-info"
  }

  const onSubmit = (event) => {
    if (password !== confirmPassword) {
      setErrors("Passwords Must Match")
    }
    else {
      setErrors("")
      API.register({ username: username, password: password })
        .then((response) => {
          console.log(response.data)
          if (response.data.message === "User Created") {
            setSuccess("User Created!")
            setResponseID('psa-id', response.data.user.id)
            setTimeout(goToVerifyInfo, 1000)
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
  }

  return (
    <>
      <h1 className="form-title">New Client</h1>

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
          <label for="con-pass" className="login-label"><FontAwesomeIcon icon={faKey} /></label>
          <input id="con-pass" className="" type="password" placeholder="Confirm Password"
            value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} />
          {confirmPassword && confirmPassword !== password ?
            <RBS.Alert key="danger" variant="danger">
              <FontAwesomeIcon icon={faExclamationTriangle} />Passwords Must Match
            </RBS.Alert>
            : null}
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <button className="form-submit" onClick={onSubmit}>Register </button>
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
          <h5>Have An Account? <Link to="/login"> Login Here</Link></h5>
        </div>
      </div>
    </>
  )
}

export default Register