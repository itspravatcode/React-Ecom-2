import React from "react";
import Products from "./Products";
import Filter from "./SideBar";
import { Outlet } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

const Home = () => {
  const { showCategory } = useProduct();

  return (
    <div className="flex flex-row">
      <div className="basis-1/3">
        <Filter />
      </div>
      <div className="basis-2/3"> 
        {showCategory ? <Outlet /> : <Products />}
      </div>
    </div>
  );
};

export default Home;
