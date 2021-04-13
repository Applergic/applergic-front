import React from "react";
import { Link } from 'react-router-dom';
import './Footer.scss';
import red from '../../../assets/img/AppHome/red.png'; 
import home from '../../../assets/img/AppHome/homeAzul.png';
import favorito from '../../../assets/img/AppHome/favorito.png';
import diario from '../../../assets/img/AppHome/diario.png';

 
export default function Footer() {
    return (
<div>
        <Link to = { '/login/' }>
        <div className = "socialmedia" >
        <img className="home" src={home} alt=""></img> 
        </div>
        </Link>
        <Link to = { '/on-boarding/' }>
        <div className="socialmedia">
        <img className="favorito" src={favorito} alt=""></img>
            </div>
            </Link>
            <Link to = { '/on-boarding/' }>
            <div className="socialmedia"><img className="diario" src={diario} alt=""></img>
            </div>
            </Link>
            <Link to = { '/on-boarding/' }>
            <div className="socialmedia"><img className="red" src={red} alt=""></img>
            </div>
            </Link>

        </div>
);
}