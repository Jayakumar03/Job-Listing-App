import { useState, useEffect } from "react";
import axois from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import "./addjobpage.css";

export const AddJobPage = () => {
  const token = Cookies.get("token")
  axois.defaults.headers.common["Authorization"] = `Bearer ${token}`;


  const navigate = useNavigate();
  const [newJob, setNewJob] = useState({
    companyName: "",
    logoUrl: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    remoteOffice: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: "",
    information: "",
  });

  const handleSignup = () => {
    navigate("/");
  };

  const companyNameHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, companyName: e.target.value };
    });
  };

  const logoUrlHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, logoUrl: e.target.value };
    });
  };

  const jobPositionHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, jobPosition: e.target.value };
    });
  };

  const monthlySalaryHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, monthlySalary: e.target.value };
    });
  };

  const jobTypeHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, jobType: e.target.value };
    });
  };

  const remoteOfficeHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, remoteOffice: e.target.value };
    });
  };

  const locationHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, location: e.target.value };
    });
  };

  const jobDescriptionHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, jobDescription: e.target.value };
    });
  };

  const aboutCompanyHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, aboutCompany: e.target.value };
    });
  };

  const skillsRequiredHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, skillsRequired: e.target.value };
    });
  };

  const informationHandler = (e) => {
    setNewJob((prevvalue) => {
      return { ...prevvalue, information: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axois
      .post("https://job-listing-app-sever.vercel.app/api/v1/createjobpost", {
        companyName: newJob.companyName,
        logoUrl: newJob.logoUrl,
        jobPosition: newJob.jobPosition,
        monthlySalary: newJob.monthlySalary,
        jobType: newJob.jobType,
        remoteOffice: newJob.remoteOffice,
        location: newJob.location,
        jobDescription: newJob.jobDescription,
        aboutCompany: newJob.aboutCompany,
        skillsRequired: newJob.skillsRequired,
        information: newJob.information,
      })
      .then((response) => {
        // handle response
        if (response.data.success) {
          navigate("/");
        }
      })
      .catch((error) => {
        // handle error
        console.log("err", error);
      });

    setNewJob({
      companyName: "",
      logoUrl: "",
      jobPosition: "",
      monthlySalary: "",
      jobType: "",
      remoteOffice: "",
      location: "",
      jobDescription: "",
      aboutCompany: "",
      skillsRequired: "",
      information: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <section className="name-section">
            <h1>Add Job Description</h1>
          </section>

          <section className="input-section ">
            <form>
              <div class="parent-div">
                <div class="labels-div">
                  <label for="company-name">Company Name</label>
                  <label for="logo-url">Add Logo URL</label>
                  <label for="job-position">Job Position</label>
                  <label for="monthly-salary">Monthly Salary</label>
                  <label for="job-type">Job Type</label>
                  <label for="remote-office">Remote/Office</label>
                  <label for="location">Location</label>
                  <label for="job-description">Job Description</label>
                  <label for="about-company">About Company</label>
                  <label for="skills-required">Skills Required</label>
                  <label for="information">Information</label>
                </div>

                <div class="inputs-div">
                  <input
                    type="text"
                    id="company-name"
                    name="companyName"
                    value={newJob.companyName}
                    onChange={companyNameHandler}
                  />
                  <input
                    type="text"
                    id="logo-url"
                    name="logoUrl"
                    value={newJob.logoUrl}
                    onChange={logoUrlHandler}
                  />
                  <input
                    type="text"
                    id="job-position"
                    name="jobPosition"
                    value={newJob.jobPosition}
                    onChange={jobPositionHandler}
                  />
                  <input
                    type="text"
                    id="monthly-salary"
                    name="monthlySalary"
                    value={newJob.monthlySalary}
                    onChange={monthlySalaryHandler}
                  />
                  <select
                    name="jobType"
                    id="job-type"
                    value={newJob.jobType}
                    onChange={jobTypeHandler}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract ">Contract</option>
                    <option value="Part-time">Part-time</option>
                  </select>
                  <select
                    name="remoteOffice"
                    id="remote-office"
                    value={newJob.remoteOffice}
                    onChange={remoteOfficeHandler}
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote ">Remote</option>
                    <option value="Office">Office</option>
                  </select>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newJob.location}
                    onChange={locationHandler}
                  />
                  <textarea
                    id="job-description"
                    name="jobDescription"
                    value={newJob.jobDescription}
                    onChange={jobDescriptionHandler}
                  ></textarea>
                  <textarea
                    id="about-company"
                    name="aboutCompany"
                    value={newJob.aboutCompany}
                    onChange={aboutCompanyHandler}
                  ></textarea>
                  <textarea
                    id="skills-required"
                    name="skillsRequired"
                    value={newJob.skillsRequired}
                    onChange={skillsRequiredHandler}
                  ></textarea>
                  <textarea
                    id="information"
                    name="information"
                    value={newJob.information}
                    onChange={informationHandler}
                  ></textarea>
                </div>
              </div>

              <button type="submit" onClick={submitHandler}>
                Add Job
              </button>
            </form>
          </section>
        </div>

        <div className="image-container secondary">
          <h1 className="h1">Your Personal Job Finder</h1>
        </div>
      </div>
    </>
  );
};
