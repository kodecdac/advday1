import {
  BrowserRouter,
  Link,
  Navigate,
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
import { useDispatch, useSelector } from "react-redux";
import OrderList from "./pages/OrderList";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <AppNavigationNavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/playground"
          element={
            <ProtectedRoute>
              <Playground />
            </ProtectedRoute>
          }
        />
        <Route
          path="/generic"
          element={
            <ProtectedRoute>
              <GenericRegisterForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/generic-list"
          element={
            <ProtectedRoute>
              <GenericList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-list"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <UnProctedRoute>
              <Login />
            </UnProctedRoute>
          }
        />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

function UnProctedRoute({ children }) {
  let { authStore } = useSelector((state) => state);

  if (authStore.loginStatus) {
    return <Navigate to="/playground" replace={true} />;
  }

  return children;
}

// JSX - COMPNENT
function ProtectedRoute({ children }) {
  let { authStore } = useSelector((state) => state);

  const token = localStorage.getItem("authjwt");
  if (!token && !authStore.loginStatus) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

export default App;
