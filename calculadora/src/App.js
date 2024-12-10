import './App.css';
import logoFreeCodeCamp from './imagenes/freecodecamp-logo.png';
import Pantalla from './componentes/Pantalla.js';
import Boton from './componentes/Boton.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from'mathjs';

function App() 
{
 const calcularResultado = () => {
    setInput(evaluate(input));
 }
 const [input, setInput] = useState('');
 const agregarInput = valor => {
  setInput(input + valor); //Para concatenar las cadenas
 }
 const borrar = () =>{
  setInput('');
 }
  return (
    <div className="App">
      <div className='logo-contenedor'>
          <img className='freecodecamp-logo' src={logoFreeCodeCamp} alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla
        input ={input}
         />
        <div className= 'fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className= 'fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className= 'fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className= 'fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className= 'fila'>
          <BotonClear borrar={borrar}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
