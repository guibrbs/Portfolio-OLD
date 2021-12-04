import React from "react";
import { motion } from "framer-motion"
import './Ola.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(33, 32, 32, 0)",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(33, 32, 32, 1)",
        }
    };

    return (
        <div className={"letters--apresentation"} style={props.trueMoviment ? {pointerEvents: "none"} : {pointerEvents: "painted"}}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                className="item"
            >
                <motion.path
                    d="M87.46,114.04c-4.52-7.78-6.78-16.47-6.78-26.07c0-9.51,2.28-18.17,6.85-26c4.57-7.83,10.79-13.98,18.66-18.45
                        c7.88-4.47,16.66-6.71,26.35-6.71c9.6,0,18.36,2.26,26.28,6.78c7.92,4.52,14.17,10.67,18.73,18.45c4.57,7.78,6.85,16.42,6.85,25.93
                        c0,9.51-2.26,18.15-6.78,25.93c-4.52,7.78-10.74,13.93-18.66,18.45c-7.92,4.52-16.73,6.78-26.42,6.78c-9.69,0-18.5-2.24-26.42-6.71
                        C98.2,127.95,91.98,121.82,87.46,114.04z M153.37,100.13c2.05-3.63,3.08-7.69,3.08-12.16s-1.05-8.53-3.15-12.16
                        s-4.96-6.48-8.6-8.53s-7.69-3.08-12.16-3.08c-4.57,0-8.67,1-12.3,3.01c-3.63,2-6.48,4.82-8.53,8.46c-2.05,3.63-3.08,7.73-3.08,12.3
                        c0,4.57,1.03,8.64,3.08,12.23c2.05,3.59,4.89,6.41,8.53,8.46c3.63,2.05,7.73,3.08,12.3,3.08c4.57,0,8.67-1.02,12.3-3.08
                        S151.32,103.77,153.37,100.13z"
                    variants={icon}
                    initial= {props.trueMoviment ? "visible" : "hidden"}
                    animate={props.trueMoviment ? "hidden" : "visible"}
                    transition={props.trueMoviment ? {
                        default: { duration: 1.5, ease: "easeInOut" },
                        fill: { duration: 1, easeeasInOut: [1, 0, 0.8, 1] }
                    } : {
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { delay: 1.4, duration: 1, easeeasInOut: [1, 0, 0.8, 1] },
                    }}
                />
                <motion.path
                    d="M84.18,251.65V153.8h27.96v70.73h30.75v27.12H84.18z"
                    variants={icon}
                    initial = {props.trueMoviment ? "visible" : "hidden"}
                    animate= {props.trueMoviment ? "hidden" : "visible"}
                    transition={props.trueMoviment ? {
                        default: { duration: 1.5, ease: "easeInOut" },
                        fill: { duration: 1, easeeasInOut: [1, 0, 0.8, 1] }
                    } : {
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { delay: 1.4, duration: 1, easeeasInOut: [1, 0, 0.8, 1] }
                    }}
                />
                <motion.path
                    d="M144.85,251.65l48.65-100.09h1.96l48.65,100.09H213.2l-2.94-7.27h-31.59l-2.94,7.27H144.85z M178.39,146.81
                    l11.18-20.97h29.35v1.4l-16.21,19.57H178.39z M187.34,222.71h14.26l-7.13-17.61L187.34,222.71z"
                    variants={icon}
                    initial={props.trueMoviment ? "visible" : "hidden"}
                    animate={props.trueMoviment ? "hidden" : "visible"}
                    transition={props.trueMoviment ? {
                        default: { duration: 1.5, ease: "easeInOut" },
                        fill: { duration: 1, easeeasInOut: [1, 0, 0.8, 1] }
                    } : {
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { delay: 1.4, duration: 1, easeeasInOut: [1, 0, 0.8, 1] }
                    }}
                 />
            </motion.svg>
        </div>
    );
}
