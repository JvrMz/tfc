
import { useNavigate } from 'react-router-dom';

function Logout({ user, setUser }) {
  const  { nombre } = user; 
  const navigate = useNavigate();

  const handleLogout = () => {
    // Reseteo la info del usuario
    setUser({
      id: null,
      nombre: null,
      token: null,
      role: null,
      cuota: null,
    });

    navigate('/');
  };

  return (
    <div className="logout">
        <p>Bienvenid@ { nombre }</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
