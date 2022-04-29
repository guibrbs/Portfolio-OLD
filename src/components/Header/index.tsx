import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import './styles.css'

export default function Header() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 2){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        }
        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    const {isActive, setActiveState} = useContext(DarkModeContext)
    return(
        <header className={scroll ? "header sticky" : "header"}>
            <a href="/" className="logo">GBF</a>
            <div className="links-wrapper">
                <a href="/" className="links active">Home</a>
                <a href="projetos" className="links">Projetos</a>
                <a href="/" className="links">Sobre</a>
            </div>
            <div className="icon" onClick={() => setActiveState(!isActive)}>
                <i className="fa-solid fa-moon" ></i>
                <i className="fa-solid fa-sun" ></i>
            </div>
        </header>
    )
}