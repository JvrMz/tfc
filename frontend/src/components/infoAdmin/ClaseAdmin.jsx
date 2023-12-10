import campana from '../../assets/campana.png';
import imagen from '../../assets/boxeo.png';

function ClaseAdmin( {clase, onSelect  } ) {
  
    const hora = clase.hora;
   
    const handleClick = () => {
      onSelect(clase.id_clase);
    };

    return (
      <>
        <div className="clase" onClick={handleClick} >
          <div className='clase-cabecera'>
            <h4>{hora}:00</h4>
            <img src={campana} alt="cargando tiempo" width="15px"/>
          </div>
        </div>
        {clase.hora == 15 
        ? 
        <img src={imagen} alt="logo cargando" width="50px;"/>
        : <span></span>
        }
      
      </>
    )
  }
  
  export default ClaseAdmin
  