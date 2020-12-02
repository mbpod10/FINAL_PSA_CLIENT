import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from "react"
import axios from "axios"

import { faSignature } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RBS from "react-bootstrap"

import './form-styles.css'

const VerifyInfo = () => {

  const [full_name, setFullName] = useState("")
  const [success, setSuccess] = useState("")

  const [psaFullName, setName] = useCookies(['psa-full_name'])
  const [ResponseID, setResponseID] = useCookies(['psa-id']);

  const goToLogin = () => {
    window.location.href = "/login"
  }

  const onSubmit = () => {
    console.log("psa-id", ResponseID['psa-id'])
    axios.post(`http://127.0.0.1:8000/clients/new_client/ `,
      {
        user_id: ResponseID['psa-id'],
        full_name: full_name
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        setSuccess("Verify Complete")
        setTimeout(goToLogin, 1000)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1 className="form-title">Verify Information</h1>

      <div className="form">
        <div className="form-container">
          <label for="full-name" className="login-label"><FontAwesomeIcon icon={faSignature} /></label>
          <input id="full-name" className="" type="text" placeholder="Full Name"
            value={full_name} onChange={event => setFullName(event.target.value)} />
        </div>
      </div>

      <div className="form">
        <div className="form-container">
          <button className="form-submit" onClick={onSubmit}>Verify </button>
          {success ? <RBS.Alert key="success" variant="success">
            <FontAwesomeIcon icon={faCheckSquare} />{success}
          </RBS.Alert> : null}
        </div>
      </div>
    </>
  )
}

export default VerifyInfo