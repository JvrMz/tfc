import campana from '../assets/campana.png';
import imagen from '../assets/boxeo.png';
import { useState } from 'react';

function Clase( {clase, seleccionada, onSelect} ) {
  
    const hora = clase.hora;
    const [count, setCount] = useState(0);

    const handleClick = () => {

      if (count < 30 && !seleccionada) {
        setCount((count) => count + 1);
        onSelect(clase.id_clase);
      }
    };

    return (
      <>
        <div className={`clase ${seleccionada ? 'seleccionada' : ''}`} 
        onClick={handleClick} >
          <div className='clase-cabecera'>
            <h4>{hora}:00</h4>
            <img src={campana} alt="cargando tiempo" width="15px"/>
          </div>
          {count} <span> /30</span>
        </div>
        {clase.hora == 15 
        ? 
        <img src={imagen} alt="logo cargando" width="50px;"/>
        : <span></span>
        }
      
      </>
    )
  }
  
  export default Clase
  