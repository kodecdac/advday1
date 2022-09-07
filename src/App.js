import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AboutUs from "./pages/Aboutus";
import AppNavigation, { AppNavigationNavBar } from "./pages/AppNavigation";
import GenericList from "./pages/GenericList";
import GenericRegisterForm from "./pages/GenericRegisterForm";

import Home from "./pages/Home";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Playground from "./pages/Playground";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <AppNavigationNavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/generic" element={<GenericRegisterForm />} />
        <Route path="/generic-list" element={<GenericList />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
