import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/Aboutus";
import AppNavigation, { AppNavigationNavBar } from "./pages/AppNavigation";
import GenericRegisterForm from "./pages/GenericRegisterForm";

import Home from "./pages/Home";
import Main from "./pages/Main";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <AppNavigationNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/generic" element={<GenericRegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
