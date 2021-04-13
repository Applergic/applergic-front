import React, { useState } from 'react';
import './allergyButton.scss';

export function AllergyButton(props) {

    //vble estado para ver si los botones de alergias estan o no seleccionados
    const [selected, setSelected] = useState(false);

    //funcion para introducir mas tarde en el array alergias seleccionadas o no
    function selectAllergy() {

        props.onClick(!selected);
        setSelected(!selected);
    }

    //condicional terciario para establecer clases si el boton esta o no seleccionado
    const buttonClass = selected ? 'buttonSelected' : 'buttonNoSelected';

    return (

        //boton con clase segun el condicional y evento on click para seleccionar o no alergias
        //PROPS CHILDREN => Permite crear un componente generico que podra ser modificado por el padre cuando usamos este componente en el
        
        <div className="configAllergy__allergyButtons--one">
            <button className={buttonClass} onClick={selectAllergy}>{props.children}</button>
        </div>
        
    )

}