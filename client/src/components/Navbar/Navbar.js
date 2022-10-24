import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo_no_text from "../../Assets/Images/Logo/Trendit-logos_transparent_no_text.png";
import "./Navbar.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function BasicExample(props) { 
  return (
    <Navbar bg={props.theme} variant={props.theme} expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="/">
          <img
            src={logo_no_text}
            className="app-logo-no-text"
            alt="logo_no_text"
          />
          <h4>TRENDIT</h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About US</Nav.Link>
            <Nav.Link href="/contact-us">Contact US</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Trends" id="basic-nav-dropdown" menuVariant={props.theme}>
              <NavDropdown.Item href="/google-trend">
                Google Trends
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/facebook-trend">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="instagram-trend">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="/twitter-trend">twitter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ThemeSwitcher theme={props.theme} switchTheme={props.switchTheme} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
