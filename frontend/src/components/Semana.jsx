import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import ClaseList from './ClaseList.jsx';

function Semana() {
  
  const { user } = useContext(UserContext);

  let numeroClasesPermitidas;

  switch (user.cuota) {
    case 'dos':
      numeroClasesPermitidas = 2;
      break;
    case 'tres':
      numeroClasesPermitidas = 3;
      break;
    case 'seis':
      numeroClasesPermitidas = 6;
      break;
      default:
        numeroClasesPermitidas = 0;
      }

    const semana = 2;
    const mes = 'enero'; 

    const [clasesSeleccionadasSemana, setClasesSeleccionadasSemana] = useState([]);

    const handleSeleccionarClaseSemana = (claseId) => {
      if (clasesSeleccionadasSemana.length < numeroClasesPermitidas) {
        setClasesSeleccionadasSemana((prevClases) => [...prevClases, claseId]);
      }
    };
  
    const handleDeseleccionarClaseSemana = (claseId) => {
      setClasesSeleccionadasSemana((prevClases) => prevClases.filter((id) => id !== claseId));
    };

    const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
      
      return (
        <>
      <h2 className='encabezado'> Semana {semana} </h2> 
      <div className="lista-semana">
        {diaSemana.map((dia, index) => (
          <ClaseList 
          key={index} 
          dia={dia} 
          semana={semana} 
          mes={mes}  
          numeroClasesPermitidas={numeroClasesPermitidas}
          clasesSeleccionadasSemana={clasesSeleccionadasSemana}
          onSelectSemana={handleSeleccionarClaseSemana}
          onDeselectSemana={handleDeseleccionarClaseSemana}
          />
        ))}
      </div>
    </>
  );
}

export default Semana;
