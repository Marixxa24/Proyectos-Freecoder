import './App.css';
import  Testimonio  from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'> 
    <h1>Testimonio de nuestras estudiantes de la UNLaR </h1>
      <Testimonio 
      nombre='Chaile Marisa Soledad' 
      pais='Argentina'
      imagen='Marisa'
      cargo='ing en sistemas de informacion'
      empresa='UNLaR'
      testimonio='Hola a todos, soy Marisa, tengo 25 años, resido en La Rioja Capital. Actualmente, me encuentro cursando ingenieria en sistemas de informacion en la iniversidad de La Rioja. Mi vida está marcada por el amor al deporte. Dedico tiempo tanto al gimnasio, especialmente en el área de musculación, como al CrossFit. Más allá de la universidad y el deporte, me apasiona el desarrollo personal y profesional, y busco constantemente oportunidades de capacitación, centrándome especialmente en cursos relacionados con la programación, lo cual estoy haciendo dos cursos de este indole. En mi día a día, busco equilibrio entre el estudio, el ejercicio y el crecimiento personal. Creo firmemente que la armonía entre estas facetas enriquece mi vida y me permite abordar cada desafío con una perspectiva positiva. Agradezco la oportunidad de compartir un poco de mi vida y mis aspiraciones con todos ustedes. '
       />
       <Testimonio
       nombre='Carrizo Yessica Esmeralda'
       pais='Argentina'
       imagen='yessi'
       cargo='Ingeniera en Sistemas'
       empresa='UNLaR'
       testimonio='Hola a todos, soy  Yessica, tengo 21 años y resido en La Rioja Capital, Argentina. Actualmente estoy cursando la carrera de Ingeniería en Sistemas de Información en la Universidad Nacional de La Rioja. En mis tiempos libres antes de ir a trabajar practico CrossFit, actividad que comparto con mis amigas y colegas, Marisa y Eugenia. Esta conexión va más allá del deporte, influyendo positivamente en nuestras vidas académicas y profesionales, fortaleciendo no solo nuestros cuerpos, sino también nuestra amistad y capacidad de trabajo en equipo. Me encuentro trabajando en etencion al cliente un restaurante por las noches, ingresando a las 21 y saliendo 2am. Cada día me esfuerzo por encontrar el equilibrio entre el compromiso académico y la vida social. Mi enfoque principal está en mi carrera, pero también valoro la importancia de la actividad física y la conexión con los demás. Con la vista puesta en el futuro, aspiro a aplicar los conocimientos que adquiero para contribuir al desarrollo tecnológico de nuestra sociedad. Busco un crecimiento continuo, tanto en el ámbito personal como profesional. Agradezco la oportunidad de compartir un poco de mi vida con ustedes'
       />
       <Testimonio
       nombre='Gaeitan Andrea Eugenia'
       pais='Argentina'
       imagen='Euge'
       cargo='Ingeniera en Sistemas'
       empresa='UNLaR'
          testimonio='Hola a todos, soy Eugenia, tengo 23 años y resido en La Rioja Capital, Argentina, Actualmente estoy cursando la carrera de Ingeniería en Sistemas de Información en la Universidad Nacional de La Rioja. En mis tiempos libres practico crossFit, actividad que comparto con mis amigas y colegas, Marisa y Yesica. Cada día me esfuerzo por encontrar el equilibrio entre el compromiso académico y la vida social. Mi enfoque principal está en mi carrera, pero también valoro la importancia de la actividad física y la conexión con los demás.Con la vista puesta en el futuro, aspiro a aplicar los conocimientos que adquiero para contribuir al desarrollo tecnológico de nuestra sociedad. Busco un crecimiento continuo, tanto en el ámbito personal como profesional. Agradezco la oportunidad de compartir un poco de mi vida con ustedes. '
     />




    </div>
    </div>
  );
}

export default App;
