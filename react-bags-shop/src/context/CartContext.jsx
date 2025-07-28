import { createContext, useEffect, useReducer } from 'react';
import products from '../data/products';
import CartReducer from '../reduce/CartReducer';

const CartContext = createContext();

// Initialize products with quantity = 0
const initializeProducts = () => {
    return products.map(product => ({
        ...product,
        quantity: 0
    }));
};

const initialState = {
    products: initializeProducts(),
    total: 0,
    amount: 0,
    totalDiscount: 0,
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // Function format money
    function formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    // Add to cart
    function addToCart(id) {
        dispatch({ type: 'ADD_TO_CART', payload: id });
    }

    // Remove from cart
    function removeFromCart(id) {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    }

    // Subtract from cart
    function subtractFromCart(id) {
        dispatch({ type: 'SUBTRACT_FROM_CART', payload: id });
    }

    // Update quantity
    function updateQuantity(id, quantity) {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }

    // Clear cart
    function clearCart() {
        dispatch({ type: 'CLEAR_CART' });
    }

    // Get cart items (only items with quantity > 0)
    function getCartItems() {
        return state.products.filter(item => item.quantity > 0);
    }

    // Get item quantity
    function getItemQuantity(id) {
        const item = state.products.find(item => item.id === id);
        return item ? (item.quantity || 0) : 0;
    }

    // Check if item is in cart
    function isInCart(id) {
        return getItemQuantity(id) > 0;
    }

    // Load data from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                dispatch({ type: 'INITIALIZE_CART', payload: parsedCart });
            } catch (error) {
                console.error('Error loading cart:', error);
                localStorage.removeItem('cart');
            }
        }
    }, []);

    // Save data to localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.products));
    }, [state.products]);

    // Calculate total whenever products change
    useEffect(() => {
        dispatch({ type: 'CALCULATE_TOTAL' });
    }, [state.products]);

    return (
        <CartContext.Provider value={{
            ...state,
            formatMoney,
            addToCart,
            removeFromCart,
            subtractFromCart,
            updateQuantity,
            clearCart,
            getCartItems,
            getItemQuantity,
            isInCart,
        }}>
            {children}
        </CartContext.Provider>
    );
};

// Export context for useCart hook
export { CartContext };