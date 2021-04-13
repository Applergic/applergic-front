import React from 'react'
import { Link } from 'react-router-dom';
import '../Scan.scss';
import Test from './QrClass';
import { API } from '../../../../../shared/consts/api.const';

export default function Scan() {

    // const sendBarcode = (code) =>{
    //     console.log(code);
    //         API.post('/user/register', code).then(res => {
    //         console.log('Barcode Ok');
    //         // history.push('/end-register');
    //     });
    //   }

    return (
        <div>
           <Link to = { '/home/' }><button className="button_X">X</button></Link>
            <div className="p-5">
            <h3>Escaneando...</h3>
            <p>Tan solo tienes que centrar el código de barras del producto en el recuadro</p>
            {/* <img src= {escanerQr}></img> */}
            <Test></Test>
            {/* <div>
                
            <Link to = { '/scan' } ><button className="button button__barCode"></button><p>Codigo de barras</p></Link>
            <button className="button button__qr button__active"></button><p>Codigo Qr</p>
            </div> */}
            <div className="d-flex justify-content-around">
                <div className="pt-4">
                    <center>
            <Link to = { '/scan' } ><button className="button button__barCode"></button><p className="text">Codigo de barras</p></Link></center></div>
            <div className="pt-4">
            <button className="button button__qr button__active"></button><p className="text">Codigo Qr</p></div>
            </div>
           </div>
        </div>
    )
}