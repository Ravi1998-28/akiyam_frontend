import React from 'react';
import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/search.svg"
import { useNavigate } from 'react-router-dom';
const Header = () => {
const navigate = useNavigate()


  return (
    <div className='header'>
      <Container>
        <Navbar bg="light" expand="md">
          <Navbar.Brand onClick={()=> navigate('/')}>
            <Image src={logo} className="" alt="Sports Club Logo" />
            SPORTS CLUB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={()=> navigate('/about')}>About</Nav.Link>
              <NavDropdown title="Gallery" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=> navigate('/our-gallery')} >Our Gallery</NavDropdown.Item>
                <NavDropdown.Item  onClick={()=> navigate('/our-support-gallery')}>
                 Sports Gallery
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={()=> navigate('/marathon')}>Registrations</Nav.Link>
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