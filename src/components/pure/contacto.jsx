import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({ contacto }) => {

    const [conectado, setConectado] = useState(contacto.Conectado);

    const changeState = () => {
        contacto.Conectado = !contacto.Conectado;
        setConectado(!conectado);
    }

    return (
        <div>
            <h1>Nombre: { contacto.Nombre } { contacto.Apellido }</h1>
            <h2>Email: { contacto.Email }</h2>
            <h4>{ contacto.Conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }</h4>
            <button onClick={ changeState }>
                Cambiar Estado
            </button>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;
