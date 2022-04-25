import React from "react";
import './styles.css'
import LightGif from '../../assets/images/light-animated.gif'
import LightStatic from '../../assets/images/light-static.png'
import Dark from  '../../assets/images/dark-animated.gif'

export default function ShowArea({props}: {props: any}){
    return(
        <div className="showArea">
            <div className="showArea-info">
                <h2>Olá, me chamo</h2>
                <h1 className="nome">Guilherme Barbosa</h1>
                <p>Sou estudante de <b><i>Engenharia de Software</i></b> pela <b><i>Universidade de Brasília.</i></b> Esse é o meu portfólio, 
                    onde você consegue encontrar alguns de meus projetos como <b><i>Desenvolvedor Web. </i></b> 
                    Se estiver procurando alguém <b><i>competente e focado</i></b>, hoje é seu dia de sorte, pois esse sou eu!
                </p>
                <p className="btn">Entre em contato</p>
            </div>
            <div className={"img"}>
                <img src={LightStatic} id="img" className={props ? "static img-style" : "static img-style imgOff"}/> 
                <img src={LightGif} id="img" className={props ? "img-style" : "img-style imgOff"}/>                
                <img src={Dark} id="img" alt="Illustration Dark" className={props ? "img-style imgOff" : "img-style"}/>
            </div>
        </div>
    )
}