import { useState } from "react";
import "./css/App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Business from "./pages/Business";
import Teach from "./pages/Teach";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import { ThemeProvider, createTheme, responsiveFontSizes  } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "rgba(100, 100, 100, 1)",
      light: "rgba(240, 240, 240, 1)",
      dark: "rgba(15, 15, 15, 1)",
    },
  },
});

theme = responsiveFontSizes(theme);



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
   
        <Bottombar />
      </ThemeProvider>
    </>
  );
}

export default App;
