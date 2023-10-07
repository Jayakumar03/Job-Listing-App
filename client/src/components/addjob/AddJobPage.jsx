import { useState, useEffect } from "react";
import axois from "axios";
import { useNavigate } from "react-router";

import "./addjobpage.css";

export const AddJobPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleSignup = () => {
    navigate("/");
  };

  const nameHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, name: e.target.value };
    });
    console.log(user.name);
  };

  const emailHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, email: e.target.value };
    });
    console.log(user.email);
  };

  const numberHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, number: e.target.value };
    });
    console.log(user.number);
  };

  const passwordHandler = (e) => {
    setUser((prevvalue) => {
      return { ...prevvalue, password: e.target.value };
    });
    console.log(user.password);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axois
      .post("http://localhost:3000/api/v1/signup", {
        name: user.name,
        email: user.email,
        number: user.number,
        password: user.password,
      })
      .then((response) => {
        // handle response
        console.log("user added successfully", response.data);
        if (response.data.success) {
          navigate("/mainpage");
        }
        //! Store name and token in localstorage
      })
      .catch((error) => {
        // handle error
        console.log("err", error);
      });

    setUser({
      name: "",
      email: "",
      number: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <div>
            <section className="name-section">
              <h1>Add Job Description</h1>
            </section>

            <section className="input-section ">
              <form onSubmit={submitHandler}>
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
                    <input type="text" id="company-name" name="company-name" />
                    <input type="text" id="logo-url" name="logo-url" />
                    <input type="text" id="job-position" name="job-position" />
                    <input
                      type="text"
                      id="monthly-salary"
                      name="monthly-salary"
                    />
                    <select name="Jobtype" id="job-type">
                      <option value="Full-time">Full-time</option>
                      <option value="Contract ">Contract</option>
                      <option value="Part-time">Part-time</option>
                    </select>
                    <select name="remote-office" id="remote-office">
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote ">Remote</option>
                      <option value="Office">Office</option>
                    </select>
                    <input type="text" id="location" name="location" />
                    <textarea
                      id="job-description"
                      name="job-description"
                    ></textarea>
                    <textarea
                      id="about-company"
                      name="about-company"
                    ></textarea>
                    <textarea
                      id="skills-required"
                      name="skills-required"
                    ></textarea>
                    <textarea id="information" name="information"></textarea>
                  </div>
                </div>

                <button type="submit" onClick={submitHandler}>
                  Add Job
                </button>
              </form>
            </section>
          </div>
        </div>

        <div className="image-container secondary">
          <h1 className="h1">Your Personal Job Finder</h1>
        </div>
      </div>
    </>
  );
};
