import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
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
                <NavLink to="/projects/dashboard" state={{ id: "project D" }}>
                  Dashboard |{" "}
                </NavLink>
                <NavLink to="/projects/billing" state={{ id: "project B" }}>
                  Billing
                </NavLink>
              </nav>
              <main>
                <ul>
                  <li>
                    <Link to="/projects/1" state={{}}>
                      Project 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects/2" state={{}}>
                      Project 2
                    </Link>
                  </li>
                </ul>
              </main>
              <main>
                <Outlet context={{ title: "outlet context" }} />
              </main>
            </>
          }
        >
          <Route index element={<main>Project Dashboard</main>} />
          <Route path=":id" element={<ProjectId />} />
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
      <NavLink to="/page1" state={{ id: "page1" }}>
        Page1 |
      </NavLink>
      <NavLink to="/page2" state={{ id: "page2" }}>
        Page2 |
      </NavLink>
      <NavLink to="/page3" state={{ id: "page3" }}>
        Page3 |
      </NavLink>
      <NavLink to="/page4" state={{ id: "page4" }}>
        Page4 |
      </NavLink>
      <NavLink to="/projects" state={{ id: "project" }}>
        Projects |
      </NavLink>
    </>
  );
};

const Page1 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <h1>Page1</h1>
      <article>{JSON.stringify(location.state)}</article>
    </main>
  );
};

const Page2 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <h1>Page2</h1>
      <article>{JSON.stringify(location.state)}</article>
    </main>
  );
};

const Page3 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <h1>Page3</h1>
      <article>{JSON.stringify(location.state)}</article>
    </main>
  );
};

const Page4 = () => {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <h1>Page4</h1>
      <article>{JSON.stringify(location.state)}</article>
    </main>
  );
};

const ProjectDashboard = () => {
  const location = useLocation();
  let outletContext = useOutletContext();
  console.log(location);

  return (
    <main>
      <h1>Project Dashboard</h1>
      <article>{JSON.stringify(location.state)}</article>
      <article>{JSON.stringify(outletContext)}</article>
    </main>
  );
};

const ProjectBilling = () => {
  const location = useLocation();
  let outletContext = useOutletContext();
  console.log(location, outletContext);

  return (
    <main>
      <h1>Project Billing</h1>
      <article>{JSON.stringify(location.state)}</article>
      <article>{JSON.stringify(outletContext)}</article>
    </main>
  );
};

const ProjectId = () => {
  const params = useParams();
  const location = useLocation();
  let outletContext = useOutletContext();

  return (
    <main>
      <h1>Project Id</h1>
      <article>{JSON.stringify(params)}</article>
      <article>{JSON.stringify(location.state)}</article>
      <article>{JSON.stringify(outletContext)}</article>
    </main>
  );
};

export default App;
