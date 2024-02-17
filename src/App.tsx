import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ProtectedRouteProps } from "./types/types";

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={<ProtectedRoute element={<HomeScreen />} />}
          />
          <Route
            path="/profile/:personName"
            element={<ProtectedRoute element={<ProfileScreen />} />}
          />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
