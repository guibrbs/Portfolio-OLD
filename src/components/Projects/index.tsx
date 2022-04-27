import React from "react";
import './styles.css'
import Metabase from '../../assets/images/metabase.png'
import SignIn from '../../assets/images/sliding-signin.png'

export default function Projects() {
    return(
        <div className="container-area">
            <h1 className="container-title">Principais projetos</h1>
            <div className="arrow">
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="container-projects">
                <div className="projects" id="one">
                    <img src={Metabase} alt="image-metabase" className="imgs"/>
                    <div className="content-project">

                    </div>
                </div>
                <div className="projects" id="two">
                    <img src={SignIn} alt="image-sign-in" className="imgs"/>
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