import React, { useState } from "react";
import './styles.css'

export default function Header({setProps}: {setProps: any}) {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive)
        setProps(isActive)
    }
    return(
        <header className="header">
            <a href="/" className="logo">GBF</a>
            <div className="links-wrapper">
                <a href="/" className="links active">Home</a>
                <a href="/" className="links">Projetos</a>
                <a href="/" className="links">Sobre</a>
            </div>
            <div className="icon" onClick={toggleClass}>
                <i className="fa-solid fa-moon" ></i>
                <i className="fa-solid fa-sun" ></i>
            </div>
        </header>
    )
}