import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AllergyGallery } from './AllergyGallery/AllergyGallery';
import { API } from '../../../shared/consts/api.const';
import { AllergyButton } from './AllergyButton/AllergyButton';
import Button from '../../../core/components/Button/Button';
import './configAllergy.scss';


export default function ConfigAllergy(props) {

    //useHistory para rediriguir a otras paginas
    const history = useHistory();

    //vble de estado para guardar las alergias seleccionadas por el usuario
    const [userAllergies, setUserAllergies] = useState([]);

    //vable de estado para guardar las alergias llamadas desde la API
    const [allergies, setAllergies] = useState([]);

    //Llamada al back para pintar las alergias (bbdd)
    const getAllergies = () => {

        API.get('/allergies').then((res) => {
            console.log(res);
            setAllergies(res.data);
        });
    }

    //useEffect para llamar a la API una sola vez
    useEffect(getAllergies, []);

    //funcion para hacer scroll en la pantalla segun la letra pulsada
    function scrollTo(letter) {
        document.getElementById(letter).scrollIntoView();
    }

    //funcion para guardar las alergias seleccionadas por el usuario
    function saveUserAllergy(item, selected) {

        if (selected) {

            //si selected es true guardaremos las alergias (item) en la vble de estado userAllergies
            setUserAllergies([...userAllergies, item]);

        } else {

            //si deseleccionamos la alergia, hacemos una copia del array anterior y eliminamos con splice el item deseleccionado (con su index)
            const index = userAllergies.indexOf(item);
            const newUserAllergies = userAllergies;
            newUserAllergies.splice(index, 1);
            setUserAllergies(newUserAllergies);
        }
    }

    //funcion para pasar las alergias seleccionadas a la siguiente pagina (localStorage + useHistory) 
    function goToConfirm() {

        localStorage.setItem('userAllergies', JSON.stringify(userAllergies));
        history.push('/confirm-allergy');
    }

    return (
        <div className="configAllergy">

            <div className="configAllergy__step">
                <span><Link to="/edit-ct"> {'<'} Volver</Link></span>
                <p>3 de 4</p>
            </div>
            <center>
            <div className="configAllergy__text">
                <h2>Ahora selecciona tus <br /> alergias e intolerancias.</h2>
                <p>Los elementos marcados serán <br /> identificados en tus busquedas como <br /> peligrosos para ti.</p>
            </div>
           

            <div className="configAllergy__options">

                {/* Componente allergyButton con las letras de cada bloque de alergias */}

                {/* object keys devuelve las propiedades de allergies (letter y name) */}
                {Object.keys(allergies).map((letter, i) => {

                    {/* Hacer un boton por cada item (letra) del array y pasar la funcion scrollTo en un evento onClick */ }
                    return (

                        <div className="configAllergy__selector col-3">
                            <AllergyButton key={i} onClick={() => scrollTo(letter)}>{letter}</AllergyButton>
                        </div>
                    )

                })}

            </div>

            {/* Componente allergyGallery con los bloque de alergias */}
            <div className="configAllergy__allergies">

                {/* Hacer otra vez object keys */}
                {Object.keys(allergies).map((letter) => {

                    {/* A cada div de bloque de alergias le ponemos una key e id de letter para que funcione el scroll; a la allergy gallery le pasamos el array de alergias para pintar un boton con su nombre en cada vuelta */ }
                    return (

                        <div key={letter} id={letter} className="configAllergy__allergyBlock">

                            <div className="configAllergy__allergyLetter">
                                <AllergyButton>{letter}</AllergyButton>
                            </div>

                            <AllergyGallery allergyList={allergies[letter]} onClick={(item, selected) => saveUserAllergy(item, selected)} />

                        </div>
                    )

                })}

                {/* Boton para enviar info y pasar de pagina */}
                <div>
                    <Button name='Guardar' onClick={goToConfirm} ></Button>
                </div>

            </div>
            </center>
        </div>
    )
}