import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  header,
  nav,
  nav__item,
  header__logo,
  nav__container,
  menu__icon,
} from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/header-logo.png";
import MenuContext, { hamburgMenu } from "../Context/Context";

function Navbar() {
  const [menu, setMenu] = useState(hamburgMenu.closed);

  const handleHamburgMenu = () => {
    menu === hamburgMenu.open
      ? setMenu(hamburgMenu.closed)
      : setMenu(hamburgMenu.open);
  };

  return (
    <>
      <div id={header}>
        <img className={header__logo} src={logo} alt="logo" />
        <MenuContext.Provider value={(menu, handleHamburgMenu)}>
          <div className={nav__container} style={{ display: menu.display }}>
            <ul className={nav}>
              <Link to="/" className={nav__item}>
                Home
              </Link>

              <Link to="about" className={nav__item}>
                Nosotros
              </Link>

              <Link to="products" className={nav__item}>
                Productos
              </Link>

              <Link to="contact" className={nav__item}>
                Contacto
              </Link>
            </ul>
          </div>
          <FaBars className={menu__icon} onClick={handleHamburgMenu} />
        </MenuContext.Provider>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
