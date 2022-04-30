import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./styles.css";
import Metabase from '../../assets/images/metabase.png'
import SignIn from '../../assets/images/sliding-signin.png'
import LandingPage from "../../assets/images/landing-page.png";
import CloneNetflix from '../../assets/images/clone-netflix.png'
import InteractiveRating from '../../assets/images/interactive-rating.png'
import CovidTracker from '../../assets/images/covid-tracker.png'

export default function IndividualProjects() {
  type Individual_projects = object[];
  const individual_projects: Individual_projects = [
    {
      title: "INDICAA",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore delectus quis nulla quas dolorem fuga tempora numquam facere quod esse, \
      voluptatum, libero laborum doloremque labore a dolor hic maiores, corrupti ratione enim quisquam atque officia iste porro! Iure fuga corporis illo distinctio architecto veniam,\
      modi laboriosam, totam numquam aspernatur animi?",
      tech: 
        <>
          <i className="devicon-heroku-original colored" title="Heroku"></i> 
          <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
          <i className="devicon-docker-plain colored" title="Docker"></i>
          <i className="devicon-django-plain colored" title="Django" style={{color: 'green'}}></i>
          <i className="devicon-selenium-original colored" title="Selenium"></i>
          <i className="devicon-python-plain colored" title="Python" style={{color: '#FFD300'}}></i>
          <a href="https://github.com/fga-eps-mds/2021.2-INDICAA" target={"_blank"} rel={"noreferrer noopener"}><i className="devicon-github-original colored"></i></a>
        </>,
      img: Metabase,
      link: 'https://fga-eps-mds.github.io/2021.2-INDICAA-Wiki/',
      id: '1'
    },
    {
      title: "Sign In | Sign Up",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore delectus quis nulla quas dolorem fuga tempora numquam facere quod esse, \
      voluptatum, libero laborum doloremque labore a dolor hic maiores, corrupti ratione enim quisquam atque officia iste porro! Iure fuga corporis illo distinctio architecto veniam,\
      modi laboriosam, totam numquam aspernatur animi?",
      tech: 
        <>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-javascript-plain colored" title="Javascript" style={{color: "#FFA701"}}></i>
          <i className="devicon-css3-plain colored" title="CSS"></i>
          <a href="https://github.com/guibrbs/Sliding-Sign-In" target={"_blank"} rel={"noreferrer noopener"}><i className="devicon-github-original colored"></i></a>
        </>,
      img: SignIn,
      link: 'https://guibrbs.github.io/Sliding-Sign-In/',
      id: '2'
    },
    {
      title: "Landing Page",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore delectus quis nulla quas dolorem fuga tempora numquam facere quod esse, \
      voluptatum, libero laborum doloremque labore a dolor hic maiores, corrupti ratione enim quisquam atque officia iste porro! Iure fuga corporis illo distinctio architecto veniam,\
      modi laboriosam, totam numquam aspernatur animi?",
      tech: 
        <>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-javascript-plain colored" title="Javascript" style={{color: "#FFA701"}}></i>
          <i className="devicon-typescript-plain colored" title="Typescript"></i>
          <i className="devicon-css3-plain colored" title="CSS"></i>
          <a href="https://github.com/guibrbs/landing_page" target={"_blank"} rel={"noreferrer noopener"}><i className="devicon-github-original colored"></i></a>
        </>,
      img: LandingPage,
      link: 'https://guibrbs.github.io/landing_page/',
      id: '3'
    },
  ];
  const [url, setUrl] = useState('')
  useEffect(()=>{
    const href = window.location.pathname
    if (href === '/projetos/INDICAA'){
      setUrl('1')
    }
    else if (href === '/projetos/SignIn'){
      setUrl('2')
    }
    else if (href === '/projetos/Landing-Page'){
      setUrl('3')
    }
    else if (href === '/projetos/Clone-Netflix'){
      setUrl('4')
    }
    else if (href === '/projetos/Interactive-Rating'){
      setUrl('5')
    }
    else if (href === '/projetos/Covid-Tracker'){
      setUrl('6')
    }
  }, [])

  return (
    <>
      <Header />
      {individual_projects.map((project: any) => {
        if (url == project.id){
          return (
            <div className="container-ip" key={project.id}>
              <>
                <div className="title-wrapper">
                  <a href="/projetos" className="arrow-left">
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </a>
                  <h1 className="container-title"><a href={project.link} target={"_blank"} rel={"noreferrer noopener"} className="bigger">{project.title}</a></h1>
                </div>
                <p className="content-ip">{project.description}</p>
                <h2 className="subtitle-ip">Tecnologias utilizadas</h2>
                <div className="tech">
                  {project.tech}
                </div>
                <img src={project.img} alt="" className="imgs-ip"/>
              </>
          </div>
          );
        }
      })}
    </>
  );
}
