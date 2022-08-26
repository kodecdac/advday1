import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/Aboutus";
import AppNavigation from "./pages/AppNavigation";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <AppNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
