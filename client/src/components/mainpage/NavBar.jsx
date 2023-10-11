import { useNavigate } from "react-router";
import { useEffect } from "react";
import axois from "axios";

export const NavBar = ({ isUserLogedIn, setIsUserLogedIn }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/signin");
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (!isUserLogedIn) {
      axois
        .get("http://localhost:3000/api/v1/allthejobs")
        .then((response) => {
          if (response.data.success) {
            localStorage.removeItem("token");
            Cookies.remove("token");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isUserLogedIn]);

  const handleLogout = () => {
    setIsUserLogedIn(false);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="heading-container">
          <h1>Jobfinder</h1>
        </div>

        <div className="auth-container">
          {isUserLogedIn ? (
            <>
              <button onClick={handleLogout}>Logout</button>
              <button>Hello Recuriter !!</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleRegister}>Register</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
