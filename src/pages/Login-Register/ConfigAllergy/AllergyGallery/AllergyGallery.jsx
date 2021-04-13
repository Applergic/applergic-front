import React from 'react';
import { AllergyButton } from '../AllergyButton/AllergyButton';

export function AllergyGallery(props) {

    function selectAllergy(item, selected) {

        props.onClick(item, selected);
    }

    /* Utilizamos map para pintar un componente allergyButton en cada vuelta; ademas le pasamos otro evento onclick (a parte del que ya tenia el componente boton allergy en si). Estos eventos sirven para pasar la info al componente padre y luego introducir las alergias pulsadas en un array nuevo */

    return (

        <div className="configAllergy__allergyButtons">

            {props.allergyList.map((item, i) =>

            <AllergyButton key={i} onClick={(selected) => selectAllergy(item, selected)}>{item.name}</AllergyButton>)

            }
        </div>
    )
}