import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Photo from "../../assets/images/photo.png";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="imgBx">
            <img src={Photo} alt="" className="photo" />
        </div>
        <p>Guilherme Barbosa</p>
      </div>
    </>
  );
}
