import React, { useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";
import { Link, NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const {
    data = [],
    isLoading,
    cartItems,
    setCartItems,
    showDesc,
    setShowDesc
  } = useProduct();

  const handleAddToCart = (id) => {
    setCartItems([...cartItems, id]);
  };

  const descID = [...new Set(data.map((p) => p.id))];

  console.log("id is ",descID)
  if (isLoading)
    return (
      <>
        <div className="flex flex-wrap gap-[25px]">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-1/4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 animate-pulse"
              >
                <div className="h-48 w-full bg-gray-200"></div>
                <div className="p-4 md:p-5 space-y-3">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                  <div className="h-8 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
        </div>
      </>
    );

  return (
    <>
      {showDesc ? (
        <Outlet />
      ) : (
        <div className="flex flex-wrap gap-6">
          {data.map((item) => (
            <div className="w-1/4 flex flex-col bg-white border border-gray-300 shadow-md rounded-xl">
              <img className="h-48 w-96 object-scale-down" src={item.image} />
              <div className="p-4 md:p-5">
                <NavLink to={`/products/description/${item.id}`} onClick={()=>setShowDesc(true)}>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                </NavLink>

                <p className="mt-1 text-gray-600">{item.rating.rate}</p>
                <h1>${item.price}</h1>
                <button
                  className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => handleAddToCart(item.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
