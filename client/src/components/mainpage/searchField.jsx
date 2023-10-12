import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axois from "axios";


export const SearchField = ({ isUserLogedIn, jobs }) => {
  const navigate = useNavigate();
  const [customSearch, setCustomSearch] = useState({
    search: "",
    skills: [],
  });

  const searchHandler = (e) => {
    setCustomSearch((prev) => {
      console.log(customSearch);
      return { ...prev, search: e.target.value };
    });
  };

  const skillsStateUpdater = (e) => {
    console.log(customSearch.skills);
    setCustomSearch((prev) => {
      return { ...prev, skills: [...prev.skills, e.target.value] };
    });
  };

  const ClearHandler = () => {
    setCustomSearch((prev) => {
      return { ...prev, skills: [] };
    });
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    axois
      .post("http://localhost:3000/api/v1/filteredjobs", {
        position: customSearch.search,
        skills: customSearch.skills,
      })
      .then((response) => {
        if (response.data.success) {
          setJobs(response.data.filteredjobs);
          console.aclog(jobs);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addJobHandler = () => {
    navigate("/addjob");
  };
  return (
    <main className="search-main-container">
      <form className="search-secondary-container" onSubmit={SearchHandler}>
        <input
          type="search"
          placeholder="Type an job name"
          onChange={searchHandler}
        />
        <select
          value={customSearch.skills}
          onChange={skillsStateUpdater}
          name="skills"
          id="skills"
        >
          <option value="Fullstack">Fullstack</option>
          <option value="Javascript">Javascript</option>
          <option value="Node.js">Node.js</option>
          <option value="Express">Express</option>
        </select>
      </form>

      {customSearch.skills.map((skill) => {
        return <span className="skill-name">{skill}</span>;
      })}

      <div>
        {isUserLogedIn ? (
          <button onClick={addJobHandler}>Add Job</button>
        ) : null}

        <button id="no-bg-button" onClick={ClearHandler}>
          Clear
        </button>
      </div>
    </main>
  );
};
