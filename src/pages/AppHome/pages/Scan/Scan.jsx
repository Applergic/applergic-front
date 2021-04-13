import React from 'react'
import { Link } from 'react-router-dom';
import './Scan.scss';
// import Button from '../../../../core/components/Button/Button'
import ScanCode from './ScanCode/ScanCode';

export default function Scan() {
    
    return (
        <div className="p-5">
           <Link to = { '/home/' }><button className="button_X">X</button></Link>
            <h3>Escaneando...</h3>
            <p>Tan solo tienes que centrar el código de barras del producto en el recuadro</p>
            <ScanCode></ScanCode>
            <div className="d-flex justify-content-around">
                <div className="pt-4">
                    <center>
            <button className="button button__barCode button__active"></button><p className="text">Codigo de barras</p></center></div>
            <div className="pt-4">
            <Link to = { '/scanQr' } ><button className="button button__qr"></button><p className="text">Codigo Qr</p></Link></div>
            </div>
        </div>
    )
}
