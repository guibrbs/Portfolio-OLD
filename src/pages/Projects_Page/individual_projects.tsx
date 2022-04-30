import React from "react";
import Header from "../../components/Header";
import "./styles.css";

export default function IndividualProjects() {
  type Individual_projects = object[];
  const individual_projects: Individual_projects = [
    {
      title: "INDICAA",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore delectus quis nulla quas dolorem fuga tempora numquam facere quod esse, voluptatum, libero laborum doloremque labore a dolor hic maiores, corrupti ratione enim quisquam atque officia iste porro! Iure fuga corporis illo distinctio architecto veniam, modi laboriosam, totam numquam aspernatur animi?",
      tech: <i className="devicon-react-original colored"></i>,
    },
  ];
  return (
    <>
      <Header />
      <div className="container-ip">
        {individual_projects.map((project: any) => {
          return (
            <>
              <div className="title-wrapper">
                <a href="/projetos" className="arrow-left">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </a>
                <h1 className="container-title bigger">{project.title}</h1>
              </div>
              <p className="content-ip">{project.description}</p>
              <h2 className="subtitle-ip">Tecnologias utilizadas</h2>
              {project.tech}
            </>
          );
        })}
      </div>
    </>
  );
}
