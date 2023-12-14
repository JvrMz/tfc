import campana from '../assets/campana.png';
import imagen from '../assets/boxeo.png';
import { useState, useEffect, useContext } from 'react';
import getUsersClasses from '../helpers/getUsersClasses'; 
import { UserContext } from '../context/UserProvider';


function Clase( {clase, onSelect} ) {
  
    const { user } = useContext(UserContext); 


    const hora = clase.hora;
    const [count, setCount] = useState(0);
    const [aforoActual, setAforoActual] = useState(0);
    const [seleccionada, setSeleccionada] = useState(false);
    

    useEffect(() => {
      async function getAforo() {
        try {
          const usersInscritos = await getUsersClasses(clase.id_clase);

          const inscrito = usersInscritos.data.some((user) => user.id === user.id);
          setSeleccionada(inscrito);
          setAforoActual(usersInscritos.data.length);
        } catch (error) {
          console.error('Error al obtener usuarios inscritos en la clase', error);
        }
      }
  
      getAforo();
    }, [clase.id_clase, count]);

    const handleClick = () => {

      if (count < 30 && !seleccionada) {
        setCount((count) => count + 1);
        onSelect(clase.id_clase);
        setAforoActual((aforo) => aforo + 1);
        setSeleccionada(true);
      }
    };

    return (
      <>
        <div className={`clase ${seleccionada ? 'seleccionada' : ''}`} 
        onClick={handleClick} >
          <div className='clase-cabecera'>
            <h4>{hora}:00</h4>
            <img src={campana} alt="cargando tiempo" width="15px"/>
          </div>
          <span> {aforoActual} / 30</span>
        </div>
        {clase.hora == 15 
        ? 
        <img src={imagen} alt="logo cargando" width="50px;"/>
        : <span></span>
        }
      
      </>
    )
  }
  
  export default Clase
  