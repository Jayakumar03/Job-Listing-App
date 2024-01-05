import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axois from "axios";
import Cookies from "js-cookie";

import "./jobinfo.css";
import { NavBar } from "../mainpage/NavBar";

export const JobInfoPage = ({ isUserLogedIn, setIsUserLogedIn }) => {
  const [jobInformation, setJobInformation] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axois
      .get(`https://job-listing-backend-xi.vercel.app/api/v1/jobinformation/${id}`)
      .then((response) => {
        if (response.data.success) {
          const data = response.data.JobDetails;
          setJobInformation(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const editHandler = () => {
    navigate(`/editjob/${id}`);
  };

  return (
    <div>
      <NavBar
        isUserLogedIn={isUserLogedIn}
        setIsUserLogedIn={setIsUserLogedIn}
      />
      <div className="main-container">
        <h1>
          {jobInformation?.position} {jobInformation?.jobtype} |{" "}
          {jobInformation?.workplace} {jobInformation?.location}
        </h1>
      </div>

      <div className="second-container">
        <span>1w ago</span>
        <span>{jobInformation?.companyName}</span>
        <span>{jobInformation?.jobtype}</span>
        <h1 className="main-heading"> {jobInformation?.position}</h1>
        <span className="location-span">{jobInformation?.location}</span>
        {isUserLogedIn ? (
          <button className="edit-btn" onClick={editHandler}>
            Edit job
          </button>
        ) : null}

        <div className="addtional-details">
          <div className="stipend">
            <span>Stipend</span>
            <span>{jobInformation?.salary}</span>
          </div>
          <div className="stipend">
            <span>Duration</span>
            <span>{jobInformation?.workplace}</span>
          </div>
        </div>
        <h3>About Company</h3>
        <p>
          We provide technology-based services to help businesses and
          organizations achieve their goals. We offer a wide range of services,
          including software development, system integration, network and
          security services, cloud computing, and data analytics. Our primary
          focus is on leveraging technology to streamline business processes,
          improve productivity, and enhance overall efficiency.
        </p>
        <h3>About the job/internship</h3>
        <p>{jobInformation?.jobDescription}</p>
        <p>Selected intern's day-to-day responsibilities include: </p>
        <p>
          {" "}
          1. Work on the development of theme customization, liquid programming
          language, and corresponding apps{" "}
        </p>
        <p> 2. Implement system integrations that are crucial to our success</p>
        <p>
          {" "}
          3. Contribute to the development of HTML5/CSS/JavaScript and standard
          web technologies integral to building seamless multi-channel
          experiences
        </p>
        <p>
          4. Work on speed optimization and making a mobile-friendly website
        </p>
        <h3>Skills required</h3>
        <span>Css</span>
        <span>HTml</span>
        <span>Javascript</span>
        <h3>Additional Information</h3>
        <p>
          Stipend structure: This is a performance-based internship. In addition
          to the minimum-assured stipend, you will also be paid a
          performance-linked incentive (₹ 2500 per design).
        </p>
      </div>
    </div>
  );
};
