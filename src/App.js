import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/Aboutus";
import AppNavigation from "./pages/AppNavigation";
import Main from "./pages/Main";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <AppNavigation />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
