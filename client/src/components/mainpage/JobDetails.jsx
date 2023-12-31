import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import "./jobdetails.css";
import { JobInfoPage } from "../jobinfo/JobInfo";

export const JobDetails = ({ isUserLogedIn, jobs }) => {
  const navigate = useNavigate();

  const viewDetailsHandler = (e) => {
    const id = e.target.getAttribute("id");
    navigate(`/job/${id}`);
  };

  const editJobHandler = (e) => {
    const id = e.target.getAttribute("id");
    navigate(`/editjob/${id}`);
  };

  return jobs.map((job) => {
    return (
      <div className="job-main-container" key={job._id}>
        <div className="job-details-container">
          <div className="logo-container">
            <img src={job.companyLogoURL} className="company-logo"></img>
          </div>

          <div className="job-details-section">
            <h3>{job.position}</h3>
            <div className="">
              <span>
                <FontAwesomeIcon className="icon" icon={faCoffee} />
                11-50
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faCoffee} />
                {job.salary}
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faCoffee} />
                {job.location}
              </span>
            </div>
            <div>
              <span>{job.jobtype}</span>
              <span>{job.workplace}</span>
            </div>
          </div>
        </div>
        <div className="job-skill-section">
          <div className="skills">
            {job.skillsRequired.map((skill) => {
              return <span>{skill}</span>;
            })}
          </div>
          <div className="button-container">
            {isUserLogedIn ? (
              <button
                className="no-bg-button"
                id={job._id}
                onClick={editJobHandler}
              >
                Edit Job
              </button>
            ) : null}
            <button onClick={viewDetailsHandler} id={job._id}>
              view details
            </button>
          </div>
        </div>
      </div>
    );
  });
};
