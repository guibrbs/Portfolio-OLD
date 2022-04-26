import React from "react";
import './styles.css'

export default function Projects() {
    return(
        <div className="container-area">
            <h1 className="container-title">Principais projetos</h1>
            <div className="arrow">
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="container-projects">
                <div className="projects" id="one">

                </div>
                <div className="projects" id="two">

                </div>
                <div className="projects" id="three">

                </div>
                <div className="projects" id="four">

                </div>
            </div>
            <a href="/"><h2 className="explore">Explore mais projetos</h2></a>
        </div>
    )
}