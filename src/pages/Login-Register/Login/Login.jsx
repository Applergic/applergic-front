import React, { useContext } from "react";
import food from "../../../assets/img/Login-Register/image.png";
import logo from "../../../assets/img/Start/logo.png";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { API } from "../../../shared/consts/api.const";
import { IsLoggedContext } from "../../../shared/contexts/IsLoggedContext";
import "./Login.scss";
import Button from "../../../core/components/Button/Button";

export default function Login() {
  const history = useHistory();

  const { register, handleSubmit, errors, reset } = useForm();

  const { setIsLogged } = useContext(IsLoggedContext);

  function onSubmit(formData) {
    API.post("login", formData).then((res) => {
      document.cookie = "token=" + res.data.token;
      document.cookie = "user=" + JSON.stringify(res.data.user);
      setIsLogged(true);
      history.push("/home");
      reset();
    });
  }

  return (
    <div className="login">
      <div className="login__hero">
        <div className="login__img">
          <img src={food}></img>
        </div>

        <div>
          <img className="login__logo" src={logo}></img>
        </div>
      </div>

      <div className="login__text">
        <h2>¡Bienvenido de nuevo!</h2>
        <p>
          Por favor, introduce tus datos <br /> para continuar.
        </p>
      </div>

      <div className="login__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login__form__input">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="Dirección email"
                ref={register({
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
            </label>
            {errors.email && (
              <span className="login__error">
                El campo email es obligatorio
              </span>
            )}
          </div>

          <div className="login__form__input">
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                ref={register({
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                })}
              />
            </label>
            {errors.password && (
              <span className="login__error">
                El campo contraseña es obligatorio
              </span>
            )}
            <br />
            <span className="login__form__input">
              <Link className="login__form__input--forget" to="/">
                ¿Olvidaste tu contraseña?
              </Link>
            </span>
          </div>

          <div className="login__form__input">
            <input
              className="login__form__input--button"
              type="submit"
              value="Entrar"
            ></input>
          </div>
        </form>
      </div>
      <center>
        <div className="login__footer">
          <span className="login__footer--new">¿Nuevo en Applergic?</span>
          <span className="login__footer">
            {" "}
            <Link className="login__footer--register" to="/edit-profile">
              Crea tu cuenta aquí
            </Link>{" "}
          </span>
          <span className="login__footer">
            {" "}
            <Link className="login__footer--later" to="/config-allergy">
              Me registraré en otro momento
            </Link>{" "}
          </span>
        </div>
      </center>
    </div>
  );
}
