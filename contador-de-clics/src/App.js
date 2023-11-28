import './App.css';
import Boton from './components/Boton';
import LogoMarisa from './images/logo-firma.jpg';

function App() {

  const manejarClic= () => {
    console.log('Clic');
  }
  const reiniciarContador = () => {
    console.log('Reiniciar');
  }
  return (
    <div className="App">
    <div className='logo-marisa'>
    <img className='marisa-logo' src={LogoMarisa} alt='logo-marisa'
    />
    </div>  
    <div className='contenedor-principal'>
    <Boton texto='clic' esBotonDeClic={true} manejarClic={manejarClic}
    />
    <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador} 
    />
    </div>
    </div>
  );
}

export default App;
