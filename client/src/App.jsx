import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signin/SignIn";
import { SignUp } from "./components/signup/signup";
import { MainPage } from "./components/mainpage/MainPage";
import { AddJobPage } from "./components/addjob/AddJobPage";
import { JobDescriptionPage } from "./components/jobdescription/JobDescriptionPage";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
