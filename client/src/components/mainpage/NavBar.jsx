import { useNavigate } from "react-router";
import { useEffect } from "react";
import axois from "axios";
import Cookies from "js-cookie";

export const NavBar = ({ isUserLogedIn, setIsUserLogedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    setIsUserLogedIn(false);
    localStorage.removeItem("token");
    Cookies.remove("token");
  };

  const mainHandler = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="navbar-container">
        <div className="heading-container">
          <button className="main-button">
            <h1  onClick={mainHandler}>
              Jobfinder
            </h1>
          </button>
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
