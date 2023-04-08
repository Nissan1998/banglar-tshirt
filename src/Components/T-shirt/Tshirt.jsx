import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { _id, price, picture, name, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
