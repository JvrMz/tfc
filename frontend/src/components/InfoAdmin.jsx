import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import ClaseListAdmin from './infoAdmin/ClaseListAdmin.jsx';
import InfoClase from './infoAdmin/InfoClase.jsx';


function InfoAdmin() {
  const { user } = useContext(UserContext);


  const semana = 2;
  const mes = 'enero';

  // Pendiente, no se deselecciona. Claseseleccionada en claselist es null antes de poder compararse


  const diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  const [selectedClassId, setSelectedClassId] = useState(null);

  const handleSelectClass = (claseId) => {
    setSelectedClassId(claseId);
  };

  return (
    <div className='main-section'>
      <h2 className='encabezado'> Clases </h2>
      <h2 className='encabezado'> Semana {semana} </h2>
      <div className="lista-semana">
        {diaSemana.map((dia, index) => (
          <ClaseListAdmin
            key={index}
            dia={dia}
            semana={semana}
            mes={mes}
            onSelectClass={handleSelectClass} 
          />
          
        ))}
      </div>
      
      <div>
        {selectedClassId && <InfoClase claseId={selectedClassId} />}
      </div>

    </div>
  );
}

export default InfoAdmin;
