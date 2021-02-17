import React from "react";
import styled from "styled-components";
import logoBackgroundBlack from "../../assets/img/logo-lepoli-navbar.svg";
import "./styles.css";

const NavBackground = styled.nav``;

const NavButton = styled.a``;

function Navbar() {
  return (
    <section className="nav">
      <img src={logoBackgroundBlack} />
      <nav className="nav-links-list">
        <a className="nav-button" href="#">
          Quem somos
        </a>
        <a className="nav-button" href="#">
          Projetos
        </a>
        <a className="nav-button" href="#">
          Eventos
        </a>
        <a className="nav-button" href="#">
          Blog
        </a>
        <a className="nav-button" href="#">
          Contato
        </a>
      </nav>
    </section>
  );
}

export default Navbar;
