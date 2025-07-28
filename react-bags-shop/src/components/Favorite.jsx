import React from 'react';
import { useFavorite } from '../hooks/useFavorite';
import { useCart } from '../hooks/useCart';

const Favorite = () => {
    const { 
        getFavoriteItems, 
        totalFavorites,
        removeFromFavorites,
        clearFavorites
    } = useFavorite();

    const { addToCart, getItemQuantity, isInCart } = useCart();

    const favoriteItems = getFavoriteItems();

    if (favoriteItems.length === 0) {
        return (
            <div className="p-8 text-center">
                <div className="text-gray-400 mb-6">
                    <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">ยังไม่มีสินค้าที่ชื่นชอบ</h3>
                <p className="text-gray-600">กดไอคอนหัวใจเพื่อเพิ่มสินค้าที่ชื่นชอบ</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Favorite Items */}
            <div className="space-y-4 mb-6 max-h-80 md:max-h-96 overflow-y-auto">
                {favoriteItems.map((item) => {
                    const quantity = getItemQuantity(item.id);
                    const isInCartItem = isInCart(item.id);
                    
                    return (
                        <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200/50 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shadow-sm"
                            />
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm md:text-base truncate text-gray-800">{item.name}</h3>
                                <p className="text-gray-600 text-xs md:text-sm mt-1">฿{item.price.toLocaleString()}</p>
                                {item.originalPrice > item.price && (
                                    <p className="text-gray-400 text-xs md:text-sm line-through">฿{item.originalPrice.toLocaleString()}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => addToCart(item.id)}
                                    className={`px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                                        isInCartItem 
                                            ? 'bg-green-600 text-white hover:bg-green-700' 
                                            : 'bg-black text-white hover:bg-gray-800'
                                    }`}
                                >
                                    {isInCartItem ? `เพิ่มแล้ว (${quantity})` : 'เพิ่มลงตะกร้า'}
                                </button>
                                <button 
                                    onClick={() => removeFromFavorites(item.id)}
                                    className="text-red-600 text-xs md:text-sm hover:text-red-800 underline transition-colors"
                                >
                                    ลบ
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary */}
            <div className="border-t border-gray-200/50 pt-4 md:pt-6 space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">จำนวนสินค้าที่ชื่นชอบ:</span>
                    <span className="font-semibold text-gray-800">{totalFavorites} ชิ้น</span>
                </div>
                
                <div className="flex gap-3 pt-2">
                    <button 
                        onClick={clearFavorites}
                        className="flex-1 bg-gray-200/80 backdrop-blur-sm text-gray-800 py-3 rounded-2xl text-sm md:text-base font-medium hover:bg-gray-300/80 transition-all duration-200 shadow-sm"
                    >
                        ล้างทั้งหมด
                    </button>
                    <button 
                        onClick={() => {
                            favoriteItems.forEach(item => addToCart(item.id));
                        }}
                        className="flex-1 bg-black/90 backdrop-blur-sm text-white py-3 rounded-2xl text-sm md:text-base font-medium hover:bg-black transition-all duration-200 shadow-lg"
                    >
                        เพิ่มทั้งหมดลงตะกร้า
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Favorite; 