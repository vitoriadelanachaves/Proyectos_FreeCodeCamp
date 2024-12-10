import '../hojas-de-estilo/BotonClear.css';
import React from 'react';

function BotonClear(props) {
    return(
        <button className='boton-clear' onClick={props.borrar}>
            {props.children}
        </button>
    );
}

export default BotonClear;