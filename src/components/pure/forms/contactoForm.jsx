import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactoForm = ({ add }) => {
	const nombreRef = useRef('');
	const apellidoRef = useRef('');
	const emailRef = useRef('');

	const addContact = (e) => {
		e.preventDefault();
		const contact = new Contacto(
			nombreRef.current.value,
			apellidoRef.current.value,
			emailRef.current.value,
			true,
		);
		nombreRef.current.value = '';
		apellidoRef.current.value = '';
		emailRef.current.value = '';
		add(contact);
	};

	return (
		<form onSubmit={ addContact } className='col-sm-12 col-md-6'>
			<fieldset className='fieldset'>
				<legend className='fieldset__legend'>Añadir Nuevo Contacto</legend>
				<div className='mb-3'>
					<label htmlFor='txtNombre' className='form-label'>Nombres: </label>
					<input id='txtNombre' className='form-control' placeholder='Nombre' type='text' ref={ nombreRef } required />
				</div>
				<div className='mb-3'>
					<label htmlFor='txtApellidos' className='form-label'>Apellidos: </label>
					<input id='txtApellidos' className='form-control' placeholder='Apellidos' type='text' ref={ apellidoRef } required />
				</div>
				<div className='mb-3'>
					<label htmlFor='txtEmail' className='form-label'>Email: </label>
					<input id='txtEmail' className='form-control' placeholder='Email' type='text' ref={ emailRef } required />
				</div>
				<div className='d-flex justify-content-center'>
					<button className='btn btn-success'>
						<span>Añadir Contacto</span> <FontAwesomeIcon icon="fa-solid fa-user-plus" />
					</button>
				</div>
			</fieldset>
		</form>
	);
};

ContactoForm.propTypes = {
	add: PropTypes.func.isRequired,
};

export default ContactoForm;
