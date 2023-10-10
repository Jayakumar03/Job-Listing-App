import { useNavigate } from "react-router";

export const NavBar = ({ isUserLogedIn }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/signin");
  };

  const handleRegister = () => {
    navigate("/signup");
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
              <button>Logout</button>
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
