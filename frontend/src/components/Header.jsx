import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import Logout from './Logout';

function Header() {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="header-container">
        <div className="header">
          <Link to="/">
            <img className="logo" src="../logo.svg" alt="Mi Archivo SVG" />
          </Link>
          <h1> Eko </h1>
        </div>
        <div className="login-container"> 
          {user.token 
            ? (
              <Logout user={ user } setUser={ setUser }/>
            ) 
            : (
              <Link to="/login">Login</Link>
            )}
        </div>
      </div>
      <hr />
    </>
  )
}

export default Header
