import "./mainpage.css";
import { NavBar } from "./NavBar";
import { JobDetails } from "./JobDetails";
import { SearchField } from "./searchField";

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axois from "axios";
import Cookies from "js-cookie";

export const MainPage = ({ isUserLogedIn, setIsUserLogedIn }) => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const jobFetcher = () => {
    useEffect(() => {
      axois
        .get("https://job-listing-app-backend-three.vercel.app/api/v1/allthejobs")
        .then((response) => {
          if (response.data.success) {
            setJobs(response.data.jobs);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      const tokenInLocalStorage = localStorage.getItem("token");

      if (Cookies.get("token") || tokenInLocalStorage) {
        setIsUserLogedIn(true);
      }
    }, []);
  };

  jobFetcher();

  return (
    <>
      <NavBar
        isUserLogedIn={isUserLogedIn}
        setIsUserLogedIn={setIsUserLogedIn}
      />
      <SearchField
        jobs={jobs}
        setJobs={setJobs}
        isUserLogedIn={isUserLogedIn}
      />
      <JobDetails jobs={jobs} isUserLogedIn={isUserLogedIn} />
    </>
  );
};
