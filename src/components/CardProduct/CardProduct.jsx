import "./CardProduct.css";

function CardProduct({ name, artist, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card__info">
        <h2>{name}</h2>
        <h4>{artist}</h4>
      </div>
      <button>Comprar</button>
    </div>
  );
}

export default CardProduct;
