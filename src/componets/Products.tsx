import React from "react";
import { useProduct } from "../contexts/ProductContext";
import { Outlet } from "react-router-dom";

const Products = () => {
  const { data=[], isLoading,showCategory } = useProduct();

  if (isLoading) return <p>Loading...</p>;
  console.log(data);

  return (
    <div className="flex flex-wrap gap-5">
    {data.map((item) => (
         <div className="w-64 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 light:border-neutral-700 light:shadow-neutral-700/70">
         <img
           className="w-full h-auto rounded-t-xl"
           src={item.image}
         />
         <div className="p-4 md:p-5">
           <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
           <p className="mt-1 text-gray-500 dark:text-neutral-400">
            {item.rating.rate}
           </p>
           <a
             className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
             href="#"
           >
             Go somewhere
           </a>
         </div>
       </div>
     
      ))}
    </div>
  );
};

export default Products;
