import "./mainpage.css";
import { JobDetails } from "./JobDetails";

export const MainPage = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="heading-container">
          <h1>Jobfinder</h1>
        </div>

        <div className="auth-container">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>

      <main className="search-main-container">
        <form className="search-secondary-container">
          <input type="search" placeholder="Type an job name" />
          <select name="skills" id="skills">
            <option value="skills">Skills</option>
            <option value="Frontend ">Frontend</option>
            <option value="Css">Css</option>
            <option value="Javascript">Javascript</option>
            <option value="Html">Html</option>
          </select>
        </form>

        <div>
          <button>Add Job</button>
          <button id="no-bg-button">Clear</button>
        </div>
      </main>

      <JobDetails />
    </>
  );
};
