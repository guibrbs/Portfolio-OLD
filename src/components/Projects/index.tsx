import React from "react";
import "./styles.css";
import Metabase from "../../assets/images/metabase.png";
import SignIn from "../../assets/images/sliding-signin.png";
import CloneNetflix from "../../assets/images/clone-netflix.png";
import LandingPage from "../../assets/images/landing-page.png";
import InteractiveRating from "../../assets/images/interactive-rating.png";
import CovidTracker from "../../assets/images/covid-tracker.png";
import NlwImpulse from "../../assets/images/nlw-impulse.png"
import { NavLink } from "react-router-dom";

export default function Projects() {
  type Projects_map = object[];
  const projects_map: Projects_map = [
    {
      link: "/projetos/INDICAA",
      img: Metabase,
      alt: "image-metabase",
      title: "INDICAA",
      description:
        "Feito exclusivamente para coordenadores e pessoas da gestão da Universidade de Brasília, com o intuito de auxiliar a \
         administração das matérias ofertadas, indicando através de gráficos disponíveis no Metabase.",
      id: "one",
    },
    {
      link: "/projetos/NLW",
      img: NlwImpulse,
      alt: "Nlw Impulse",
      title: "Nlw Impulse",
      description: 
      "Projeto pessoal seguindo os passos no NLW Return Impulse, realizado pela Rocketseat, com o objetivo de aprender novas tecnologias, \
      melhorar o desenvolvimento técnico e introduzir o desenvolvimento mobile.",
      id: "two",
    },
    {
      link: "/projetos/SignIn",
      img: SignIn,
      alt: "image-sign-in",
      title: "Sign in | Sign up",
      description:
        "Mini projeto pessoal com o objetivo de aprimorar as habilidades técnicas no qual envolve o desenvolvimento de formulários de sign in e sign up, alternando entre si \
        com animações sem nenhum framework.",
      id: "three",
    },
    {
        link: "/projetos/Landing-Page",
        img: LandingPage,
        alt: "Landing Page",
        title: "Landing Page",
        description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma Landing Page responsiva em qualquer dispositivo, além de incluir o modo noturno\
        animado.",
        id: "four",
    },
    {
      link: "/projetos/Clone-Netflix",
      img: CloneNetflix,
      alt: "Clone Netflix",
      title: "Clone Netflix",
      description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de uma interface parecida com a da Netflix, utilizando imagens captadas \
        através de uma API open source.",
      id: "five",
    },
    {
      link: "/projetos/Interactive-Rating",
      img: InteractiveRating,
      alt: "Interactive Rating Component",
      title: "Interactive Rating Component",
      description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento um componenete interativo de classificação. ",
      id: "six",
    },
    {
      link: "/projetos/Covid-Tracker",
      img: CovidTracker,
      alt: "Covid Tracker",
      title: "Covid Tracker",
      description:
        "Projeto pessoal com o objetivo de aprimorar as habilidades técnicas envolvendo o desenvolvimento de um rastreador de casos de \
        COVID-19 no Brasil e no mundo, através de uma API open source.",
      id: "seven",
    },
  ];
  return (
    <div className="projects-area">
      <h1 className="container-title">Principais projetos</h1>
      <div className="arrow">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="container-projects">
        {projects_map.map((project: any) => {
          return (
            <div className="projects" id={project.id} key={project.id}>
              <NavLink to={project.link} reloadDocument>
                <img src={project.img} alt={project.alt} className="imgs" />
                <div className="content-project">
                  <h2 className="description-project">
                    <b>{project.title}</b>
                  </h2>
                  <p className="description-project">{project.description}</p>
                  <p className="description-project">Saiba mais</p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
      <h2 className="explore">
        <NavLink to="/projetos" reloadDocument>Explore mais projetos</NavLink>
      </h2>
    </div>
  );
}