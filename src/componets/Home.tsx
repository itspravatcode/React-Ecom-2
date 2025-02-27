import React from "react";
import Products from "./Products";
import Filter from "./Filter";

const Home = () => {
  return (
    <div className="flex flex-row">
      <div >
        <Filter />
      </div>
      <div >
        <Products />
      </div>
    </div>
  );
};

export default Home;
