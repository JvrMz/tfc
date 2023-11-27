import campana from '../assets/campana.png'
import imagen from '../assets/boxeo.png'
function Clase( {clase} ) {

    const hora = clase.hora;

    return (
      <>
        <div className="clase">
          <div className='clase-cabecera'>
            <h4>{hora}:00</h4>
            <img src={campana} alt="cargando tiempo" width="15px"/>
          </div>
          <p>aforo <span> /30</span></p>
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
  