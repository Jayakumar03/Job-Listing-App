import "./mainpage.css";
import { NavBar } from "./NavBar";
import { JobDetails } from "./JobDetails";
import { SearchField } from "./searchField";

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axois from "axios";
import Cookies from "js-cookie";

export const MainPage = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const [isUserLogedIn, setIsUserLogedIn] = useState(false);

  const jobFetcher = () => {
    useEffect(() => {
      axois
        .get("http://localhost:3000/api/v1/allthejobs")
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
