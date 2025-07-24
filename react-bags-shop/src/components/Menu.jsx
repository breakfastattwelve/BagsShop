import { useState } from "react";
import { FiHome, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";


function Menu() {

  const [active, setActive] = useState("home");
  const [cartCount, setCartCount] = useState(2);
 

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 bg-white shadow-2xl rounded-full p-4 border border-gray-200 z-50 m-4 px-6 py-3">
      <div className="flex items-center justify-center gap-8">
        <button onClick={()=>setActive("home")} className={`p-3 rounded-full transition-all duration-200 ${active === "home" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
          <FiHome  className="w-6 h-6"/>
        </button>

        <button onClick={()=>setActive("search")} className={`p-3 rounded-full transition-all duration-200 ${active === "search" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
          <FiSearch  className="w-6 h-6"/>
        </button>

        <button onClick={()=>setActive("favorites")} className={`p-3 rounded-full transition-all duration-200 ${active === "favorites" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
          <FiHeart className="w-6 h-6"/>
        </button>

        <button onClick={()=>setActive("cart")} className={`relative p-3 rounded-full transition-all duration-200 ${active === "cart" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
          <FiShoppingBag className="w-6 h-6"/>
          {cartCount > 0 && (
              <span className="
                absolute -top-1 -right-1 
                bg-red-500 text-white 
                text-xs font-bold 
                rounded-full 
                w-5 h-5 
                flex items-center justify-center
                border-2 border-white
              ">
                {cartCount}
              </span>
            )}
        </button>
      </div>
    </div>
  );
}

export default Menu;
