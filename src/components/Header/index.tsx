import React from "react";
import './styles.css'

export default function Header({setProps}: {setProps: any}) {
    return(
        <header className="header">
            <a href="/" className="logo">GBF</a>
            <div className="links-wrapper">
                <a href="/" className="links active">Home</a>
                <a href="/" className="links">Projetos</a>
                <a href="/" className="links">Sobre</a>
            </div>
            <div className="icon">
                <i className="fa-solid fa-moon" onClick={(e) => setProps(0)}></i>
                <i className="fa-solid fa-sun" onClick={(e) => setProps(1)}></i>
            </div>
        </header>
    )
}