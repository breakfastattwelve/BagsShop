import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  AiOutlineHome, 
  AiOutlineSearch, 
  AiOutlineHeart, 
  AiOutlineShoppingCart,
  AiFillHome,
  AiFillHeart
} from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';

const BottomNavigationWithRouter = ({ cartCount = 2 }) => {
  const menuItems = [
    { 
      id: 'home',
      path: '/',
      icon: AiOutlineHome, 
      activeIcon: AiFillHome,
      label: 'หน้าแรก' 
    },
    { 
      id: 'search',
      path: '/search',
      icon: BiSearch, 
      activeIcon: BiSearch,
      label: 'ค้นหา' 
    },
    { 
      id: 'favorites',
      path: '/favorites',
      icon: AiOutlineHeart, 
      activeIcon: AiFillHeart,
      label: 'ถูกใจ' 
    },
    { 
      id: 'cart',
      path: '/cart',
      icon: BsCart3, 
      activeIcon: BsCart3,
      label: 'ตะกร้า', 
      badge: cartCount 
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 px-2 pb-safe">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `
              flex-1 flex flex-col items-center justify-center 
              py-2 px-1 relative group
              transition-all duration-300
              ${isActive 
                ? 'text-red-500 dark:text-red-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }
            `}
          >
            {({ isActive }) => {
              const Icon = isActive ? item.activeIcon : item.icon;
              
              return (
                <>
                  <div className="relative">
                    <Icon 
                      size={24} 
                      className={`
                        transition-all duration-300
                        ${isActive 
                          ? 'scale-110' 
                          : 'scale-100 group-hover:scale-105'
                        }
                      `}
                    />
                    
                    {item.badge && item.badge > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        {item.badge > 99 ? '99+' : item.badge}
                      </span>
                    )}
                  </div>
                  
                  <span className="text-xs mt-1 font-medium">
                    {item.label}
                  </span>
                  
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-500 rounded-full" />
                  )}
                </>
              );
            }}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigationWithRouter;