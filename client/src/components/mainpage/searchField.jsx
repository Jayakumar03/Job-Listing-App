import { useState, useEffect } from "react";
import axois from "axios";

export const SearchField = ({isUserLogedIn}) => {
  const [customSearch, setCustomSearch] = useState({
    search: "",
    skills: [],
  });

  console.log(isUserLogedIn);

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

  return (
    <main className="search-main-container">
      <form className="search-secondary-container">
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
          <option value="Frontend ">Frontend</option>
          <option value="Css">Css</option>
          <option value="Javascript">Javascript</option>
          <option value="Html">Html</option>
        </select>
      </form>

      {customSearch.skills.map((skill) => {
        return <span className="skill-name">{skill}</span>;
      })}

      <div>
        {isUserLogedIn ? <button>Add Job</button> : null}

        <button id="no-bg-button" onClick={ClearHandler}>
          Clear
        </button>
      </div>
    </main>
  );
};
