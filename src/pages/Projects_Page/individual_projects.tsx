import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./styles.css";
import Metabase from '../../assets/images/metabase.png'
import SignIn from '../../assets/images/sliding-signin.png'
import LandingPage from "../../assets/images/landing-page.png";
import CloneNetflix from '../../assets/images/clone-netflix.png'
import InteractiveRating from '../../assets/images/interactive-rating.png'
import CovidTracker from '../../assets/images/covid-tracker.png'
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

export default function IndividualProjects() {
  type Individual_projects = object[];
  const individual_projects: Individual_projects = [
    {
      title: "INDICAA",
      description: "INDICAA é um projeto desenvolvido por alunos da matéria de Métodos de Desenvolvimento de Software da Universidade de Brasília - UnB com o objetivo \
      de facilitar o acesso às informações apresentadas pelo site acadêmico SIGAA. É um projeto que visa a busca e a disponibilização \
      visual de informações acadêmicas relevantes aos coordenadores da Universidade de Brasília - UnB, e também, possibilitar a pesquisa e a filtragem de dados por \
      meio da interface do Metabase.",
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
      description: "Sign In | Sign Up é um projeto de cunho pessoal com o intuito de realizar, somente com CSS, a animação entre páginas de cadastro e login. As ilustrações \
      foram coletadas a partir do site UnDraw, que disponibiliza gratuitamente seus arquivos. O objetivo com o desenvolvimento dessa interface foi para aprimorar as habilidades técnicas \
      referentes às tecnologias utilizadas, procurando seguir boas práticas de programação e construir um código limpo.",
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
      description: "Landing Page é um projeto de cunho pessoal, seguido através de um guia no youtube e tem o intuito de desenvolver uma página totalmente responsiva, com animações \
      e um efeito de Dark e Light mode incrível. O objetivo com o desenvolvimento dessa página foi para ter conhecimento sobre responsividade conforme a elaboração do projeto, \
      além de aprender a realizar a troca para o modo noturno, no qual o mesmo mecanismo de troca foi utilizado neste portfólio.",
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
    {
      title: "Clone Netflix",
      description: "Esse projeto foi o primeiro onde eu tive contato com ReactJs através de uma live realizada no canal Bonieky Lacerda, no qual envolve o desenvolvimento \
      de uma aplicação do zero, clonando visualmente a interface da Netflix. As informações utilizadas como séries em destaque, filtro por categoria, banner de séries/filmes \
      foram coletadas através da API TMDB, contudo vale ressaltar que não são inclusos os catálogos disponibilizados oficialmente pela Netflix.",
      tech: 
        <>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-javascript-plain colored" title="Javascript" style={{color: "#FFA701"}}></i>
          <i className="devicon-eslint-original colored" title="Eslint"></i>
          <i className="devicon-materialui-plain colored" title="MaterialUI"></i>
          <i className="devicon-css3-plain colored" title="CSS"></i>
          <a href="https://github.com/guibrbs/ProjetoNetflix" target={"_blank"} rel={"noreferrer noopener"}><i className="devicon-github-original colored"></i></a>
        </>,
      img: CloneNetflix,
      link: 'https://guibrbs.github.io/ProjetoNetflix/',
      id: '4'
    },
    {
      title: "Interactive Rating",
      description: "Esse projeto foi um desafio disponbilizado pela plataforma Frontend Mentor, cujo desafio é desenvolver esse componente de classificação interativo e tentar \
      se aproximar o mais possível com as imagens disponbilizadas. Meu objetivo ao desenvolver foi me desafiar ao tentar implementar uma aplicação básica do zero, sem ajuda nenhuma \
      e com alguns conhecimentos prévios das técnologias utilizadas.",
      tech: 
        <>
          <i className="devicon-javascript-plain colored" title="Javascript" style={{color: "#FFA701"}}></i>
          <i className="devicon-css3-plain colored" title="CSS"></i>
          <i className="devicon-html5-plain colored" title="HTML"></i>
          <a href="https://github.com/guibrbs/Interacting_rating_component" target={"_blank"} rel={"noreferrer noopener"}><i className="devicon-github-original colored"></i></a>
        </>,
      img: InteractiveRating,
      link: 'https://guibrbs.github.io/Interacting_rating_component/',
      id: '5'
    },
    {
      title: "Covid-19 Tracker",
      description: "Com o estouro da pandemia de COVID-19, achei interessante a realização de gráficos que dispobilizase as informações de casos de COVID sobre os casos de óbito \
      por todo o mundo, ou seja, as regiões mais influentes estão inclusas, e todos os dados foram coletados através de uma API (dados não estão mais sendo atualizados). \
      O objetivo com o desenvolvimento desse projeto foi aprender a coletar dados de API e representar graficamente.",
      tech: 
        <>
          <i className="devicon-react-original colored" title="React"></i>
          <i className="devicon-javascript-plain colored" title="Javascript" style={{color: "#FFA701"}}></i>
          <i className="devicon-materialui-plain colored" title="MaterialUI"></i>
          <i className="devicon-css3-plain colored" title="CSS"></i>
          <a href="https://github.com/guibrbs/Covid-Tracker" target={"_blank"} rel={"noreferrer noopener"}><i className="devicon-github-original colored"></i></a>
        </>,
      img: CovidTracker,
      link: 'https://guibrbs.github.io/Covid-Tracker/',
      id: '6'
    },
  ];
  const [url, setUrl] = useState('')
  useEffect(()=>{
    const href = window.location.pathname
    console.log(href)
    if (href === '/Portfolio/projetos/INDICAA'){
      setUrl('1')
    }
    else if (href === '/Portfolio/projetos/SignIn'){
      setUrl('2')
    }
    else if (href === '/Portfolio/projetos/Landing-Page'){
      setUrl('3')
    }
    else if (href === '/Portfolio/projetos/Clone-Netflix'){
      setUrl('4')
    }
    else if (href === '/Portfolio/projetos/Interactive-Rating'){
      setUrl('5')
    }
    else if (href === '/Portfolio/projetos/Covid-Tracker'){
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
                  <NavLink to="/projetos" className="arrow-left">
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </NavLink>
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
      <Footer />
    </>
  );
}
