
import { useNavigate } from 'react-router-dom';

function Logout({ setUser }) {

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
    <button className="logout" onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
