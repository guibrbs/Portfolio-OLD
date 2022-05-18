import React, { useContext, useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects_Page from "./pages/Projects_Page";
import { DarkModeContext } from "./DarkModeContext";
import IndividualProjects from "./pages/Projects_Page/individual_projects";
import About from "./pages/About";
import { Loading, Switch } from "./components/Loading";

function App() {
  const { isActive } = useContext(DarkModeContext);

  return (
    <div className={isActive ? "container dark" : "container light"}>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects_Page />} />
          <Route path="/projetos/INDICAA" element={<IndividualProjects />} />
          <Route path="/projetos/NLW" element={<IndividualProjects />} />
          <Route path="/projetos/SignIn" element={<IndividualProjects />} />
          <Route path="/projetos/Landing-Page" element={<IndividualProjects />} />
          <Route path="/projetos/Clone-Netflix" element={<IndividualProjects />} />
          <Route path="/projetos/Interactive-Rating" element={<IndividualProjects />} />
          <Route path="/projetos/Covid-Tracker" element={<IndividualProjects />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
