import React from "react";
import logoBTC from "../../assets/img/logoBTC.svg";
import logoCodecraft from "../../assets/img/logoCodecraft.svg";
import logoFundacaoEstudar from "../../assets/img/logoFundacaoEstudar.svg";
import logoTalent from "../../assets/img/logoTalent.svg";
import "./styles.css";

function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors-header">
        <h1 className="sponsors-header_title">Nossos apoiadores</h1>
        <p className="sponsors-header_description">
          Conheça as entidades que compraram nosso sonho
        </p>
      </div>
      <div className="sponsors-logos">
        <img className="logo" src={logoBTC} />
        <img className="logo" src={logoCodecraft} />
        <img className="logo" src={logoFundacaoEstudar} />
        <img className="logo" src={logoTalent} />
      </div>
    </section>
  );
}

export default Sponsors;
