import { Link, useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();

  const goto = () => {
    console.log("asdff");
    navigate("/");
  };

  return (
    <div>
      <h1>An Error Occurred!!</h1>
      <Link to="/">Go Back to Home Page</Link>
      <input type="button" value="GOT TO HOME" onClick={goto} />
    </div>
  );
}

export default ErrorPage;
