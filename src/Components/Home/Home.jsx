import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../T-shirt/Tshirt";

const Home = () => {
  const tShirts = useLoaderData();
  return (
    <div>
      {tShirts.map((tshirt) => (
        <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
      ))}
    </div>
  );
};

export default Home;
