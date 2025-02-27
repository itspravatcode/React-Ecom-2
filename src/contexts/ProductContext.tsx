import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductContextType {
  data?: Product[];
  isLoading: boolean;
  showCategory: boolean;
  setShowCategory: (value: boolean) => void;
  cartItems: Product[];
  setCartItems: (value: Product[]) => void;
  showDesc:boolean;
  setShowDesc: (value: boolean) => void;
  
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error;
  }
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [showCategory, setShowCategory] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [showDesc, setShowDesc] = useState(false);

  const value = useMemo(
    () => ({ data, isLoading, showCategory, setShowCategory, cartItems,setCartItems,showDesc,setShowDesc }),
    [data, isLoading, showCategory,cartItems,showDesc]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
