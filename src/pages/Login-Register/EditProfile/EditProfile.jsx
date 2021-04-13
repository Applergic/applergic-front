import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import camera from "../../../assets/img/Login-Register/cMaraAzul.png";
import "./editProfile.scss";

export default function EditProfile() {
  const history = useHistory();
  const [hayFoto, setHayFoto] = useState(false);
  const [profileImg, setProfileImg] = useState(camera);

  const [profileTitle, setProfileTitle] = useState("Subir Foto");

  const { register, handleSubmit, errors, reset } = useForm();

  function imageHandler(event) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setHayFoto(true);
        setProfileImg(reader.result);
        setProfileTitle("");
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  function onSubmit(profileData) {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    console.log("profiledata ok");
    history.push("/edit-ct");
  }

  return (
    <div className="register">
      <div className="register__step">
        <span>
          <Link to="/login"> {"<"} Volver</Link>
        </span>
        <p>1 de 4</p>
      </div>
      <center>
        <div>
          <h2>Dinos quien eres.</h2>
        </div>
      </center>
      <div className="register__form">
        {hayFoto ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="photo2">
              <img src={profileImg} alt="camera" className="imageProfile" />
            </div>

            <div className="register__input">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  ref={register({ required: true })}
                />
              </label>
              {errors.name && (
                <span className="register__error">Campo obligatorio</span>
              )}
            </div>

            <div className="register__input">
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
                <span className="register__error">Campo obligatorio</span>
              )}
            </div>

            <div className="register__input">
              <label htmlFor="mobile">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Móvil"
                  ref={register({ required: true })}
                />
              </label>
              {errors.mobile && (
                <span className="register__error">Campo obligatorio</span>
              )}
            </div>

            <div className="register__input">
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
                <span className="register__error">
                  Campo obligatorio. La contraseña debe contener al menos una
                  mayúscula, minúscula y un número.
                </span>
              )}
            </div>

            <div className="register__input">
              <input
                className="register__input--button"
                type="submit"
                value="Guardar perfil"
              ></input>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="photo">
              <label htmlFor="profilePhoto" className="photo__upload">
                <figure>
                  <img src={profileImg} alt="camera" />
                  <figcaption>{profileTitle}</figcaption>
                  <input
                    id="profilePhoto"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="profilePhoto"
                    onChange={imageHandler}
                  />
                </figure>
              </label>
            </div>

            <div className="register__input">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  ref={register({ required: true })}
                />
              </label>
              {errors.name && (
                <span className="register__error">Campo obligatorio</span>
              )}
            </div>

            <div className="register__input">
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
                <span className="register__error">Campo obligatorio</span>
              )}
            </div>

            <div className="register__input">
              <label htmlFor="mobile">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Móvil"
                  ref={register({ required: true })}
                />
              </label>
              {errors.mobile && (
                <span className="register__error">Campo obligatorio</span>
              )}
            </div>

            <div className="register__input">
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
                <span className="register__error">
                  Campo obligatorio. La contraseña debe contener al menos una
                  mayúscula, minúscula y un número.
                </span>
              )}
            </div>

            <div className="register__input">
              <input
                className="register__input--button"
                type="submit"
                value="Guardar perfil"
              ></input>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
