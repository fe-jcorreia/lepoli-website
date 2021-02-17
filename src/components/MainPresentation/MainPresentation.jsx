import React from "react";
import logoMain from "../../assets/img/logo-main_page.svg";
import "./styles.css";

function MainPresentation() {
  return (
    <>
      <section className="main-presentation">
        <div className="main-presentation_card">
          <h1>Somos a Liga de Empreendedorismo da POLI</h1>
          <p>
            Temos como missão <strong>inspirar, conectar e capacitar</strong>{" "}
            futuros empreendedores e empreendedoras politécnicos.
          </p>
          <p>Venha fazer parte! </p>
        </div>
        <img className="main-presentation_image" src={logoMain} />
      </section>
      <section>
        <div className="divisor1" />
        <div className="divisor2" />
        <div className="divisor3" />
      </section>
    </>
  );
}

export default MainPresentation;
