import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutApiAction } from "../store/authslice";

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
  let { authStore } = useSelector((state) => state);
  const token = localStorage.getItem("authjwt");

  return (
    <>
      {token || authStore.loginStatus ? (
        <AuthroisedNavBar />
      ) : (
        <UnAuthroisedNavBar />
      )}
    </>
  );
}

function AuthroisedNavBar() {
  let dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          CURD APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/playground" as={Link}>
              Playground
            </Nav.Link>
            <Nav.Link to="/generic" as={Link}>
              Genric Form
            </Nav.Link>
            <Nav.Link to="/generic-list" as={Link}>
              Genric List
            </Nav.Link>
            <Nav.Link to="/order-list" as={Link}>
              Order List
            </Nav.Link>
            <Nav.Link onClick={() => dispatch(logoutApiAction())}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function UnAuthroisedNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          CURD APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/login" as={Link}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigation;
export { AppNavigationNavBar };
