import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { login, logout } from "./store/store";

function App() {
  return (
    <>
      <AppNavigation />

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route
          path="/page1"
          element={
            <UnProtectedRoute>
              <Page1 />
            </UnProtectedRoute>
          }
        />
        <Route path="/page2" element={<Page2 />} />
        <Route
          path="/page3"
          element={
            <ProtectedRoute>
              <Page3 />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

const UnProtectedRoute = ({ children }) => {
  let state = useSelector((state) => state);

  if (state.authstore.value) {
    return <Navigate to="/page3" replace={true}></Navigate>;
  }

  return children;
};

const ProtectedRoute = ({ children }) => {
  let state = useSelector((state) => state);

  if (!state.authstore.value) {
    return <Navigate to="/page1" replace={true}></Navigate>;
  }

  return children;
};

const Page1 = () => {
  const dispatch = useDispatch();
  const click2Login = () => {
    dispatch(login());
  };
  return (
    <>
      <h1>Page1</h1>
      <input type="button" value="Click2Login" onClick={click2Login} />
    </>
  );
};

const Page2 = () => {
  return (
    <>
      <h1>Page2</h1>
    </>
  );
};

const Page3 = () => {
  const dispatch = useDispatch();
  const click2Logout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Page3</h1>
      <input type="button" value="Click2Logout" onClick={click2Logout} />
    </>
  );
};

const AppNavigation = () => {
  let state = useSelector((state) => state);

  const activeStyle = { background: "red", color: "white" };

  let authStatus = state.authstore.value;
  console.log(authStatus);
  if (!authStatus) {
    return (
      <>
        <NavLink
          to="/page1"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Page 1 |
        </NavLink>
        <NavLink
          to="/page2"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Page 2
        </NavLink>
      </>
    );
  }

  return (
    <>
      <NavLink
        to="/page2"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Page 2 |{" "}
      </NavLink>
      <NavLink
        to="/page3"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Page 3
      </NavLink>
    </>
  );
};

export default App;
