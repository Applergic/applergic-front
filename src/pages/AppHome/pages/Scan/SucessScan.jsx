import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../core/components/Button/Button";
import "./SucessScan.scss";
export default function SucessScan() {
  return (
    <div className="sucessScan">
      <h3>Tu producto se ha escaneado con exito!</h3>
      <div className="buttonSucess">
        <Link to="/diary">
          <Button name="Ir a mi diario"></Button>
        </Link>
      </div>

      <div className="buttonSucess">
        <Link to="/home">
          <Button name="Home"></Button>
        </Link>
      </div>
    </div>
  );
}
