import React from "react";
import BgBlueFire from "../../assets/img/logo-main_page.svg";
import "./styles.css";

function SelectionProcess() {
  return (
    <section className="selection-process">
      <h1>Inscreva-se no nosso processo seletivo 2021!</h1>
      <form className="form-signin">
        <div className="form-signin_inputs">
          <input
            className="form-signin_input"
            type="text"
            placeholder="Digite seu nome completo"
          />
          <input
            className="form-signin_input"
            type="text"
            placeholder="Digite seu celular com DDD"
          />
        </div>
        <button className="form-signin_submit" type="button">
          Prosseguir
        </button>
      </form>
    </section>
  );
}

export default SelectionProcess;
