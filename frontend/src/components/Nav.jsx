import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
  
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
          <Link to="/login">Login</Link>
          <Link to="/usuarios">Área usuario</Link>
        </div>
      </nav>
    );
  }

export default Nav;
