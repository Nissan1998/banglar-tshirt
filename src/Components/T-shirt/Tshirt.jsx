import React from "react";

const Tshirt = ({ tshirt }) => {
  const { _id, price, picture, name, gender } = tshirt;
  return (
    <div>
      <h4>{name}</h4>
      <img src={picture} alt="" />
    </div>
  );
};

export default Tshirt;
<h3>Tshirt page</h3>;
