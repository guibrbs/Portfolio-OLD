import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import "./styles.css";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [hamburguer, setHamburguer] = useState(false)

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
    <header>
      <div className={scroll ? "header sticky" : "header" }>
        <a href="/" className="logo">
          GBF
        </a>
        <div className={hamburguer ? "links-wrapper active" : "links-wrapper"}>
          <a href="/" className={href === "/Portfolio/" ? "links active" : "links"}>
            Home
          </a>
          <a
            href="/Portfolio/projetos"
            className={href === "/Portfolio/projetos" ? "links active" : "links"}
          >
            Projetos
          </a>
          <a href="/Portfolio/sobre" className={href === "/Portfolio/sobre" ? "links active" : "links"}>
            Sobre
          </a>
        </div>
        <div className="icon" onClick={() => setActiveState(!isActive)}>
          <i className="fa-solid fa-moon"></i>
          <i className="fa-solid fa-sun"></i>
        </div>
        <div className={hamburguer ? 'hamburguer-menu active' : 'hamburguer-menu'} onClick={(e) => setHamburguer(!hamburguer)}>
          <div className="bar">
          </div>
        </div>
      </div>
    </header>
  );
}
