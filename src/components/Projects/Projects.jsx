import React from "react";
import doubleArrow from "../../assets/img/doublearrow-icon.svg";
import rocketIcon from "../../assets/img/rocket-icon.svg";
import teamIcon from "../../assets/img/team-icon.svg";
import calendarIcon from "../../assets/img/calendar-icon.svg";
import "./styles.css";

function Projects() {
  return (
    <section className="projects">
      <div className="projects-head">
        <h1 className="projects-title_head">Vá além da POLI!</h1>
        <p className="projects-description_head">Conheça nossos projetos</p>
        <img src={doubleArrow} />
      </div>

      <div className="projects-cards">
        
        <div className="card-and-icon">
          <div className="project-card">
            <h2 className="project-card_title">Garagem de Startups</h2>
            <p className="project-card_description">
              Criação de um projeto real utilizando os famosos métodos de
              desenvolvimento de produtos em startups.
            </p>
          </div>
          <img src={rocketIcon} />
        </div>

        <div className="card-and-icon">
          <div className="project-card">
            <h2 className="project-card_title">Capacitação Interna</h2>
            <p className="project-card_description">
              Trilhas de capacitação e evolução pessoal e técnica dos nossos
              membros, baseadas nos três perfis mais comuns de fundadores.
            </p>
          </div>
          <img src={teamIcon} />
        </div>

        <div className="card-and-icon">
          <div className="project-card">
            <h2 className="project-card_title">Eventos</h2>
            <p className="project-card_description">
              Fontes de inspiração e motivação para membros e para os
              politécnicos. Apresentamos um caminho alternativo para a carreira
              tradicional
            </p>
          </div>
          <img src={calendarIcon} />
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
