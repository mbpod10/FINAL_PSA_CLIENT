import React from "react"
import { Link } from "react-router-dom"
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useCookies } from 'react-cookie'

import * as RBS from "react-bootstrap"

const Navbar = (props) => {

  const [token, setToken, deleteToken] = useCookies(['psa-token']);

  const logout = () => {
    deleteToken(['psa-token'])
    deleteToken(['psa-username'])
    deleteToken(['psa-full_name'])
    deleteToken(['psa-id'])
    window.location.href = '/login'
  }

  const [ResponseUsername, setResponseUsername] = useCookies(['psa-username']);

  return (
    <>
      <RBS.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <RBS.Navbar.Brand href=" ">
          <Link to="/">
            <img className="nav-image"
              src="https://0201.nccdn.net/1_2/000/000/175/968/Logo1.png"
              alt="psa" />
          </Link>
        </RBS.Navbar.Brand>

        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav">
          <RBS.Nav className="mr-auto">

            {ResponseUsername['psa-username'] ?
              <RBS.Nav.Link href=" ">
                <Link>
                  {ResponseUsername['psa-username']}
                </Link>
              </RBS.Nav.Link>
              : null}

          </RBS.Nav>

          <RBS.Nav>

            {ResponseUsername['psa-username'] ?
              <>
                <RBS.Nav.Link href=" ">
                  <Link to="/logout">
                    <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} />
                  </Link>
                </RBS.Nav.Link>
              </> :
              <>
                <RBS.Nav.Link href=" ">
                  <Link to="/login">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    Login
                  </Link>
                </RBS.Nav.Link>

                <RBS.Nav.Link eventKey={2} href=" ">
                  <Link to="/register">
                    Register
                </Link>
                </RBS.Nav.Link>
              </>}
          </RBS.Nav>
        </RBS.Navbar.Collapse>
      </RBS.Navbar>
    </>
  )
}

export default Navbar