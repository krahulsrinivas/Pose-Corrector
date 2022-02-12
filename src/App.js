import React,{useEffect,useRef,useState} from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Exercise from "./exercise/exercise";
import Main from "./home/main";
import Dashboard from "./exercise/dashboard"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route  path="/register" element={<Register />} />
      <Route path="/home" element={<Main />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
