import { useState } from "react";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Business from "./pages/Business";
import Teach from "./pages/Teach";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Courses/>}/>
      <Route path="/" element={<Business/>}/>
      <Route path="/Teach" element={<Teach/>}/>
    </Routes>
  )
}

export default App;
