import ClaseList from './ClaseList.jsx'
function Semana() {
    
    const diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return (
        <>
            <h2> Semana X </h2> 
            <p>Clases disponibles</p>
            <div className="week-grid">
                {diaSemana.map((day, index) => (<ClaseList key={index} day={day}/>))}
            </div>
        </>
    )
  }
  
  export default Semana
  