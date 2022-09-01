import { NavLink, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <AppNavigation />

      <Routes>
        <Route index path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  );
}

const Page1 = () => {
  return (
    <>
      <h1>Page1</h1>
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
  return (
    <>
      <h1>Page3</h1>
    </>
  );
};

const AppNavigation = () => {
  const activeStyle = { background: "red", color: "white" };

  let authStatus = window.localStorage.getItem("authStatus");
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
        to="/page1"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Page 1 |
      </NavLink>
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
        Page 3 |{" "}
      </NavLink>
    </>
  );
};

export default App;
