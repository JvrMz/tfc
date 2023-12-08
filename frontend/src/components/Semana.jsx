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

  const [clasesSeleccionadasPorDia, setClasesSeleccionadasPorDia] = useState({});
  // Guardo en un objeto el dia y el id de la clase. Y en un array las clases a la semana.
  const [clasesSeleccionadasSemana, setClasesSeleccionadasSemana] = useState([]);


  const handleSeleccionarClaseSemana = (dia, claseId) => {
    if (!clasesSeleccionadasPorDia[dia] && clasesSeleccionadasSemana.length < numeroClasesPermitidas) {
      setClasesSeleccionadasPorDia((prevClases) => ({
        ...prevClases,
        [dia]: [claseId],
      }));
      setClasesSeleccionadasSemana((prevClasesSemana) => [...prevClasesSemana, claseId]);
    }
  };

  // Pendiente, no se deselecciona. Claseseleccionada en claselist es null antes de poder compararse

  const handleDeseleccionarClaseSemana = (dia, claseId) => {
    if (clasesSeleccionadasPorDia[dia] && clasesSeleccionadasSemana.includes(claseId)) {
      setClasesSeleccionadasPorDia((prevClases) => ({
        ...prevClases,
        [dia]: [],
      }));
      setClasesSeleccionadasSemana((prevClasesSemana) => prevClasesSemana.filter((id) => id !== claseId));
    }
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
            clasesSeleccionadasPorDia={clasesSeleccionadasPorDia[dia] || []}
            clasesSeleccionadasSemana={clasesSeleccionadasSemana}
            onSelectSemana={(claseId) => handleSeleccionarClaseSemana(dia, claseId)}
            onDeselectSemana={(claseId) => handleDeseleccionarClaseSemana(dia, claseId)}
          />
        ))}
      </div>
    </>
  );
}

export default Semana;
