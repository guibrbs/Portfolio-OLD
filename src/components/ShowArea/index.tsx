import React from "react";
import './styles.css'
import AvatarLight from '../../assets/images/Avatar-Light.png'
import AvatarDark from '../../assets/images/Avatar-Dark.png'

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
                    <a href="https://github.com/guibrbs" target={"_blank"} rel={"noreferrer noopener"} className="social" title="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/guibrbs/" className="social" target={"_blank"} rel={"noreferrer noopener"} title="Linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className={"img"}>
                <img src={AvatarLight} id="img" className={props ? "img-style static imgOff" : "static img-style"}/> 
                <img src={AvatarDark} id="img" className={props ? "img-style static" : "static img-style imgOff"}/>        
            </div>
        </div>
    )
}