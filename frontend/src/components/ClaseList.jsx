import { useState, useEffect } from 'react';
import Clase from './Clase';
import getClasesMesSemana from '../helpers/getClasesMesSemana';

function ClaseList({
  semana,
  mes,
  dia,
  numeroClasesPermitidas,
  clasesSeleccionadasPorDia,
  clasesSeleccionadasSemana,
  onSelectSemana,
  onDeselectSemana
}) {
  const [clases, setClases] = useState([]);
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);

  useEffect(() => {
    getClasesMesSemana(mes, semana).then((data) => {
      const clasesDia = data.filter((clase) => clase.dia.toLowerCase() === dia.toLowerCase());
      setClases(clasesDia);
    });
  }, [mes, semana, dia]);

  const handleSeleccionarClase = (claseId, claseSeleccionada) => {
    if (!clasesSeleccionadasPorDia.length && clasesSeleccionadasSemana.length < numeroClasesPermitidas) {
      if (claseSeleccionada == claseId) {
        setClaseSeleccionada(null);
        onDeselectSemana(claseId);
      } else {
        setClaseSeleccionada(claseId);
        onSelectSemana(claseId);
      }
    }
  };

  return (
    <>
      <div>
        <h3>{dia}</h3>
        {clases.length <= 0
        ? (
          <p>No hay clases para {dia}</p>
        ) 
        : (
          clases.map((clase) => (
            <Clase
              key={clase.id_clase}
              clase={clase}
              seleccionada={
                clase.id_clase === claseSeleccionada || clasesSeleccionadasPorDia.includes(clase.id_clase)
              }
              onSelect={handleSeleccionarClase}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ClaseList;
