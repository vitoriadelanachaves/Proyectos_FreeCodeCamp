import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props)
 {
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');    
    }; 
    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`} onClick={()=>props.manejarClick(props.children)}>
          {props.children}  
        </div>
    );
}
// En onClick se espera una funcion, pero si no agregamos la funcio anonima el boton onClick va a recibir un valor retornado por la funcion (una String)
export default Boton;