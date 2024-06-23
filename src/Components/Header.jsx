import { Outlet, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/ejemploReactClase" className="logo">
        Logo
      </Link>
      <nav>
        <ul>
          <li>
            {/* <a href="#login">Login</a> */}
            <Link to="/login"> Login</Link>
          </li>
          <li>
            {/* <a href="#register">Registro</a> */}
            <Link to="/register"> Registro</Link>
          </li>
          <li>
            {/* <a href="#contact">Contacto</a> */}
            <Link to="/contact"> Contacto</Link>
          </li>
          <li>
            {/* <a href="#profile">Contacto</a> */}
            <Link to="/profile"> Perfil</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
