import React, { useContext, useEffect, useRef } from "react";
import './styles.css'
import AvatarLight from '../../assets/images/AvatarLight.png'
import AvatarDark from '../../assets/images/AvatarDark.png'
import { DarkModeContext } from "../../DarkModeContext";
import { motion } from "framer-motion";
import { ContactContext } from "../../ContactContext";

export default function ShowArea(){
    const {isActive} = useContext(DarkModeContext)
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
    }
    const {toContact, setToContactState } = useContext(ContactContext)
    const onClickConst = () => {
        setToContactState(true)
        setTimeout(() => {
            setToContactState(false)
        }, 1000)
    }
    return(
        <div className="showArea">
            <div className="showArea-info">
                <motion.div initial="hidden" animate="visible" variants={container}>
                    <motion.h2 variants={item} className="hello">Olá, me chamo</motion.h2>
                    <motion.h1 variants={item} className="nome">Guilherme Barbosa</motion.h1>
                    <motion.p variants={item} className="pessoal-description">
                        Sou estudante de <b><i>Engenharia de Software</i></b> pela <b><i>Universidade de Brasília.</i></b> Esse é o meu portfólio, 
                        onde você consegue encontrar alguns de meus projetos como <b><i>Desenvolvedor Front-end. </i></b> 
                        Se estiver procurando alguém <b><i>competente e focado</i></b>, hoje é seu dia de sorte, pois esse sou eu!
                    </motion.p>
                    <motion.div variants={item} className="btn-area">
                        <p className="btn" onClick={onClickConst}>Entre em contato</p>
                        <a href="https://github.com/guibrbs" target={"_blank"} rel={"noreferrer noopener"} className="social" title="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/guibrbs/" className="social" target={"_blank"} rel={"noreferrer noopener"} title="Linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div initial="hidden" animate="visible" variants={container} className={"img"}>
                <motion.img variants={item} src={AvatarLight} id="img" className={isActive ? "img-style static imgOff" : "static img-style"}/> 
                <motion.img variants={item} src={AvatarDark} id="img" className={isActive ? "img-style static" : "static img-style imgOff"}/>        
            </motion.div>
        </div>
    )
}