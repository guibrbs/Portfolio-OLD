import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Photo from "../../assets/images/photo.png";
import Footer from "../../components/Footer";
import Curriculum from '../../assets/images/CV-GuilhermeBarbosaFerreira.pdf'

export default function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-grid">
          <div className="about-wrapper">
            <div className="imgBx">
                <img src={Photo} alt="" className="photo" />
            </div>
            <h2>Guilherme Barbosa</h2>
            <div>
              <a href="https://github.com/guibrbs" target={"_blank"} rel={"noreferrer noopener"}><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/guibrbs/" target={"_blank"} rel={"noreferrer noopener"}><i className="fa-brands fa-linkedin"></i></a>
              <a href={"mailto: mrguilhermeferreira@gmail.com"} target={"_blank"} rel={"noreferrer noopener"}><i className="fa-solid fa-envelope"></i></a>
              <a href={Curriculum} target={"_blank"} rel={"noreferrer noopener"}><i className="fa-solid fa-file-arrow-down" ></i></a>
            </div>
            <p style={{textAlign: 'justify', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--primary-color-darker)'}}>
              "Gamification can play an important role in implementing change by defining a clear transformation path with simple steps and encouragement along the way 
              ... [using] goal setting, triggers, and baby steps to help people change behaviors. 
              It helps people repeat behaviors until they become habits, keep the process fresh, and develop change over time." - Brian Burke</p>
          </div>
          <div>
            <div id="about-title">
              <h1>Eae.</h1>
              <a href="/" id="arrow-left"><i className="fa-solid fa-arrow-left-long"></i></a>
            </div>
            <p id="description">
              eu sou o Guilherme, sou <b>técnico em informática</b> e atualmente estou fazendo graduação em <b>Engenharia de Software</b> pela Universidade de Brasília.
              Pretendo seguir a área de desenvolvimento <b>Web e Mobile</b> com a ambição de participar das equipes de desenvolvimento de <b>grandes empresas</b>, me tornando
              uma referência para os profissionais da área. Atualmente sou trainee na <b>Orc'estra Gamificação.</b>
            </p>
            <h1 style={{marginTop: '1rem'}}>Tecnologias</h1>
            <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
              <i className="devicon-html5-plain colored" id="tech" title="HTML"></i>
              <i className="devicon-css3-plain colored" id="tech" title="CSS"></i>
              <i className="devicon-docker-plain colored" id="tech" title="Docker"></i>
              <i className="devicon-javascript-plain colored" style={{color: '#ffba01'}} id="tech" title="Javascript"></i>
              <i className="devicon-typescript-plain colored" id="tech" title="Typescript"></i>
              <i className="devicon-react-original colored" id="tech" title="React"></i>
              <i className="devicon-selenium-original colored" id="tech" title="Selenium"></i>
            </div>
            <h1 style={{marginTop: '1rem'}}>Em aprendizado</h1>
            <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
             <i className="devicon-nextjs-original" id="tech" title="NextJs"></i>
             <i className="devicon-mongodb-plain-wordmark colored" id="tech" title="MongoDB"></i>
             <i className="devicon-nodejs-plain colored" id="tech" title="NodeJs"></i>
             <i className="devicon-python-plain colored" style={{color: '#ffa701'}} id="tech" title="Python"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
