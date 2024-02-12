import { Outlet, Link } from "react-router-dom";
import { header, nav, nav__item, header__logo } from "./Navbar.module.css";
import logo from "../../assets/header-logo.png";

function Navbar() {
  return (
    <>
      <div id={header}>
        <img className={header__logo} src={logo} alt="logo" />
        <nav className={nav}>
          <ul>
            <li>
              <Link to="/" className={nav__item}>
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="about" className={nav__item}>
                Nosotros
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="products" className={nav__item}>
                Productos
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="contact" className={nav__item}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
