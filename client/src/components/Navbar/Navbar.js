import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Trendit.com</Navbar.Brand>

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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;