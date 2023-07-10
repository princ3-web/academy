import { useState } from "react";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Ho

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route/>
    </Routes>
  )
}

export default App;
