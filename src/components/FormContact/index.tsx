import React from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_810kcmm",
        "template_6998imi",
        e.currentTarget,
        "uA0o6y8D4ZXWRR-U3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  }
  return (
    <div className="contact-container">
      <h1 className="container-title">ENTRE EM CONTATO</h1>
      <div className="contact-content">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 
                    0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
          />
        </svg>
        <div className="contact-wrapper">
          <h1 className="title-contact">
            Quer trabalhar junto e criar produtos incríveis comigo?
          </h1>
          <form onSubmit={sendEmail} className="form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Escreva seu email aqui"
              className="email"
            />
            <input type="submit" value="Enviar" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
