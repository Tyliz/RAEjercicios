import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactoComponent = ({ contacto, update, remove }) => {

	const estadoContacto = () => {
		let icon = null;
		if (contacto.Conectado) {
			icon = (
				<div className='contact__icon' onClick={ () => update(contacto) }>
					<FontAwesomeIcon icon='fa-solid fa-user' className='icono-conectado'/> <span>En Línea</span>
				</div>
			);
		} else {
			icon = (
				<div className='contact__icon contact__icon--desconectado' onClick={ () => update(contacto) }>
					<FontAwesomeIcon icon='fa-regular fa-user' className='icono-desconectado'/> <span>Desconectado</span>
				</div>
			);
		}
		return icon;
	}

	return (
		<div className='col-sm-12 contact'>
			{ estadoContacto() }
			<div className='contact__info'>
				<span className='contact__label'>
					<b>Nombre:</b> { contacto.Nombre } { contacto.Apellido }
				</span>
				<span className='contact__label'>
					<b>Email:</b> { contacto.Email }
				</span>
			</div>
			<div className='contact__action'>
				<button onClick={ () => remove(contacto) } className='btn btn-danger'>
					<FontAwesomeIcon icon='fa-solid fa-trash-can' />
				</button>
			</div>
		</div>
	);
};


ContactoComponent.propTypes = {
	contacto: PropTypes.instanceOf(Contacto).isRequired,
	update: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};


export default ContactoComponent;
