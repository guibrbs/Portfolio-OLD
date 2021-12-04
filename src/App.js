import React, {useEffect, useState} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';
import Ola from "./components/Ola";
import InfoScroll from "./components/InfoScroll";
import Projects from "./components/Projects";
import Apresentation from "./components/Apresentation";

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
        <section className={"section"} style={{height: '100vh'}}>
            <div className={"sticky"}> 
                <div className={"white--margin"}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a href={"https://github.com/guibrbs"} target={"_blank"} rel={"noopener noreferrer"} style={{color: "black"}}>
                        <GitHubIcon className={"icons"} style={{fontSize: 32}}/>
                    </a>
                    <a href={"mailto: mrguilhermeferreira@gmail.com"} target={"_blank"} rel={"noopener noreferrer"} style={{color: "black"}}>
                        <EmailIcon className={"icons"} style={{fontSize: 32}}/>
                    </a>
                </div>
                <div className={movement ? "rectangle--movement" : "rectangle"}>
                    <InfoScroll movement={movement}/>
                    <div className={"content"}>
                        <Apresentation movement={movement}/>
                        <Projects movement={movement}></Projects>
                    </div>
                </div>
                <Ola trueMoviment={movement}/>
            </div>
        </section>
    )
}

