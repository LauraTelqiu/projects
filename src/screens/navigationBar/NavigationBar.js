import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { navigationLinks } from '../../heplers/navigationLinks'


function createLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}
function NavigationBar() {
  return (
    <div id='home'>
      <NavBar className="navigation__container" style={{
        zIndex: '2', position: 'fixed', top: '0', width: '100%'
      }} collapseOnSelect
        expand="md">
        {/* <Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">Laura Telqiu</Navbar.Brand> */}
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse style={{
          justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none', backgroundColor: "hsl(210, 11%, 15%)"
        }}>
          <Nav className="links" style={{ margin: '0 1rem' }}>
            {createLinks()}
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </div>
  )
}

export default NavigationBar