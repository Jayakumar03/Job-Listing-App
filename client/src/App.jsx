import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signin/SignIn";
import { SignUp } from "./components/signup/signup";
import { JobPage } from "./components/jobPage/JobPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/jobpage" element={<JobPage />}></Route>
    </Routes>
  );
}

export default App;
