import React from 'react';
import ContactoComponent from '../pure/contacto';
import { Contacto } from '../../models/contacto.class';


const ContactoListaComponente = () => {

    const defaultContacto = new Contacto('Juan', 'Perez', 'perez@correo.com', true);

    return (
        <div>
            <ContactoComponent contacto={ defaultContacto }></ContactoComponent>
        </div>
    );
};

export default ContactoListaComponente;
