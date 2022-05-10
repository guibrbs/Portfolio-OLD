import React, { useEffect } from "react";
import Header from "../../components/Header";
import ShowArea from "../../components/ShowArea";
import Projects from "../../components/Projects";
import FormContact from "../../components/FormContact";
import Footer from "../../components/Footer";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <ShowArea />
      <div className="Home-area">
        <Projects />
      </div>
      <FormContact />
      <Footer />
    </>
  );
}