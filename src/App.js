import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppNavigation />

      <Routes>
        <Route index path="/" element={<h1>Page1</h1>} />
        <Route path="/page1" element={<h1>Page1</h1>} />
        <Route path="/page2" element={<h1>Page2</h1>} />
        <Route path="/page3" element={<h1>Page3</h1>} />
      </Routes>
    </>
  );
}

const AppNavigation = () => {
  const activeStyle = { background: "red", color: "white" };

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
