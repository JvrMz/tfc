import ClaseList from './ClaseList.jsx';

function Semana() {
  const semana = 2; // Cambia esto a la semana que deseas mostrar
  const mes = 'enero'; // Cambia esto al mes que deseas mostrar

  const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  return (
    <>
      <h2 className='encabezado'> Semana {semana} </h2> 
      <div className="lista-semana">
        {diaSemana.map((dia, index) => (
          <ClaseList key={index} dia={dia} semana={semana} mes={mes} />
        ))}
      </div>
    </>
  );
}

export default Semana;
