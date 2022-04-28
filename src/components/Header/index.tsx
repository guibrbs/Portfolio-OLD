import React, { useEffect, useState } from "react";
import './styles.css'

export default function Header({setProps}: {setProps: any}) {
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

    const [isActive, setActive] = useState(false);
    useEffect(() => {
        setProps(isActive)
    })
    return(
        <header className={scroll ? "header sticky" : "header"}>
            <a href="/" className="logo">GBF</a>
            <div className="links-wrapper">
                <a href="/" className="links active">Home</a>
                <a href="/" className="links">Projetos</a>
                <a href="/" className="links">Sobre</a>
            </div>
            <div className="icon" onClick={() => setActive(!isActive)}>
                <i className="fa-solid fa-moon" ></i>
                <i className="fa-solid fa-sun" ></i>
            </div>
        </header>
    )
}