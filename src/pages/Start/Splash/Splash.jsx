import React from "react";
import { Link } from "react-router-dom";
import "./splash.scss";
export default function Splash() {
  return (
    <div className="splash">
      <Link to={"/on-boarding/"}>
        <div className="splash">
          <h1 className="splash__title pt-4 p-0">Applergic</h1>
          <h3 className="splash__subtitle pb-5">Mi guia alimentaria</h3>
          <div className="splash__img"></div>
        </div>
      </Link>
    </div>
  );
}
