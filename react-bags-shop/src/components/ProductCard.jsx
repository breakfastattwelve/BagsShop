import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

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
      
      <div className="relative bg-blue-500 aspect-square overflow">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
        {isNew && (<span className="text-green-500">ล่าสุด</span>)}
        {isBestSeller && (<span className="text-yellow-500">ขายดี</span>)}

        <button>
            <IoMdHeartEmpty className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div>
        <h3>{name}</h3>
      </div>

      
      <p>ราคา: {price}</p>
      <p>ราคาเดิม: {originalPrice}</p>
      <p>รีวิว: {reviews}</p>
      <p>คะแนน: {rating}</p>
      <p>ส่วนลด: {discount}</p>

      {/* <p>สถานะ: {isNew ? "ล่าสุด" : "ก่อนหน้า"}</p>
      <p>สถานะ: {isBestSeller ? "ขายดี" : "ขายน้อย"}</p> */}
    </div>
  );
}

export default ProductCard;
