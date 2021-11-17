import React, {useEffect, useState} from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './App.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


    const [movement, setMovement] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 1)
                setMovement(true);
            else
                setMovement(false);
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    return (
        <div>
            <div className={movement ? "content--movement" : "content"}>
            {/*<div className={"content"}>*/}
            </div>
            <div className={movement ? "letters--movement" : "letters--group"}>
                <h1 className={"letters--style"}>O</h1>
                <h1 className={"letters--style"}>LÁ</h1>
                <p className={movement ? "letters--scroll--disable" : "letters--scroll"}>scroll</p>
                <ArrowDownwardIcon className={movement ? "disable--arrow" : "link hang-on-hover"} style={{fontSize: 15}}></ArrowDownwardIcon>
            </div>
            <div className={movement ? "letters--about--movement" : "letters--about"}>
                <p>Me chamo Guilherme Barbosa Ferreira</p>
                <p className={"letters--white"}>e este é o meu portfólio, onde poderá </p>
                <p className={"letters--white"}>encontrar alguns projetos meus!</p>
            </div>
            <div>
                <a className={movement ? "link--netflix--movement" : "link--netflix"} href={"https://guibrbs.github.io/ProjetoNetflix/"}>
                    <img src={"https://www.caviarcriativo.com/wp-content/uploads/2020/06/Significados-da-Marca-Netflix.gif"} alt={"Clone Netflix"} width={150}/>
                </a>
                <div className={movement ? "info--netflix--movement" : "info--netflix"}>
                    <p className={"info--netflix--white"}>Clone Netflix</p>
                    <p>React Js</p>
                    <p>HTML</p>
                    <p>CSS3</p>
                </div>
            </div>
        </div>
    )
}

