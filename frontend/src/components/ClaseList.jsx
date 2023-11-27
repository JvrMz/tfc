import { useState, useEffect } from 'react';
import Clase from './Clase';
import getClasesMesSemana from '../helpers/getClasesMesSemana';

function ClaseList({ semana, mes, dia }) {
  const [clases, setClases] = useState([]);


  useEffect(() => {
    getClasesMesSemana(mes, semana).then(data => {
  
      const clasesDia = data.filter(clase => clase.dia.toLowerCase() === dia.toLowerCase());
      setClases(clasesDia);
    });
  }, [mes, semana, dia]);

  return (
    <>
    <div>
      <h3>{dia}</h3>
      {clases.length <= 0 
        ? <p>No hay clases para {dia}</p>
        : clases.map(clase => <Clase key={clase.id_clase} clase={clase} />)
      }
    </div>
     </>
  );
}

export default ClaseList;
