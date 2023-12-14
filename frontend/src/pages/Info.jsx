import bienestar from '../assets/bienestar.jpg';
import individual from '../assets/entrenamiento_persona.jpg';
import grupal from '../assets/entrenamiento.jpg';

function Info () {



    return (
        <div className="contenedor">
        <div className="item">
            <h2>Entrenamientos colectivos</h2>
            <p>Las clases se realizan por parejas, con un calenamiento previo y una dinámica dirigida</p>
        </div>
        <div className="item">
            <img src={grupal} alt="cargando" className="cuota-image" />
        </div>
        <div className="item">
            <img src={bienestar} alt="cargando" className="cuota-image" />
        </div>
        <div className="item">
            <h2>Asesoría nutricional</h2>
            <p>Para una mejora en la condición física puedes pedir un seguimiento a tu progreso</p>
        </div>
        <div className="item">
            <h2>Clases particulares</h2>
            <p>Clases de 30 minutos</p>
            <p>Consulta los horarios disponibles</p>
        </div>
        <div className="item">
            <img src={individual} alt="cargando" className="cuota-image" />
        </div>
      </div>
    );
}

export default Info;