import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import "./styles.css";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  const [href, setHref] = useState("");
  useEffect(() => {
    const localhref = window.location.pathname;
    setHref(localhref);
  });
  const { isActive, setActiveState } = useContext(DarkModeContext);
  return (
    <header className={scroll ? "header sticky" : "header"}>
      <a href="/" className="logo">
        GBF
      </a>
      <div className="links-wrapper">
        <a href="/" className={href === "/" ? "links active" : "links"}>
          Home
        </a>
        <a
          href="/projetos"
          className={href === "/projetos" ? "links active" : "links"}
        >
          Projetos
        </a>
        <a href="/sobre" className={href === "/sobre" ? "links active" : "links"}>
          Sobre
        </a>
      </div>
      <div className="icon" onClick={() => setActiveState(!isActive)}>
        <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-sun"></i>
      </div>
    </header>
  );
}
