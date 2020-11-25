import React from "react"
import { Link } from "react-router-dom"
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCookies } from 'react-cookie'

import * as RBS from "react-bootstrap"

const Navbar = (props) => {
  return (
    <>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
      </nav> */}
      <RBS.Navbar bg="dark" variant="dark">
        <RBS.Navbar.Brand href="#home">RBS.Navbar</RBS.Navbar.Brand>
        <RBS.Nav className="mr-auto">
          <RBS.Nav.Link href="#home">Home</RBS.Nav.Link>
          <RBS.Nav.Link href="#features">Features</RBS.Nav.Link>
          <RBS.Nav.Link href="#pricing">Pricing</RBS.Nav.Link>
        </RBS.Nav>
        <RBS.Form inline>
          <RBS.FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <RBS.Button variant="outline-info">Search</RBS.Button>
        </RBS.Form>
      </RBS.Navbar>
    </>
  )
}

export default Navbar