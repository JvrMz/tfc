import { Link } from 'react-router-dom';
function Header() {

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="../logo.svg" alt="Mi Archivo SVG" />
      </Link>
      <h1> Eko </h1>
    </div>
  )
}

export default Header
