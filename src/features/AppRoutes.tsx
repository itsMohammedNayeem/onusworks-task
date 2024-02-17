import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};
