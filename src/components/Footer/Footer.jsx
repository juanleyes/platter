import logo from "../../assets/header-logo.png";
import {
  footer__wrapper,
  footer__logo,
  social__links,
  link,
  hr,
  footer__text,
} from "./Footer.module.css";

function Footer() {
  return (
    <div id={footer__wrapper}>
      <img className={footer__logo} src={logo} alt="logo" />
      <hr className={hr} />
      <div>
        <ul className={social__links}>
          <li>
            <a className={link} href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className={link} href="#">
              Facebook
            </a>
          </li>
          <li>
            <a className={link} href="#">
              YouTube
            </a>
          </li>
          <li>
            <a className={link} href="#">
              X
            </a>
          </li>
        </ul>
      </div>
      <hr className={hr} />
      <p className={footer__text}>Todos los derechos reservados 2024</p>
    </div>
  );
}

export default Footer;
