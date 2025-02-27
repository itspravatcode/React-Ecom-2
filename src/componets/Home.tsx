import React from "react";
import Products from "./Products";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";

const Home = () => {
  const { showCategory } = useProduct();

  return (
   
     
      <div> 
        {showCategory ? <Outlet /> : <Products />}
      </div>
   
  );
};

export default Home;
