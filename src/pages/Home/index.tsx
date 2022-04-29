import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ShowArea from "../../components/ShowArea";
import Projects from "../../components/Projects";
import FormContact from "../../components/FormContact";
import Footer from "../../components/Footer";
import './Home.css'

export default function Home(){
    
    return(
        <>
            <Header />
            <ShowArea />
            <Projects />
            <FormContact />
            <Footer />
        </>
    )
}