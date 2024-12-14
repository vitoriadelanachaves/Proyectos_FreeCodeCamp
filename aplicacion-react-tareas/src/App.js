import './App.css';
import FreeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas.js';

function App() {

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={FreeCodeCampLogo} alt='logo de freecodecamp' className='logo-freecodecamp'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
