import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import freeCodeCampLogo from './imagenes/image.png';
import { useState } from 'react'; 

function App() {
  const [numClics, setNumDeClics] = useState(0);

  const manejarClic = () => {
    setNumDeClics(numClics + 1); //setNumDeClics es la funcion utlizada para reasignar el estado actual
  }
  const reiniciarContador = () => {
    setNumDeClics(0)
  }
  return (
    <div className="App">
      <div className= 'logo-contenedor'>
        <img className= 'logo' src={freeCodeCampLogo}/>
        <div className='contenedor-principal'>
          <Contador
            numClics= {numClics}
          />
          <Boton 
            texto = 'Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />
          <Boton 
            texto= 'reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
