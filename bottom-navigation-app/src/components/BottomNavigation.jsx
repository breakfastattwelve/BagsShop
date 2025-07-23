import React, { useState } from 'react';
import { 
  AiOutlineHome, 
  AiOutlineSearch, 
  AiOutlineHeart, 
  AiOutlineShoppingCart 
} from 'react-icons/ai';

const BottomNavigation = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [cartCount, setCartCount] = useState(2);

  const menuItems = [
    { id: 'home', icon: AiOutlineHome, label: 'หน้าแรก' },
    { id: 'search', icon: AiOutlineSearch, label: 'ค้นหา' },
    { id: 'favorites', icon: AiOutlineHeart, label: 'ถูกใจ' },
    { id: 'cart', icon: AiOutlineShoppingCart, label: 'ตะกร้า', badge: cartCount },
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    
    // เพิ่ม haptic feedback สำหรับ mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      {/* Safe area สำหรับ iPhone */}
      <div className="flex justify-around items-center h-16 pb-safe">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`
                flex-1 flex flex-col items-center justify-center py-2 px-3
                transition-all duration-300 relative
                ${activeMenu === item.id 
                  ? 'text-red-500' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              {/* Ripple effect container */}
              <div className="relative">
                <Icon 
                  size={24} 
                  className={`
                    transition-transform duration-300
                    ${activeMenu === item.id ? 'scale-110' : 'scale-100'}
                  `}
                />
                
                {/* Badge สำหรับตะกร้า */}
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>
              
              <span className="text-xs mt-1 font-medium">
                {item.label}
              </span>
              
              {/* Active indicator */}
              {activeMenu === item.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;