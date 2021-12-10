import React from "react";
import './Projects.css'
import pong from '../img/pong.png'

// eslint-disable-next-line
export default props => {
    
    const projects = [
        {
            link: "https://guibrbs.github.io/ProjetoNetflix/",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png",
            name: "Clone Netflix",
            width: 140,
            height: 50,
            info: [
                "React Js",
                "HTML",
                "CSS3"
            ],
            marginTop: "4vh",
        },
        {
            link: "https://guibrbs.github.io/calculadora/",
            img: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calculator-icon.png",
            name: "Calculator",
            width: "50%",
            height: "50%",
            info: [
                "React Js",
                "HTML",
                "CSS3"
            ],
            marginTop: "1vh",
        },
        {
            link: "https://guibrbs.github.io/pong-web/",
            img: pong,
            name: "Pong Game",
            width: 115,
            height: 100,
            info: [
                "HTML",
                "CSS3",
                "Javascript"
            ],
            marginTop: "3vh",
        },
        {
            link: "https://guibrbs.github.io/Covid-Tracker/",
            name: "Covid-19 Tracker",
            width: 115,
            height: 100,
            info: [
                "React Js",
                "Charts Js",
                "Material UI"
            ],
            marginTop: "3vh",
        },
    ]

    return (
        <div className="container">
        {projects.map(project => (
            <div className={props.movement ? "On" : "Off"} key={project.name}>
                <div className={"body--card"}>
                    {/* <img className="img" src={project.img} alt={project.name} width={project.width} 
                        height={project.height} style={{marginTop: project.marginTop}}
                    /> */}
                    <div className="card">
                        <h2 className="card-title">{project.name}</h2>
                        <p className="card-content">
                            {project.info.map(info => (
                                <p>{info}</p>
                            ))} 
                        </p>
                        <a href={project.link} className="button" target={"_blank"} rel={"noopener noreferrer"}>Acesse</a>
                    </div>
                </div>
            </div>))}
        </div>
    )
}
