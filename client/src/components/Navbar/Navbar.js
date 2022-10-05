import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/form';
import logo_no_text from '../../Assets/Images/Logo/Trendit-logos_transparent_no_text.png'
import './Navbar.css'
import React from 'react';

function BasicExample(props) {
    return (
      <Navbar expand="lg" bg={props.theme} variant={props.theme}>
        <Container>
          <Navbar.Brand href="/"><img src={logo_no_text} className="app-logo-no-text" alt="logo_no_text" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About US</Nav.Link>
              <Nav.Link href="#link">Contact US</Nav.Link>
              <NavDropdown title="Trends" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Google Trends
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  twitter
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form.Check type="switch" id="color-theme" label={(props.theme === 'light' ? 'Dark' : 'Light') + ' theme'} onChange={props.switchTheme} checked={props.theme === 'light' ? false : true} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default BasicExample;