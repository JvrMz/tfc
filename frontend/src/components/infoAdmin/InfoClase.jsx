import { useState, useEffect } from 'react';
import getUsersInClasses from '../../helpers/getUsersClasses';
import ClaseUsers from  './ClaseUsers';

function InfoClase({ claseId }) {

  const [usersInscritos, setUsersInscritos] = useState([]);
    
  useEffect(() => {
    getUsersInClasses(claseId).then((users) => {

      if (Array.isArray(users.data)) {
        setUsersInscritos(users.data);
      }
    });
  }, [claseId]);

  return (
    <div>
      <h2>Usuarios inscritos a la clase</h2>
      <ul className="lista-inscritos">
        {usersInscritos?.map(user => <ClaseUsers key={user.id} user={user} />)}
      </ul>
    </div>
  );
}

export default InfoClase;
