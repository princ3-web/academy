import { useState } from "react";
import "./css/App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Business from "./pages/Business";
import Teach from "./pages/Teach";
import Navbar from "./components/Navbar";

function App() {
  return (
    <></>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Business" element={<Business />} />
      <Route path="/Teach" element={<Teach />} />
    </Routes>
  );
}

export default App;
