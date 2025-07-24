import React, { useState } from 'react';
import { 
  FiHome, 
  FiSearch, 
  FiHeart, 
  FiShoppingBag 
} from 'react-icons/fi';

function Menu() {
    const [activeTab, setActiveTab] = useState('home');
    const [cartCount, setCartCount] = useState(2);
  
    return (
      <div className="
        fixed 
        bottom-0 
        left-1/2 
        transform 
        -translate-x-1/2 
        bg-white 
        rounded-full 
        shadow-2xl 
        border 
        border-gray-100 
        z-50 
        m-4
        px-6 
        py-3
      ">
        <div className="flex items-center justify-center gap-8">
          
          {/* Home */}
          <button 
            onClick={() => setActiveTab('home')}
            className={`
              p-3 rounded-full transition-all duration-200 
              ${activeTab === 'home' 
                ? 'bg-black text-white' 
                : 'text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            <FiHome className="w-6 h-6" />
          </button>
  
          {/* Search */}
          <button 
            onClick={() => setActiveTab('search')}
            className={`
              p-3 rounded-full transition-all duration-200 
              ${activeTab === 'search' 
                ? 'bg-black text-white' 
                : 'text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            <FiSearch className="w-6 h-6" />
          </button>
  
          {/* Favorites */}
          <button 
            onClick={() => setActiveTab('favorites')}
            className={`
              p-3 rounded-full transition-all duration-200 
              ${activeTab === 'favorites' 
                ? 'bg-black text-white' 
                : 'text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            <FiHeart className="w-6 h-6" />
          </button>
  
          {/* Cart with Badge */}
          <button 
            onClick={() => setActiveTab('cart')}
            className={`
              relative p-3 rounded-full transition-all duration-200 
              ${activeTab === 'cart' 
                ? 'bg-black text-white' 
                : 'text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            <FiShoppingBag className="w-6 h-6" />
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