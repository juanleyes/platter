import { products } from "../../data/productsData";
import CardProduct from "../CardProduct/CardProduct";
import {
  products__wrapper,
  products__title,
  cards__container,
  more__btn,
} from "./MainProducts.module.css";

import { Link } from "react-router-dom";

function MainProducts() {
  return (
    <div id={products__wrapper}>
      <h2 className={products__title}>Nuestros productos destacados</h2>
      <div className={cards__container}>
        {products.map((prod) => (
          <CardProduct
            key={prod.id}
            name={prod.name}
            artist={prod.artist}
            img={prod.img}
          />
        ))}
      </div>
      <Link to="products" className={more__btn}>
        Ver más
      </Link>
    </div>
  );
}

export default MainProducts;
