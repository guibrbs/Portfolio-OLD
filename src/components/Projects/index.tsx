import React from "react";
import './styles.css'
import Metabase from '../../assets/images/metabase.png'
import SignIn from '../../assets/images/sliding-signin.png'

export default function Projects() {
    return(
        <div className="projects-area">
            <h1 className="container-title">Principais projetos</h1>
            <div className="arrow">
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="container-projects">
                <div className="projects" id="one">
                    <a href="">
                        <img src={Metabase} alt="image-metabase" className="imgs"/>
                        <div className="content-project">
                            <h2 className="description-project"><b>INDICAA</b></h2>
                            <p className="description-project">Feito exclusivamente para coordenadores e pessoas da gestão da Universidade de Brasília, 
                                com o intuito de auxiliar a administração das matérias ofertadas, indicando através de gráficos disponíveis no Metabase.
                            </p>
                            <p className="description-project">Saiba mais</p>
                        </div>
                    </a>
                </div>
                <div className="projects" id="two">
                    <a href="">
                        <img src={SignIn} alt="image-sign-in" className="imgs"/>
                        <div className="content-project">
                            <h2 className="description-project"><b>Sign in | Sign up</b></h2>
                            <p className="description-project">Mini projeto pessoal com o objetivo de aprimorar as habilidades técnicas
                                no qual envolve o desenvolvimento de formulários de sign in e sign up, alternando entre si com animações sem nenhum framework. 
                            </p>
                            <p className="description-project">Saiba mais</p>
                        </div>
                    </a>
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