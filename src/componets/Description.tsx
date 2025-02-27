import React from "react";
import { useProduct } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";

const Description = () => {
  const { data } = useProduct();
  const { descriptionId } = useParams(); // Match with Route param
  const productId = Number(descriptionId); // Convert to number

  const filteredProducts = data.filter((p) => p.id === productId);
  console.log("Filtered product:", filteredProducts);

  return (
    <>
      {filteredProducts.map((item) => (
        <div key={item.id} className="bg-white border rounded-xl shadow-sm sm:flex">
          <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
            <img
              className="size-full absolute top-0 start-0 object-scale-down"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 flex flex-col h-full sm:p-7">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="mt-1 text-gray-500">{item.description}</p>
              <p className="mt-1 text-gray-500 font-bold">${item.price}</p>
              <div className="mt-5 sm:mt-auto">
                <p className="text-xs text-gray-500">{item.rating.rate}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Description;
