import React from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../../shared/consts/api.const";
import Button from "../../../core/components/Button/Button";
import "../ConfigAllergy/AllergyButton/allergyButton.scss";
import "./confirmAllergy.scss";

export default function ConfirmAllergy() {
  //recogemos la info de los localStorage y la introducimos en vbles
  const userAllergies = JSON.parse(localStorage.getItem("userAllergies"));
  console.log(JSON.stringify(userAllergies));

  const profileData = JSON.parse(localStorage.getItem("profileData"));
  console.log(profileData);

  const contactData = JSON.parse(localStorage.getItem("contactData"));
  console.log(contactData);

  //asi tendriamos un array con dos objetos (pefil y contacto), y un array de objetos (alergias del usuario) [ {}, {}, [{}, {}, {}] ]
  const allData = {
    ...profileData,
    ...contactData,
    allergies: userAllergies.map((allergy) => allergy._id),
  };
  console.log(allData);

  const history = useHistory();

  function confirmAllergies(allData) {
    console.log(allData);
    API.post("/user/register", allData).then((res) => {
      console.log("OK");
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/end-register");
    });
  }

  return (
    <div className="confirmAllergy">
      <div className="confirmAllergy__text">
        <h2>Confirma tu selección.</h2>
        <p>
          A continuación te resumimos los <br /> alimentos registrados como
          peligrosos para ti.
        </p>
      </div>
      
      <div className="confirmAllergy__userselection">
        {userAllergies.map((item, i) => (
          <button className="buttonSelected" key={i}>
            {item.name}
          </button>
        ))}

        <button
          className="buttonNoSelected"
          onClick={() => {
            history.push("/config-allergy");
          }}
        >
          Añadir nuevo
        </button>
      </div>
          <center>
      <div>
        <Button
          name="CONFIRMAR"
          onClick={() => confirmAllergies(allData)}
        ></Button>
      </div>
      </center>
    </div>
  );
}
