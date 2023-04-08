import React from "react";

const Cart = ({ cart, handleRemoveToCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please add some product</p>;
  } else {
    message = (
      <div>
        <h1>Boroloxx</h1>
        <p>Thanks for buying</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Item- {cart.length}</h3>
      {cart.length > 2 ? <span>More buy</span> : <span>Fokira</span>}
      {message}
      {cart.map((Tshirt) => (
        <p key={Tshirt._id}>
          {Tshirt.name}{" "}
          <button onClick={() => handleRemoveToCart(Tshirt._id)}>X</button>{" "}
        </p>
      ))}
      {cart.length === 2 && <p>Wow</p>}
      {cart.length !== 3 || <h3>Greats</h3>}
    </div>
  );
};

export default Cart;
/*
Conditional Rendering
1. use if else condition to set a variable that will contain a element, or components or anything else
2. ternary: condition?'if true':'if false'
3. logical && (if the condition is true then the next thing will be displayed)
4. logical || (if the condition is false then the next thing will be displayed)
*/
