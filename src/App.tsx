import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import HomeScreen from "./features/persons/HomeScreen";
import ProfileScreen from "./features/persons/ProfileScreen";
import { FC, ReactElement } from "react";

interface ProtectedRouteProps {
  element: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={<ProtectedRoute element={<HomeScreen />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<ProfileScreen />} />}
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
