import { createContext, useEffect, useReducer } from 'react';
import products from '../data/products';
import FavoriteReducer from '../reduce/FavoriteReducer';

const FavoriteContext = createContext();

// Initialize products with isFavorite = false
const initializeProducts = () => {
    return products.map(product => ({
        ...product,
        isFavorite: false
    }));
};

const initialState = {
    products: initializeProducts(),
    favorites: [],
    totalFavorites: 0,
};

export const FavoriteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FavoriteReducer, initialState);

    // Add to favorites
    function addToFavorites(id) {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: id });
    }

    // Remove from favorites
    function removeFromFavorites(id) {
        dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
    }

    // Toggle favorite status
    function toggleFavorite(id) {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
    }

    // Clear all favorites
    function clearFavorites() {
        dispatch({ type: 'CLEAR_FAVORITES' });
    }

    // Get favorite items
    function getFavoriteItems() {
        return state.products.filter(item => item.isFavorite);
    }

    // Check if item is favorite
    function isFavorite(id) {
        const item = state.products.find(item => item.id === id);
        return item ? item.isFavorite : false;
    }

    // Load data from localStorage
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            try {
                const parsedFavorites = JSON.parse(savedFavorites);
                dispatch({ type: 'INITIALIZE_FAVORITES', payload: parsedFavorites });
            } catch (error) {
                console.error('Error loading favorites:', error);
                localStorage.removeItem('favorites');
            }
        }
    }, []);

    // Save data to localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.products));
    }, [state.products]);

    // Calculate total favorites whenever products change
    useEffect(() => {
        dispatch({ type: 'CALCULATE_TOTAL_FAVORITES' });
    }, [state.products]);

    return (
        <FavoriteContext.Provider value={{
            ...state,
            addToFavorites,
            removeFromFavorites,
            toggleFavorite,
            clearFavorites,
            getFavoriteItems,
            isFavorite,
        }}>
            {children}
        </FavoriteContext.Provider>
    );
};

// Export context for useFavorite hook
export { FavoriteContext }; 