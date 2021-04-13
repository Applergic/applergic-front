import React from 'react';
import { Link } from 'react-router-dom';
import ok from '../../../assets/img/Login-Register/ok.png';
import './endRegister.scss';

export default function EndRegister() {
    return (
        <div>

            <div className="configAllergy__step">
                <span><Link to="/config-allergy"> {'<'} Volver</Link></span>
                <p>4 de 4</p>
            </div>

            <center>
            <div>
                <figure>
                    <img src={ok} alt="okey"></img>
                    <figcaption>Hemos terminado, ya puedes escanear tu primer producto.</figcaption>
                </figure>
            </div>

            <div>
                <button className="endButton"><Link to="/scan">Escanea un producto</Link></button>
            </div>
            </center>
        </div>
    )
}
