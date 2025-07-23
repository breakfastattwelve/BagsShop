import React, { useState } from 'react';
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  HeartIcon, 
  ShoppingCartIcon 
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  MagnifyingGlassIcon as MagnifyingGlassIconSolid, 
  HeartIcon as HeartIconSolid, 
  ShoppingCartIcon as ShoppingCartIconSolid 
} from '@heroicons/react/24/solid';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cartCount, setCartCount] = useState(2);

  const navigationItems = [
    {
      id: 'home',
      label: 'หน้าแรก',
      icon: HomeIcon,
      iconSolid: HomeIconSolid,
      path: '/'
    },
    {
      id: 'search',
      label: 'ค้นหา',
      icon: MagnifyingGlassIcon,
      iconSolid: MagnifyingGlassIconSolid,
      path: '/search'
    },
    {
      id: 'favorites',
      label: 'รายการโปรด',
      icon: HeartIcon,
      iconSolid: HeartIconSolid,
      path: '/favorites'
    },
    {
      id: 'cart',
      label: 'รถเข็น',
      icon: ShoppingCartIcon,
      iconSolid: ShoppingCartIconSolid,
      path: '/cart',
      badge: cartCount
    }
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    
    // จำลองการเพิ่มสินค้าในรถเข็นเมื่อคลิก
    if (item.id === 'cart') {
      setCartCount(prev => prev + 1);
    }
    
    // ที่นี่คุณสามารถใช้ React Router ในการนำทาง
    console.log(`Navigate to: ${item.path}`);
  };

  return (
    /* ★ Sticky Bottom Navigation ★ */
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      {/* กรณีมือถือที่มี safe area (เช่น iPhone X ขึ้นไป) */}
      <div className="pb-safe">
        <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
          {navigationItems.map((item) => {
            const isActive = activeTab === item.id;
            const IconComponent = isActive ? item.iconSolid : item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`
                  relative flex flex-col items-center justify-center
                  px-3 py-2 rounded-xl transition-all duration-200 ease-in-out
                  min-w-[64px] group
                  ${isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                {/* ไอคอน */}
                <div className={`
                  transition-transform duration-200
                  ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                `}>
                  <IconComponent className="w-6 h-6" />
                  
                  {/* Badge สำหรับรถเข็น */}
                  {item.badge && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                      {item.badge > 99 ? '99+' : item.badge}
                    </span>
                  )}
                </div>
                
                {/* ข้อความ */}
                <span className={`
                  text-xs font-medium mt-1 transition-colors duration-200
                  ${isActive ? 'text-blue-600' : 'text-gray-500'}
                `}>
                  {item.label}
                </span>
                
                {/* Ripple Effect เมื่อคลิก */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-blue-400 opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;