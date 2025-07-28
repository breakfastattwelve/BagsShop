import { useState } from "react";
import { FiHome, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import { useCart } from '../hooks/useCart';
import { useFavorite } from '../hooks/useFavorite';
import Cart from './Cart';
import Favorite from './Favorite';
import Search from './Search';

function Menu() {
  const [active, setActive] = useState("home");
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { amount } = useCart();
  const { totalFavorites } = useFavorite();

  const handleCartClick = () => {
    setActive("cart");
    setShowCart(!showCart);
    setShowFavorite(false);
    setShowSearch(false);
  };

  const handleFavoriteClick = () => {
    setActive("favorites");
    setShowFavorite(!showFavorite);
    setShowCart(false);
    setShowSearch(false);
  };

  const handleSearchClick = () => {
    setActive("search");
    setShowSearch(!showSearch);
    setShowCart(false);
    setShowFavorite(false);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleCloseFavorite = () => {
    setShowFavorite(false);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 bg-white shadow-2xl rounded-full p-4 border border-gray-200 z-50 m-4 px-6 py-3">
        <div className="flex items-center justify-center gap-8">
          <button onClick={() => setActive("home")} className={`p-3 rounded-full transition-all duration-200 ${active === "home" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
            <FiHome className="w-6 h-6"/>
          </button>

          <button onClick={handleSearchClick} className={`p-3 rounded-full transition-all duration-200 ${active === "search" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
            <FiSearch className="w-6 h-6"/>
          </button>

          <button onClick={handleFavoriteClick} className={`relative p-3 rounded-full transition-all duration-200 ${active === "favorites" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
            <FiHeart className="w-6 h-6"/>
            {totalFavorites > 0 && (
              <span className="
                absolute -top-1 -right-1 
                bg-red-500 text-white 
                text-xs font-bold 
                rounded-full 
                w-5 h-5 
                flex items-center justify-center
                border-2 border-white
              ">
                {totalFavorites}
              </span>
            )}
          </button>

          <button onClick={handleCartClick} className={`relative p-3 rounded-full transition-all duration-200 ${active === "cart" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>
            <FiShoppingBag className="w-6 h-6"/>
            {amount > 0 && (
              <span className="
                absolute -top-1 -right-1 
                bg-red-500 text-white 
                text-xs font-bold 
                rounded-full 
                w-5 h-5 
                flex items-center justify-center
                border-2 border-white
              ">
                {amount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center md:items-center items-end justify-center z-50 p-4 md:p-4" onClick={handleCloseCart}>
          <div className="bg-white/95 backdrop-blur-md rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[70vh] md:max-h-[90vh] overflow-y-auto shadow-2xl border-t md:border border-white/20 animate-slide-up md:animate-none" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-800">ตะกร้าสินค้า</h2>
              <button 
                onClick={handleCloseCart}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100/50 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
            <Cart />
          </div>
        </div>
      )}

      {/* Favorite Modal */}
      {showFavorite && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center md:items-center items-end justify-center z-50 p-4 md:p-4" onClick={handleCloseFavorite}>
          <div className="bg-white/95 backdrop-blur-md rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[70vh] md:max-h-[90vh] overflow-y-auto shadow-2xl border-t md:border border-white/20 animate-slide-up md:animate-none" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-800">สินค้าที่ชื่นชอบ</h2>
              <button 
                onClick={handleCloseFavorite}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100/50 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
            <Favorite />
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center md:items-center items-end justify-center z-50 p-4 md:p-4" onClick={handleCloseSearch}>
          <div className="bg-white/95 backdrop-blur-md rounded-t-3xl md:rounded-3xl w-full md:max-w-4xl max-h-[70vh] md:max-h-[90vh] overflow-y-auto shadow-2xl border-t md:border border-white/20 animate-slide-up md:animate-none" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
              <h2 className="text-2xl font-bold text-gray-800">ค้นหาสินค้า</h2>
              <button 
                onClick={handleCloseSearch}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100/50 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
            <Search />
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
