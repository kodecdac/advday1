import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/Aboutus";
import AppNavigation, { AppNavigationNavBar } from "./pages/AppNavigation";
import GenericRegisterForm from "./pages/GenericRegisterForm";

import Home from "./pages/Home";
import Main from "./pages/Main";
import Project, { ProjectA, ProjectB } from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <AppNavigationNavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<Project />}>
          <Route index element={<ProjectA />} />
          <Route path="projecta" element={<ProjectA />} />
          <Route path="projectb" element={<ProjectB />} />
        </Route>
        <Route path="generic" element={<GenericRegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
