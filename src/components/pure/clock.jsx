import React, { useState, useEffect } from "react";

const Clock = () => {
	const initialData = {
		fecha: new Date(),
		edad: 26,
		nombre: "Ismael",
		apellidos: "Rosas",
	};

    const [data, setData] = useState(initialData);

    useEffect(() => {
        setInterval(() => {
            actualizarData();
        }, 1000);
    });

    const actualizarData = () => {
        setData(
            {
                nombre: initialData.nombre,
                apellidos: initialData.apellidos,
                fecha: new Date(),
                edad: initialData.edad,
            }
        )
    };

	return (
		<div>
			<h2>Hora Actual: { data.fecha.toLocaleTimeString() }</h2>
			<h3>
				{ data.nombre } { data.apellidos }
			</h3>
			<h1>Edad: { data.edad }</h1>
		</div>
	);
};

export default Clock;
