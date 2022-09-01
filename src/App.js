import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path="/" element={<main>Page1</main>} />
        <Route path="/page1" element={<main>Page1</main>} />
        <Route path="/page2" element={<main>Page2</main>} />
        <Route path="/page3" element={<main>Page3</main>} />
        <Route path="/page4" element={<main>Page4</main>} />
        <Route
          path="/projects"
          element={
            <>
              <nav>
                <NavLink to="/projects/dashboard">Dashboard | </NavLink>
                <NavLink to="/projects/billing">Billing</NavLink>
              </nav>
              <main>
                <section>Project Info</section>
                <section>
                  <Outlet />
                </section>
              </main>
            </>
          }
        >
          <Route index element={<main>Project Dashboard</main>} />
          <Route path="dashboard" element={<main>Project Dashboard</main>} />
          <Route path="billing" element={<main>Project Billing</main>} />
        </Route>
      </Routes>
    </>
  );
}

const AppNavigation = () => {
  return (
    <>
      <NavLink to="/page1">Page1 |</NavLink>
      <NavLink to="/page2">Page2 |</NavLink>
      <NavLink to="/page3">Page3 |</NavLink>
      <NavLink to="/page4">Page4 |</NavLink>
      <NavLink to="/projects">Projects |</NavLink>
      <NavLink to="/projects/dashboard">Project Dashboard |</NavLink>
      <NavLink to="/projects/billing">Project Billing</NavLink>
    </>
  );
};

const AppNavigationNavigate = () => {
  let navigate = useNavigate();

  const go2page = (page) => {
    navigate(`/${page}`, { replace: true });
  };

  return (
    <>
      <input type="button" value="Page1" onClick={() => go2page("page1")} />
      <input type="button" value="Page2" onClick={() => go2page("page2")} />
      <input type="button" value="Page3" onClick={() => go2page("page3")} />
      <input type="button" value="Page4" onClick={() => go2page("page4")} />
    </>
  );
};

export default App;
