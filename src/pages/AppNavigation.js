import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavigation() {
  return (
    <>
      <Link to="/">Home | </Link>
      <Link to="/main">Main | </Link>
      <Link to="/project">Project | </Link>
      <Link to="/aboutus">About Us</Link>
    </>
  );
}

function AppNavigationNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          CURD APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/generic" as={Link}>
              Genric Form
            </Nav.Link>
            <Nav.Link to="/generic-list" as={Link}>
              Genric List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigation;
export { AppNavigationNavBar };
