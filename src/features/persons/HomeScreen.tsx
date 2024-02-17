import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the loggedIn flag from localStorage
    localStorage.removeItem("loggedIn");

    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div>
      <h1>Home Screen</h1>
      {/* Other content of your HomeScreen */}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
