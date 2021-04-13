import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { API } from '../../../shared/consts/api.const';
import Button from '../../../core/components/Button/Button';
import './editCt.scss';

export default function EditCt() {

    const history = useHistory();

    const { register, handleSubmit, errors, reset } = useForm();

    function onSubmit(contactData) {

        localStorage.setItem('contactData', JSON.stringify(contactData));
        console.log('contactdata ok');
        history.push('/config-allergy');

        // API.post('user/register', formData).then(res => {
        //     console.log('contacto registrado');
        //     history.push('/config-allergy');
        //     reset();
        // })
    }

    return (
        <div className="contact">

            <div className="contact__step">
                <span><Link to="/edit-profile"> {'<'} Volver</Link></span>
                <p>2 de 4</p>
            </div>

            <div className="contact__title">
                <h2>Vamos a añadir tu <br/> contacto en caso de <br/> emergencia.</h2>
                <p>Nos pondremos en contacto con tu persona de confianza y/o compañia de seguros en caso de emergencia.</p>
            </div>

            <div className="contact__form">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="contact__input">
                        <label htmlFor="contactName">
                            <input type="text" name="contactName" placeholder="Nombre completo de tu contacto" ref={register({required: true})}/>
                        </label>    
                        {errors.name && <span className="contact__error">Campo obligatorio</span> }
                    </div>

                    <div className="contact__input">
                        <label htmlFor="contactEmail">
                            <input type="email" name="contactEmail" placeholder="Dirección email" ref={register({required: true})}/>
                        </label>
                        {errors.email && <span className="contact__error">Campo obligatorio</span> }
                    </div>

                    <div className="contact__input">
                        <label htmlFor="contacMobile">
                            <input type="text" name="contacMobile" placeholder="Móvil" ref={register({required: true})}/>
                        </label>
                        {errors.mobile && <span className="contact__error">Campo obligatorio</span> }
                    </div>

                    <div className="contact__input">
                        <label htmlFor="insurance">
                            <input type="text" name="insurance" placeholder="Compañia de Seguros / Nº Póliza" ref={register({required: true})}/>
                        </label>
                        {errors.insurance && <span className="contact__error">Campo obligatorio</span> }
                    </div>

                    <div className="register__input">
                        <input className="register__input--button" type="submit" value="Guardar perfil"></input>
                        {/* <Button name='Guardar perfil' onClick={handleSubmit(onSubmit)}></Button> */}
                    </div>

                </form>

                <span className="contact__footer"> <Link to="/login">Me registraré en otro momento</Link> </span>

            </div>

        </div>
    )
}