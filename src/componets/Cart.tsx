import React from 'react'
import { useProduct } from '../contexts/ProductContext'

const Cart = () => {
    const {data,cartItems,setCartItems} = useProduct()
    const filteredData = data.filter(item => cartItems.includes(item.id));

    const handleRemoveFromCart = (id) => {
      const updatesItems = cartItems.filter(item => item!== id)
      setCartItems(updatesItems)
      console.log(updatesItems)
    }




  return (
    <div className="flex flex-wrap gap-6">
    {filteredData.map((item) => (
      <div className="w-1/4 flex flex-col bg-white border border-gray-300 shadow-md rounded-xl">
        <img className="h-48 w-96 object-scale-down" src={item.image} />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
          <p className="mt-1 text-gray-600">{item.rating.rate}</p>
          <button
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
        onClick={()=>handleRemoveFromCart(item.id)}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Cart
