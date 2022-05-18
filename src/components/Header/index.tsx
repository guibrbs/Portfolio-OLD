import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
    const localhref = window.location.hash;
    setHref(localhref);
  });
  const { isActive, setActiveState } = useContext(DarkModeContext);
  return (
    <header>
      <div className={scroll ? "header sticky" : "header" }>
        <NavLink to="/" reloadDocument className="logo">
          GBF
        </NavLink>
        <div className={hamburguer ? "links-wrapper active" : "links-wrapper"}>
          <NavLink to={'/'} reloadDocument className={href === "/Portfolio/" ? "links active" : "links"}>
            Home
          </NavLink>
          <NavLink
            to="/projetos"
            reloadDocument
            className={href === "/projetos" ? "links active" : "links"}
          >
            Projetos
          </NavLink>
          <NavLink to="/sobre" reloadDocument className={href === "/sobre" ? "links active" : "links"}>
            Sobre
          </NavLink>
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
