import React from "react";
import './styles.css'
import LightGif from '../../assets/images/light-animated.gif'
import LightStatic from '../../assets/images/light-static.png'
import DarkGif from  '../../assets/images/dark-animated.gif'
import DarkStatic from '../../assets/images/dark-static.png'

export default function ShowArea({props}: {props: any}){
    return(
        <div className="showArea">
            <div className="showArea-info">
                <h2 className="hello">Olá, me chamo</h2>
                <h1 className="nome">Guilherme Barbosa</h1>
                <p className="pessoal-description">Sou estudante de <b><i>Engenharia de Software</i></b> pela <b><i>Universidade de Brasília.</i></b> Esse é o meu portfólio, 
                    onde você consegue encontrar alguns de meus projetos como <b><i>Desenvolvedor Web. </i></b> 
                    Se estiver procurando alguém <b><i>competente e focado</i></b>, hoje é seu dia de sorte, pois esse sou eu!
                </p>
                <div className="btn-area">
                    <p className="btn">Entre em contato</p>
                    <a href="https://github.com/guibrbs" target={"_blank"} rel={"noreferrer noopener"} className="social"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/guibrbs/" className="social" target={"_blank"} rel={"noreferrer noopener"}><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className={"img"}>
                <img src={LightStatic} id="img" className={props ? "img-style static imgOff" : "static img-style"}/> 
                <img src={LightGif} id="img" className={props ? "img-style imgOff" : "img-style "}/>      
                <img src={DarkStatic} id="img" className={props ? "img-style static" : "static img-style imgOff"}/>        
                <img src={DarkGif} id="img" alt="Illustration Dark" className={props ? "img-style" : "img-style imgOff"}/>
            </div>
        </div>
    )
}