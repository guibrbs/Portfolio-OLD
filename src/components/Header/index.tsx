import React from "react";
import './styles.css'

export default function Header() {
    return(
        <header className="header">
            <a href="/" className="logo">GBF</a>
            <div className="links-wrapper">
                <a href="/" className="links active">Home</a>
                <a href="/" className="links">Projetos</a>
                <a href="/" className="links">Sobre</a>
            </div>
            <i>moon</i>
        </header>
    )
}