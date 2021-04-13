import React, { useState } from 'react'
import logo from '../../../assets/img/Start/logo.png'
import rectangle from '../../../assets/img/Start/rectangle.png'
import scan from '../../../assets/img/Start/scan2.png'
import ambulancia from '../../../assets/img/Start/ambulancia.png'
import traduccion from '../../../assets/img/Start/traduccioN.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFlip } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/components/effect-fade/effect-fade.scss';
import './OnBoarding.scss';

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([EffectFlip]);

export default function OnBoarding() {

    const slides = [
        {photo : scan, text: "¡Bienvenido a Applergic! Escanea el código de barras de tu producto y Applergic te dirá si es apto para ti" }, 
        {photo: rectangle, text:"Lleva tu Diario de compras y actividades" }, 
        {photo : ambulancia, text: "En caso de emergencia nos pondremos en contacto con la persona que nos digas."},
        {photo : traduccion, text : "Viaja a donde quieras. Tendrás a tu disposición un traductor off-line y tu informe de alergias e intolerancias traducidos al idioma local"}
        ]

        const [indexState, setIndex]= useState(0);


    return (
        <div className="container">
            <center>
            <img className="pt-5" src={logo} alt="logo Applergic"></img>
            
        <Swiper effect="flip"
    
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={($event) => { 
                console.log('slide change'); 
                
                // next($event.activeIndex); 
                console.log('onsilde' +$event.activeIndex);
                // // console.log('onsilde' +$eve);
                // next()
                // next = (indexState) => {
                //     indexState = $event.slideNext();
                // }
                
                // return next();
                //    return setIndex($event.slideNext); 
                
            
            }}
            onSwiper={(swiper) => console.log(swiper)}

        >

        {slides.map((slide, i) => {
        return <SwiperSlide key={i} className="mb-3"><img className="pt-4" src={slide.photo}></img><p>{slide.text}</p></SwiperSlide>;
        })}

        <div className="swiper-pagination"></div>
            
        </Swiper>
        </center>
        <div className="d-flex justify-content-center">
            <Link to = { '/login' }><button  className="btn">Saltar Intro</button></Link>
        </div>
        
        </div>
    )
}