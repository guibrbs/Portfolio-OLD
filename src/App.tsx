import React, { useContext, useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects_Page from "./pages/Projects_Page";
import { DarkModeContext } from "./DarkModeContext";
import IndividualProjects from "./pages/Projects_Page/individual_projects";
import About from "./pages/About";

function App() {
  const { isActive } = useContext(DarkModeContext);

  return (
    <div className={isActive ? "container dark" : "container light"}>
      <div className="wrapper">
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/projetos" element={<Projects_Page />} />
          <Route path="/Portfolio/projetos/INDICAA" element={<IndividualProjects />} />
          <Route path="/Portfolio/projetos/SignIn" element={<IndividualProjects />} />
          <Route
            path="/Portfolio/projetos/Landing-Page"
            element={<IndividualProjects />}
          />
          <Route
            path="/Portfolio/projetos/Clone-Netflix"
            element={<IndividualProjects />}
          />
          <Route
            path="/Portfolio/projetos/Interactive-Rating"
            element={<IndividualProjects />}
          />
          <Route
            path="/Portfolio/projetos/Covid-Tracker"
            element={<IndividualProjects />}
          />
          <Route path="/Portfolio/sobre" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
