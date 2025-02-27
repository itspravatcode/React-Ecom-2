import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ProductContext = createContext({});
const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export const ProductProvider = ({ children }: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

//   console.log(data);
  return (
    <ProductContext.Provider value={{ data, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  return useContext(ProductContext);
}
