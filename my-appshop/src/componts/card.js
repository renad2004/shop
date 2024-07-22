import { FaBagShopping } from "react-icons/fa6";

const Card = ({ img, title, reviews, prevPrice, newPrice, company, color, category }) => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <div className="rating">
        <FaBagShopping className="rating-star" />
        <span>{reviews}</span>
      </div>
     <del><p className="new-price">{newPrice}</p></del> 
      <p className="prev-price">{prevPrice}</p>
      <p className="company">{company}</p>
      <p className="color">{color}</p>
      <p className="category">{category}</p>
    </div>  );
};

export default Card;
