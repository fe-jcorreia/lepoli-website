import React from "react";
import "./styles.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <h1 className="footer-content_title">SOBRE NÓS</h1>
        <p className="footer-content_description">
          A Liga de Empreendedorismo da POLI foi fundada em dezembro de 2019.
          Nossa principal missão é sermos vetores de criação de um ecossistema
          empreendedor dentro da POLI, assim como, das futuras grandes inovações
          brasileiras.
        </p>
      </div>

      <div className="footer-content">
        <h1 className="footer-content_title">MENU</h1>
        <a className="footer-content_description" href="#">
          Quem somos
        </a>
        <br></br> <br></br>
        <a className="footer-content_description" href="#">
          Projetos
        </a>
        <br></br> <br></br>
        <a className="footer-content_description" href="#">
          Eventos
        </a>
        <br></br> <br></br>
        <a className="footer-content_description" href="#">
          Blog
        </a>
        <br></br> <br></br>
        <a className="footer-content_description" href="#">
          Contato
        </a>
      </div>

      <div className="footer-content">
        <h1 className="footer-content_title">LOCALIZAÇÃO</h1>
        <div className="footer-content_description">
          <p>Escola Politécnica da USP</p>
          <br></br>
          <p>Av. Prof. Luciano Gualberto, 380 - Butantã, São Paulo, SP</p>
        </div>
      </div>

      <div className="footer-content">
        <h1 className="footer-content_title">CONTATO</h1>
        <p className="footer-content_description">lepoliusp@gmail.com</p>
      </div>
    </section>
  );
}

export default Footer;
