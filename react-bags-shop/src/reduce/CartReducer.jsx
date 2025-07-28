//กระบวนการจัดการ state ผ่าน action
const CartReducer = (state, action) => {
    switch (action.type) {
        case 'CALCULATE_TOTAL': {
            const { total, amount, totalDiscount } = state.products.reduce((cartTotal, item) => {
                const { price, quantity = 0, originalPrice } = item;
                const itemTotal = price * quantity;
                const itemDiscount = (originalPrice - price) * quantity;
                
                cartTotal.total += itemTotal;
                cartTotal.amount += quantity;
                cartTotal.totalDiscount += itemDiscount;
                
                return cartTotal;
            }, { total: 0, amount: 0, totalDiscount: 0 });

            return {
                ...state,
                total,
                amount,
                totalDiscount
            };
        }

        case 'ADD_TO_CART': {
            const updatedProductsAdd = state.products.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: (item.quantity || 0) + 1
                    };
                }
                return item;
            });
            return {
                ...state,
                products: updatedProductsAdd
            };
        }

        case 'REMOVE_FROM_CART': {
            const updatedProductsRemove = state.products.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: 0
                    };
                }
                return item;
            });
            return {
                ...state,
                products: updatedProductsRemove
            };
        }

        case 'SUBTRACT_FROM_CART': {
            const updatedProductsSubtract = state.products.map((item) => {
                if (item.id === action.payload) {
                    const newQuantity = Math.max(0, (item.quantity || 0) - 1);
                    return {
                        ...item,
                        quantity: newQuantity
                    };
                }
                return item;
            });
            
            return {
                ...state,
                products: updatedProductsSubtract
            };
        }

        case 'UPDATE_QUANTITY': {
            const updatedProductsQuantity = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: Math.max(0, action.payload.quantity)
                    };
                }
                return item;
            });
            
            return {
                ...state,
                products: updatedProductsQuantity
            };
        }

        case 'CLEAR_CART': {
            const clearedProducts = state.products.map((item) => ({
                ...item,
                quantity: 0
            }));
            return {
                ...state,
                products: clearedProducts,
                total: 0,
                amount: 0,
                totalDiscount: 0
            };
        }

        case 'INITIALIZE_CART': {
            // Merge saved cart data with original products
            const savedProducts = action.payload;
            const mergedProducts = state.products.map((originalProduct) => {
                const savedProduct = savedProducts.find(p => p.id === originalProduct.id);
                return {
                    ...originalProduct,
                    quantity: savedProduct ? savedProduct.quantity : 0
                };
            });
            return {
                ...state,
                products: mergedProducts
            };
        }

        default:
            return state;
    }
};

export default CartReducer;