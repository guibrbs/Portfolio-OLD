import React, {useEffect, useState} from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';
import Apresentation from "./Apresentation";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [movement, setMovement] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 1)
                setMovement(true);
            else
                setMovement(false);
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <section>
            <div className={"white--margin"}>

                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a href={"https://github.com/guibrbs"} style={{color: "black"}}><GitHubIcon className={"icons"} style={{fontSize: 32}}/></a>
                <a href={"mailto: mrguilhermeferreira@gmail.com"} style={{color: "black"}}><EmailIcon className={"icons"} style={{fontSize: 32}}/></a>
            </div>
            <div className={movement ? "rectangle--movement" : "rectangle"}>
                <div className={movement ? "scroll--disable" : "scroll"}>
                    <p className={"letters--scroll"}>scroll</p>
                    <ArrowDownwardIcon className={"link hang-on-hover"} style={{fontSize: 15}}/>
                </div>
                <div className={"content"}>
                    <div className={movement ? "letters--about--movement" : "letters--about"}>
                        <p className={"letters--white"}>Me chamo
                            <strong><span style={{color: '#212020'}}> Guilherme Barbosa Ferreira</span></strong></p>
                        <p className={"letters--white"}>e este é o meu portfólio, onde poderá </p>
                        <p className={"letters--white"}>encontrar alguns de meus projetos.</p>
                    </div>
                    <div className={movement ? "content--about--movement" : "content--about"}>
                        <a href={"https://guibrbs.github.io/ProjetoNetflix/"}>
                            <img
                                src={"https://www.caviarcriativo.com/wp-content/uploads/2020/06/Significados-da-Marca-Netflix.gif"}
                                alt={"Clone Netflix"} width={150}/>
                        </a>
                        <div className={"info"}>
                            <p id={"white"}>Clone Netflix</p>
                            <p>React Js</p>
                            <p>HTML</p>
                            <p>CSS3</p>
                        </div>
                    </div>
                    <div className={movement ? "content--about--movement" : "content--about"}>
                        <a href={"https://guibrbs.github.io/calculadora/"}>
                            <img
                                src={"https://media.giphy.com/media/3o85xFdBA27p6TJWgM/giphy.gif"}
                                alt={"Calculator"} width={150} height={90}/>
                        </a>
                        <div className={"info"}>
                            <p id={"white"}>Calculator</p>
                            <p>React Js</p>
                            <p>HTML</p>
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={movement ? "letters--apresentation--movement" : "letters--apresentation"}>
                <Apresentation trueMoviment={movement}/>
            </div>
        </section>
    )
}

