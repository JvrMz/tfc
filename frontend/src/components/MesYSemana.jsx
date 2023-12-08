// Quiero seleccionar la semana, para que el admin pase a la siguiente cuando quiera.
// Problema, se guardaria en localstorage? o en context? porque tiene que ser visible constantemente.
import{ useState } from 'react';
import getClasesMesSemana from '../helpers/getClasesMesSemana.js';

function MesYSemana  ( )  {

  const [mes, setMes] = useState('');
  const [semana, setSemana] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getClasesMesSemana({ mes, semana });
  };

  return (
    <form className="form-aside" onSubmit={handleSubmit}>

        <label>
            Mes:
            <input type="text" value={mes} onChange={(e) => setMes(e.target.value)} />
        </label>
        <label>
            Semana:
            <input type="text" value={semana} onChange={(e) => setSemana(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
    </form>
  );
}

export default MesYSemana;
