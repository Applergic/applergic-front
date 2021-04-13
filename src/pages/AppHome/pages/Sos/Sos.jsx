import React from "react";
import "./Sos.scss";
import Button from "../../../../core/components/Button/Button";
import { Link } from "react-router-dom";

export default function Sos() {
  const contactData = JSON.parse(localStorage.getItem("contactData"));
  console.log(contactData);
  return (
    <div className="sos">
      <h1>Tu contacto de emergencia es...</h1>
      <div className="spaceDiv">
        <p>
          <span className="blueText">Nombre: </span>
          {contactData.contactName}
        </p>
        <p>
          <span className="blueText">Email: </span> {contactData.contactEmail}
        </p>
        <p>
          <span className="blueText">Telefono: </span>{" "}
          {contactData.contacMobile}
        </p>
        <p>
          <span className="blueText">Aseguradora: </span>{" "}
          {contactData.insurance}
        </p>
      </div>
      <div>
        <button
          className="genericButton genericButton__sos genericButton--high"
          name="EMERGENCIA"
        >
          EMERGENCIA
        </button>
      </div>
      <div>
        <Link to="/home">
          <button className="genericButton " name="Volver">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}
