import {
  aboutUs__wrapper,
  aboutUs__header,
  title,
  text,
  items__container,
  item,
  item__info,
  info__title,
  info__text,
  item__img,
} from "./AboutUs.module.css";

import about1 from "../../assets/about/about1.svg";
import about2 from "../../assets/about/about2.svg";
import about3 from "../../assets/about/about3.svg";
import about4 from "../../assets/about/about4.svg";

function AboutUs() {
  return (
    <div id={aboutUs__wrapper}>
      <div className={aboutUs__header}>
        <h1 className={title}>CONOCE SOBRE NOSOTROS</h1>
        <p className={text}>
          que podemos ofrecerte, nuestras habilidades y objetivos.
        </p>
      </div>
      <div className={items__container}>
        <div className={item}>
          <div className={item__info}>
            <h2 className={info__title}>Variedad y rarezas</h2>
            <p className={info__text}>
              Ofrecer una amplia variedad de discos de vinilo, desde éxitos
              populares hasta joyas raras y difíciles de encontrar.
            </p>
          </div>
          <img className={item__img} src={about1} alt="about" />
        </div>
        <div className={item}>
          <img className={item__img} src={about2} alt="about" />
          <div className={item__info}>
            <h2 className={info__title}>Experiencia nostálgica</h2>
            <p className={info__text}>
              Los vinilos evocan una sensación nostálgica y una conexión
              emocional con la música.
            </p>
          </div>
        </div>
        <div className={item}>
          <div className={item__info}>
            <h2 className={info__title}>Calidad de sonido superior</h2>
            <p className={info__text}>
              La calidad de sonido cálido y auténtico que ofrecen los vinilos la
              tenemos nosotros.
            </p>
          </div>
          <img className={item__img} src={about3} alt="about" />
        </div>
        <div className={item}>
          <img className={item__img} src={about4} alt="about" />
          <div className={item__info}>
            <h2 className={info__title}>Eventos y experiencias</h2>
            <p className={info__text}>
              Eventos relacionados con la música, como sesiones de escucha,
              presentaciones en vivo y charlas sobre vinilos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
