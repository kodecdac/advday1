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
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route
          path="/projects"
          element={
            <>
              <nav>
                <NavLink to="/projects/dashboard">Dashboard | </NavLink>
                <NavLink to="/projects/billing">Billing</NavLink>
              </nav>
              <main>
                <Outlet />
              </main>
            </>
          }
        >
          <Route index element={<main>Project Dashboard</main>} />
          <Route path="dashboard" element={<ProjectDashboard />} />
          <Route path="billing" element={<ProjectBilling />} />
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
    </>
  );
};

const Page1 = () => {
  return (
    <main>
      <h1>Page1</h1>
    </main>
  );
};

const Page2 = () => {
  return (
    <main>
      <h1>Page2</h1>
    </main>
  );
};

const Page3 = () => {
  return (
    <main>
      <h1>Page3</h1>
    </main>
  );
};

const Page4 = () => {
  return (
    <main>
      <h1>Page4</h1>
    </main>
  );
};

const ProjectDashboard = () => {
  return (
    <main>
      <h1>Project Dashboard</h1>
    </main>
  );
};

const ProjectBilling = () => {
  return (
    <main>
      <h1>Project Billing</h1>
    </main>
  );
};

export default App;
