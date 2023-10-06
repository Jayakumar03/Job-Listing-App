import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn } from "./components/signin/SignIn";
import { SignUp } from "./components/signup/signup";
import { MainPage } from "./components/mainpage/MainPage";
import { AddJobPage } from "./components/addjob/AddJobPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />}></Route> */}
      {/* <Route path="/signup" element={<SignUp />}></Route> */}
      {/* <Route path="/mainpage" element={<MainPage />}></Route> */}
      <Route path="/" element={<AddJobPage />}></Route>
    </Routes>
  );
}

export default App;
