import React, { useState } from 'react';
import ContactoComponent from '../pure/contacto';
import { Contacto } from '../../models/contacto.class';
import ContactoForm from '../pure/forms/contactoForm';

const ContactoListaComponente = () => {

	const defaultContacto = new Contacto('Juan', 'Perez', 'perez@correo.com', true);

	const [lstContacto, setLstContacto] = useState([defaultContacto]);

	function addContact(contact) {
		const tmpLstContact = [...lstContacto, contact];
		setLstContacto(tmpLstContact);
	}

	function removeContact(contact) {
		const tmpLstContact = [...lstContacto];
		const index = tmpLstContact.indexOf(contact);
		tmpLstContact.splice(index, 1);
		setLstContacto(tmpLstContact);
	}

	function updateContact(contact) {
		const tmpLstContact = [...lstContacto];
		const index = tmpLstContact.indexOf(contact);
		tmpLstContact[index].Conectado = !tmpLstContact[index].Conectado;
		setLstContacto(tmpLstContact);
	}

	return (
		<div className='row'>
			<ContactoForm add={ addContact }></ContactoForm>
			<div className='col-sm-12 col-md-6'>
				<fieldset className='fieldset'>
					<legend className='fieldset__legend'>Lista de contactos</legend>
					{
						lstContacto.map((contacto, index) => {
							return (<ContactoComponent key={ index } contacto={ contacto } update={ updateContact } remove={ removeContact }></ContactoComponent>);
						})
					}
				</fieldset>
			</div>
		</div>
	);
};

export default ContactoListaComponente;
