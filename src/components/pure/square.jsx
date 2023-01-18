import React, { useState } from 'react';

const Square = () => {
    const [keepChanging, setKeepChanging] = useState(true);

    const [style, setStyle] = useState(
        {
            margin: 'auto',
            width: 255,
            height: 255,
            backgroundColor: `rgb(${ Math.floor(Math.random() * 255) },${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) })`
        }
    );

    const changeColor = () => {
        if (keepChanging) {
            setStyle({
                margin: 'auto',
                width: 255,
                height: 255,
                backgroundColor: `rgb(${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) })`
            });
        }
    };

    const keepColor = () => {
        setKeepChanging(!keepChanging);
    };

    return (
        <div>
            <div style={ style } onMouseMove={ changeColor } onDoubleClick={ keepColor }>
            </div>
        </div>
    );
};

export default Square;
