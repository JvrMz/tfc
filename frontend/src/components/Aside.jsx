import { Link } from 'react-router-dom';
import MesYSemana from "./MesySemana";
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

function Aside() {
  const { user } = useContext(UserContext);
  const isAdmin = user.role === 'admin';

    return (
      <div className="aside">
        {/* <Link to="/">
          <img className="aside-logo" src="../logo.svg" alt="Mi Archivo SVG" />
        </Link> */}
        {/* <MesYSemana /> Para seleccionar la siguiente semana. Pendiente*/} 
        {isAdmin && (
          <div className="aside-section">
            <Link to="/registro">
              <button className='aside-button'>Registrar</button>
            </Link>
            <Link to="/infoAdmin">
              <button className='aside-button'>Clases</button>
            </Link>
          </div>
        )}

        
      </div>
    )
  }
  
  export default Aside
  