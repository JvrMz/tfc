
function Clase( {clase} ) {

    const hora = clase.hora;

    return (
      <>
        <div className="clase">
          <h4>{hora}:00</h4>
          <p>aforo <span> /30</span></p>
        </div>
        {clase.hora == 15 
        ? <span>Horario tarde</span>
        : <span></span>
        }
      
      </>
    )
  }
  
  export default Clase
  