import React from "react";
import Footer from "../../core/components/Footer/Footer";
import Navbar from "../../core/components/Navbar/Navbar";
import logoApplergic from "../../assets/img/AppHome/logoApplergicFinal.png";
import { NavLink, Link } from "react-router-dom";
import { BiBarcode, BiSearch, BiBuoy } from "react-icons/bi";
import "./AppHome.scss";

export default function AppHome() {
  return (
    <div className="divTotalHome">
      {" "}
      <Navbar />{" "}
      <div className="logoApplergic">
        <img src={logoApplergic}></img>
      </div>{" "}
      <div>
        {" "}
        <figure>
          {" "}
          <button className="generalButton2">
            <NavLink exact activeClassName="active" to="/scan">
              <BiBarcode />
              <span></span>Escaner
            </NavLink>
          </button>{" "}
          <figcaption className="button__text">
            Escanea un nuevo producto
          </figcaption>{" "}
        </figure>{" "}
      </div>{" "}
      <div>
        {" "}
        <figure>
          {" "}
          <button className="generalButton2 generalButton2__buscar">
            <NavLink exact activeClassName="active" to="/search">
              <BiBarcode />
              <span></span>Buscar
            </NavLink>
          </button>{" "}
          <figcaption className="button__text">
            ¿Busca un comercio o restaurant para ti?
          </figcaption>{" "}
        </figure>{" "}
      </div>{" "}
      <div>
        {" "}
        <figure>
          {" "}
          <button className="generalButton2 generalButton2__sos">
            <NavLink exact activeClassName="active" to="/sos">
              <BiBuoy />
              <span></span>S.O.S
            </NavLink>
          </button>{" "}
          <figcaption className="button__text">
            ¿Necesitas ayuda urgente? contactamos con emergencias.
          </figcaption>{" "}
        </figure>{" "}
      </div>{" "}
      <div>
        {" "}
        <Footer />{" "}
      </div>{" "}
    </div>
  );
}
