import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../T-shirt/Tshirt";
import Cart from "../Cart/Cart";
import "./home.css";
import toast from "react-hot-toast";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (!exist) {
      const previousTShirt = [...cart, tshirt];
      setCart(previousTShirt);
    } else {
      toast.error("already added");
    }
  };
  const handleRemoveToCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="shirts-container">
        {tShirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          key={cart._id}
          cart={cart}
          handleRemoveToCart={handleRemoveToCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
