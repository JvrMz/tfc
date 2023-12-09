
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import Logout from './Logout';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const { user, setUser } = useContext(UserContext);


    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return (
      <nav>
        <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`nav-links ${showMenu ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="">Gimnasios</Link>
          {user.token 
          ? (
          <Logout setUser ={ setUser }/>
          ) 
          : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    );
  }

export default Nav;
