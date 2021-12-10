import React from "react";
import './Apresentation.css'

// eslint-disable-next-line
export default props => {
    return (
        <div className={props.movement ? "letters--about--movement" : "letters--about"}>
            <p className={"letters--white"}>Me chamo
                <span style={{ color: '#212020'}}> Guilherme Barbosa Ferreira </span> 
                e este é o meu portfólio, onde poderá
            </p>
            <p className={"letters--white"}>encontrar alguns de meus projetos.</p>
        </div>
    )
}