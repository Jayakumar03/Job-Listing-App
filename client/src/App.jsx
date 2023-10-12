import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signin/SignIn";
import { SignUp } from "./components/signup/signup";
import { MainPage } from "./components/mainpage/MainPage";
import { AddJobPage } from "./components/addjob/AddJobPage";
import { JobInfoPage } from "./components/jobinfo/JobInfo";
import { EditJob } from "./components/editjob/EditJob";

function App() {
  let [isUserLogedIn, setIsUserLogedIn] = useState(false);

  // const tokenInLocalStorage = localStorage.getItem("token");

  // if (Cookies.get("token") || tokenInLocalStorage) {
  //   setIsUserLogedIn(true);
  // }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            isUserLogedIn={isUserLogedIn}
            setIsUserLogedIn={setIsUserLogedIn}
          />
        }
      ></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/job/:id"
        element={
          <JobInfoPage
            isUserLogedIn={isUserLogedIn}
            setIsUserLogedIn={setIsUserLogedIn}
          />
        }
      ></Route>
      <Route path="/addjob" element={<AddJobPage />}></Route>
      <Route path="/editjob/:id" element={<EditJob />}></Route>
    </Routes>
  );
}
// Todo
//* Addjob page
export default App;
