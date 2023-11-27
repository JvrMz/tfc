
// import { useState, useEffect } from 'react';
// import Clase from './Clase.jsx';
// import getClasesSemana from '../helpers/getClasesSemana.js';

// function ClaseList () {
//     const [clases, setClases] = useState([]);

//     useEffect(() => {
//         getClasesSemana().then(data => setClases(data));
        
//     }, []); 

//     return (
         
            
//         clases.length <= 0
//         ? <p>No se encuentran clases para mostrar</p>
//         :<>
//             <div className='lista-semana'>
//                 {clases?.map(clase => <Clase key={clase.id_clase} clase={clase} />)}
//             </div>

//         </>
            
        
//     );
// }

// export default ClaseList;

import { useState, useEffect } from 'react';
import Clase from './Clase';
import getClasesDia from '../helpers/getClasesDia';

function ClaseList({ day }) {
  const [clases, setClases] = useState([]);
    
  useEffect(() => {

    getClasesDia(day).then(data => setClases(data));
  }, [day]);

  return (
    <div>
      <h3>{day}</h3>
      {clases.length <= 0
        ? <p>No hay clases para {day}</p>
        : clases.map(clase => <Clase key={clase.id_clase} clase={clase} />)
      }
    </div>
  );
}

export default ClaseList;

