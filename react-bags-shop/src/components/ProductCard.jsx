import React from "react";
import { VscHeart } from "react-icons/vsc";

function ProductCard({products}) {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    discount,
    isNew,
    isBestSeller,
  } = products;

  return (
    <div id={id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-gray-200">
      
      <div className="relative bg-gray-200 aspect-square overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "/>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
        {isNew && (<span className="px-3 py-1 bg-green-500 text-white text-md font-bold rounded-full shadow-lg">ล่าสุด</span>)}
        {isBestSeller && (<span className="px-3 py-1 bg-orange-500 text-white text-md font-bold rounded-full shadow-lg">ขายดี</span>)}
        {discount && (<span className="px-3 py-1 bg-red-500 text-white text-md font-bold rounded-full shadow-lg">-{discount}%</span>)}
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg">
            <VscHeart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">{name}</h3>
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {rating} ({reviews} รีวิว)
          </span>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">฿{price.toLocaleString()}</span>
            <span className="text-xl text-gray-500 font-medium line-through">฿{originalPrice.toLocaleString()}</span>
        </div>
          {discount && (
            <div className="">
              <span className="">Saved ฿{(originalPrice - price).toLocaleString()}</span>
            </div>
          )}

        <button className="
          w-full 
          bg-black 
          text-white 
          py-3 
          px-6 
          rounded-xl 
          font-semibold 
          hover:bg-gray-800 
          transform 
          hover:scale-105 
          active:scale-95
          transition-all 
          duration-200 
          shadow-lg 
          hover:shadow-xl
          focus:outline-none 
          focus:ring-4 
          focus:ring-gray-300
        ">
          Add to cart
        </button>
        <button className="
          w-full 
          border-2 
          border-gray-300 
          text-gray-700 
          py-2 
          px-6 
          rounded-xl 
          font-semibold 
          hover:border-gray-900 
          hover:text-gray-900 
          transition-all 
          duration-200
        ">
          See more details
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
