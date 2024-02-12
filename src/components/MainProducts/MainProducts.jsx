import { products } from "../../data/productsData";
import CardProduct from "../CardProduct/CardProduct";

function MainProducts() {
  return (
    <div>
      {products.map((prod) => (
        <CardProduct
          key={prod.id}
          name={prod.name}
          artist={prod.artist}
          img={prod.img}
        />
      ))}
    </div>
  );
}

export default MainProducts;
