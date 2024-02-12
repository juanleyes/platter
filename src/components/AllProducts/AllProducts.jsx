import { products } from "../../data/productsData";
import CardProduct from "../CardProduct/CardProduct";
import {
  products__wrapper,
  products__title,
  cards__container,
} from "./AllProducts.module.css";

function Products() {
  return (
    <div id={products__wrapper}>
      <h1 className={products__title}>DISCOS DE VINILO</h1>
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
    </div>
  );
}

export default Products;
