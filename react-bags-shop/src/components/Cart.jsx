// Cart.jsx
import React from 'react';
import { useCart } from '../hooks/useCart';

const Cart = () => {
    const { 
        getCartItems, 
        total, 
        amount, 
        totalDiscount,
        formatMoney,
        addToCart,
        subtractFromCart,
        removeFromCart,
        clearCart
    } = useCart();

    const cartItems = getCartItems();

    if (cartItems.length === 0) {
        return (
            <div className="p-8 text-center">
                <div className="text-gray-400 mb-6">
                    <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">ตะกร้าสินค้าว่าง</h3>
                <p className="text-gray-600">ยังไม่มีสินค้าในตะกร้า</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            {/* Cart Items */}
            <div className="space-y-4 mb-6 max-h-80 md:max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200/50 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shadow-sm"
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm md:text-base truncate text-gray-800">{item.name}</h3>
                            <p className="text-gray-600 text-xs md:text-sm mt-1">฿{formatMoney(item.price)}</p>
                            {item.originalPrice > item.price && (
                                <p className="text-gray-400 text-xs md:text-sm line-through">฿{formatMoney(item.originalPrice)}</p>
                            )}
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                            <button 
                                onClick={() => subtractFromCart(item.id)}
                                className="w-7 h-7 md:w-8 md:h-8 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100/80 transition-all duration-200 shadow-sm text-sm"
                            >
                                -
                            </button>
                            <span className="w-6 md:w-8 text-center text-sm md:text-base font-medium text-gray-800">{item.quantity}</span>
                            <button 
                                onClick={() => addToCart(item.id)}
                                className="w-7 h-7 md:w-8 md:h-8 bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100/80 transition-all duration-200 shadow-sm text-sm"
                            >
                                +
                            </button>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-sm md:text-base text-gray-800">฿{formatMoney(item.price * item.quantity)}</p>
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 text-xs md:text-sm hover:text-red-800 mt-1 underline transition-colors"
                            >
                                ลบ
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t border-gray-200/50 pt-4 md:pt-6 space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base text-gray-600">จำนวนสินค้า:</span>
                    <span className="font-semibold text-gray-800">{amount} ชิ้น</span>
                </div>
                {totalDiscount > 0 && (
                    <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base text-gray-600">ส่วนลด:</span>
                        <span className="text-green-600 font-semibold">-฿{formatMoney(totalDiscount)}</span>
                    </div>
                )}
                <div className="flex justify-between items-center text-lg md:text-xl font-bold border-t border-gray-200/50 pt-3 md:pt-4">
                    <span className="text-gray-800">ราคารวม:</span>
                    <span className="text-black">฿{formatMoney(total)}</span>
                </div>
                
                <div className="flex gap-3 pt-2">
                    <button 
                        onClick={clearCart}
                        className="flex-1 bg-gray-200/80 backdrop-blur-sm text-gray-800 py-3 rounded-2xl text-sm md:text-base font-medium hover:bg-gray-300/80 transition-all duration-200 shadow-sm"
                    >
                        ล้างตะกร้า
                    </button>
                    <button className="flex-1 bg-black/90 backdrop-blur-sm text-white py-3 rounded-2xl text-sm md:text-base font-medium hover:bg-black transition-all duration-200 shadow-lg">
                        สั่งซื้อ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;