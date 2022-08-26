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

export default AppNavigation;
