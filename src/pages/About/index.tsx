import React from "react";
import Header from "../../components/Header";
import "./styles.css";
import Photo from "../../assets/images/photo.png";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-grid">
          <div className="about-wrapper">
            <div className="imgBx">
                <img src={Photo} alt="" className="photo" />
            </div>
            <h2>Guilherme Barbosa</h2>
            <div>
            <a href="https://github.com/guibrbs" target={"_blank"} rel={"noreferrer noopener"}><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/guibrbs/" target={"_blank"} rel={"noreferrer noopener"}><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
