import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Photo from "../../assets/images/photo.png";

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
              <a href=""><i className="fa-solid fa-envelope"></i></a>
              <a href=""><i className="fa-solid fa-file-arrow-down"></i></a>
            </div>
          </div>
          <div>
            <div id="about-title">
              <h1>Eae.</h1>
              <a href="" id="arrow-left"><i className="fa-solid fa-arrow-left-long"></i></a>
            </div>
            <p id="description">
              eu sou o Guilherme, sou técnico em informática e atualmente estou fazendo graduação em Engenharia de Software pela Universidade de Brasília.
              vitae ipsum in Quisque tempor elit turpis elit. hendrerit ex. nibh Lorem volutpat ac Lorem commodo vitae orci gravida leo. amet, eget adipiscing diam 
              eu odio lorem volutpat ac Lorem commodo vitae orci gravida leo. amet eget eu odio lorem.
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
    </>
  );
}
