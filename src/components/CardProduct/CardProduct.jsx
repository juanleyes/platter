import "./CardProduct.css";

function CardProduct({ name, artist, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <button>Comprar</button>
    </div>
  );
}

export default CardProduct;
