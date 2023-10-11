import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signin/SignIn";
import { SignUp } from "./components/signup/signup";
import { MainPage } from "./components/mainpage/MainPage";
import { AddJobPage } from "./components/addjob/AddJobPage";
import { JobInfoPage } from "./components/jobinfo/JobInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/job/:id" element={<JobInfoPage />}></Route>
      <Route path="/addjob" element={<AddJobPage />}></Route>
    </Routes>
  );
}
// Todo
//* Addjob page
export default App;
