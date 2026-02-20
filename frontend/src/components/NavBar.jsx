import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="md" sticky="top" className="py-3 navbar-dark" id="mainNav">
      <Container className="px-4">
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <img
            width="1100"
            height="154"
            className="navbar-logo"
            src={Logo}
            alt="Palace Cinema"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="flex-grow-1 justify-content-center align-items-center navbar-nav">
            <a className="nav-link" href="#">
              Films
            </a>
            <Navbar.Text className="nav-divider">/</Navbar.Text>
            <a className="nav-link" href="#">
              Showtimes
            </a>
            <Navbar.Text className="nav-divider">/</Navbar.Text>
            <a className="nav-link" href="#">
              Box Office
            </a>
            <Navbar.Text className="nav-divider">/</Navbar.Text>
            <a className="nav-link" href="#">
              Contact
            </a>
          </Nav>

          <Nav className="d-flex align-items-center">
            <a className="me-3 text-white" href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="me-3 text-white" href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
