import { useState, useEffect } from "react";
import axois from "axios";
import { useNavigate, useParams } from "react-router";
import Cookies from "js-cookie";
import "../addjob/addjobpage.css";

export const EditJob = () => {
  const token = Cookies.get("token");
  axois.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { id } = useParams();

  useEffect(() => {
    axois
      .get(`http://localhost:3000/api/v1/jobinformation/${id}`)
      .then((response) => {
        if (response.data.success) {
          const data = response.data.JobDetails;
          setEditJob(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const [editJob, setEditJob] = useState({
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

  const companyNameHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, companyName: e.target.value };
    });
  };

  const logoUrlHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, logoUrl: e.target.value };
    });
  };

  const jobPositionHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, jobPosition: e.target.value };
    });
  };

  const monthlySalaryHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, monthlySalary: e.target.value };
    });
  };

  const jobTypeHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, jobType: e.target.value };
    });
  };

  const remoteOfficeHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, remoteOffice: e.target.value };
    });
  };

  const locationHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, location: e.target.value };
    });
  };

  const jobDescriptionHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, jobDescription: e.target.value };
    });
  };

  const aboutCompanyHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, aboutCompany: e.target.value };
    });
  };

  const skillsRequiredHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, skillsRequired: e.target.value };
    });
  };

  const informationHandler = (e) => {
    setEditJob((prevvalue) => {
      return { ...prevvalue, information: e.target.value };
    });
  };

  const updateJobHandler = (e) => {
    e.preventDefault();

    axois
      .put(`http://localhost:3000/api/v1/editjobpost/${id}`, {
        companyName: editJob.companyName,
        logoUrl: editJob.logoUrl,
        jobPosition: editJob.jobPosition,
        monthlySalary: editJob.monthlySalary,
        jobType: editJob.jobType,
        remoteOffice: editJob.remoteOffice,
        location: editJob.location,
        jobDescription: editJob.jobDescription,
        aboutCompany: editJob.aboutCompany,
        skillsRequired: editJob.skillsRequired,
        information: editJob.information,
      })
      .then((response) => {
        // handle response
        if (response.data.success) {
          navigate(`/job/${id}`);
        }
      })
      .catch((error) => {
        // handle error
        console.log("err", error);
      });

    setEditJob({
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
            <h1>Edit Job Detais</h1>
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
                    value={editJob.companyName}
                    onChange={companyNameHandler}
                  />
                  <input
                    type="text"
                    id="logo-url"
                    name="logoUrl"
                    value={editJob.logoUrl}
                    onChange={logoUrlHandler}
                  />
                  <input
                    type="text"
                    id="job-position"
                    name="jobPosition"
                    value={editJob.jobPosition}
                    onChange={jobPositionHandler}
                  />
                  <input
                    type="text"
                    id="monthly-salary"
                    name="monthlySalary"
                    value={editJob.monthlySalary}
                    onChange={monthlySalaryHandler}
                  />
                  <select
                    name="jobType"
                    id="job-type"
                    value={editJob.jobType}
                    onChange={jobTypeHandler}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract ">Contract</option>
                    <option value="Part-time">Part-time</option>
                  </select>
                  <select
                    name="remoteOffice"
                    id="remote-office"
                    value={editJob.remoteOffice}
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
                    value={editJob.location}
                    onChange={locationHandler}
                  />
                  <textarea
                    id="job-description"
                    name="jobDescription"
                    value={editJob.jobDescription}
                    onChange={jobDescriptionHandler}
                  ></textarea>
                  <textarea
                    id="about-company"
                    name="aboutCompany"
                    value={editJob.aboutCompany}
                    onChange={aboutCompanyHandler}
                  ></textarea>
                  <textarea
                    id="skills-required"
                    name="skillsRequired"
                    value={editJob.skillsRequired}
                    onChange={skillsRequiredHandler}
                  ></textarea>
                  <textarea
                    id="information"
                    name="information"
                    value={editJob.information}
                    onChange={informationHandler}
                  ></textarea>
                </div>
              </div>

              <button type="submit" onClick={updateJobHandler}>
                Update Job
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
