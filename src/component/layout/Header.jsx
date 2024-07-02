import React from 'react';
import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/search.svg"
const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <Image src={logo} className="" alt="Sports Club Logo" />
            SPORTS CLUB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item href="our-gallery">Our Gallery</NavDropdown.Item>
                <NavDropdown.Item href="/our-support-gallery">
                 Sports Gallery
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className='search'>
            <img src={search} alt="sport" />
          </div>
        </Navbar>

      </Container>
    </div>
  )
}

export default Header