import {
  hero__wrapper,
  hero__title,
  hero__text,
  text,
} from "./Hero.module.css";

function Hero() {
  return (
    <div id={hero__wrapper}>
      <h1 className={hero__title}> CADA SURCO EN EL VINILO</h1>
      <div className={hero__text}>
        <p className={text}>
          es una línea del tiempo, una huella del arte capturando la escencia de
          la creatividad.
        </p>
        <p className={text}>
          Los vinilos no son solo discos, son portadores de historias melódicas
          que resuenan con la profundidad de la experiencia humana.
        </p>
      </div>
    </div>
  );
}

export default Hero;
