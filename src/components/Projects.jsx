import React from "react";
import './Projects.css'

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
            ]
        },
        {
            link: "https://guibrbs.github.io/calculadora/",
            img: "https://media.giphy.com/media/3o85xFdBA27p6TJWgM/giphy.gif",
            name: "Calculator",
            width: 140,
            height: 90,
            info: [
                "React Js",
                "HTML",
                "CSS3"
            ]
        },
    ]

    return (
        <div className="container">
        {projects.map(project => (
            <div className={props.movement ? "On" : "Off"} key={project.name}>
                <div className={"body--card"}>
                    <img className="img" src={project.img} alt={project.name} width={project.width} height={project.height}/>
                    <div className="card">
                        <h2 className="card-title">{project.name}</h2>
                        <p className="card-body">
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
