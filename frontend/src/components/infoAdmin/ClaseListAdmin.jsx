import { useState, useEffect } from 'react';
import ClaseAdmin from './ClaseAdmin';
import getClasesMesSemana from '../../helpers/getClasesMesSemana';

function ClaseListAdmin ({ semana, mes, dia, onSelectClass  }) {

  const [clases, setClases] = useState([]);

  useEffect(() => {
    getClasesMesSemana(mes, semana).then((data) => {
      const clasesDia = data.filter((clase) => clase.dia.toLowerCase() === dia.toLowerCase());
      setClases(clasesDia);
    });
  }, [mes, semana, dia]);



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
            <ClaseAdmin
              key={clase.id_clase}
              clase={clase}
              onSelect={() => onSelectClass(clase.id_clase)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default ClaseListAdmin
;
