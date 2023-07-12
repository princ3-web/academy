import { useState } from "react";
import "./css/App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Business from "./pages/Business";
import Teach from "./pages/Teach";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(100, 100, 100, 1)",
      light: "rgba(240, 240, 240, 1)",
      dark: "rgba(15, 15, 15, 1)",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Teach" element={<Teach />} />
        </Routes>
        <Bottombar />
      </ThemeProvider>
    </>
  );
}

export default App;
