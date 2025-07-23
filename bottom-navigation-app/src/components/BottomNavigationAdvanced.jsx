import React, { useState, useEffect, useRef } from 'react';
import { 
  AiOutlineHome, 
  AiOutlineSearch, 
  AiOutlineHeart, 
  AiOutlineShoppingCart,
  AiFillHome,
  AiFillHeart,
  AiOutlineAppstore
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';

const BottomNavigationAdvanced = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [cartCount, setCartCount] = useState(2);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { 
      id: 'home', 
      icon: AiOutlineHome, 
      activeIcon: AiFillHome,
      label: 'หน้าแรก' 
    },
    { 
      id: 'search', 
      icon: BiSearch, 
      activeIcon: BiSearch,
      label: 'ค้นหา' 
    },
    { 
      id: 'favorites', 
      icon: AiOutlineHeart, 
      activeIcon: AiFillHeart,
      label: 'ถูกใจ' 
    },
    { 
      id: 'cart', 
      icon: BsCart3, 
      activeIcon: BsCart3,
      label: 'ตะกร้า', 
      badge: cartCount 
    },
  ];

  // จัดการการซ่อน/แสดงเมนูเมื่อ scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // แสดงเมนูเมื่อ scroll ขึ้น หรืออยู่ด้านบนสุด
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // ซ่อนเมนูเมื่อ scroll ลง
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    
    // เพิ่ม haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  // ฟังก์ชันอัพเดทจำนวนในตะกร้า (ตัวอย่างการใช้งาน)
  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <nav 
      className={`
        fixed bottom-0 left-0 right-0 
        bg-white dark:bg-gray-900 
        border-t border-gray-200 dark:border-gray-700 
        shadow-lg z-50 
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      {/* Container with safe area padding */}
      <div className="flex justify-around items-center h-16 px-2 pb-safe">
        {menuItems.map((item) => {
          const Icon = activeMenu === item.id ? item.activeIcon : item.icon;
          const isActive = activeMenu === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`
                flex-1 flex flex-col items-center justify-center 
                py-2 px-1 relative group
                transition-all duration-300
                ${isActive 
                  ? 'text-red-500 dark:text-red-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
              `}
            >
              {/* Icon container with animation */}
              <div className="relative">
                <Icon 
                  size={24} 
                  className={`
                    transition-all duration-300
                    ${isActive 
                      ? 'scale-110 animate-bounce-once' 
                      : 'scale-100 group-hover:scale-105'
                    }
                  `}
                />
                
                {/* Badge */}
                {item.badge && item.badge > 0 && (
                  <span 
                    className={`
                      absolute -top-2 -right-2 
                      bg-red-500 text-white 
                      text-xs font-bold 
                      rounded-full h-5 w-5 
                      flex items-center justify-center
                      ${item.badge > 9 ? 'text-[10px]' : ''}
                      animate-pulse
                    `}
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
                
                {/* Ripple effect on click */}
                <span 
                  className={`
                    absolute inset-0 rounded-full
                    bg-red-500 bg-opacity-20
                    scale-0 group-active:scale-150
                    transition-transform duration-500
                  `}
                />
              </div>
              
              {/* Label */}
              <span 
                className={`
                  text-xs mt-1 font-medium
                  transition-all duration-300
                  ${isActive ? 'opacity-100' : 'opacity-80'}
                `}
              >
                {item.label}
              </span>
              
              {/* Active dot indicator */}
              <span 
                className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2
                  h-1 bg-red-500 rounded-full
                  transition-all duration-300
                  ${isActive ? 'w-4 opacity-100' : 'w-0 opacity-0'}
                `}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigationAdvanced;