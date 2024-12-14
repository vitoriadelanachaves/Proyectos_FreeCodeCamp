import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea(props) {
    return(
        <div className={props.completada ? "tarea-contenedor completada" : 'tarea-contenedor'}>
            <div className="tarea-texto" onClick={() => props.completarTarea(props.id)}>
                {props.texto}
            </div>
            <div className="tarea-contenedor-icono" onClick={() => props.eliminarTarea(props.id)}>
                <AiOutlineCloseCircle className="tarea-icono" />
            </div>
        </div>
    );
}

export default Tarea;