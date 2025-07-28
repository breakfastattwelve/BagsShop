const FavoriteReducer = (state, action) => {
    switch (action.type) {
        case 'CALCULATE_TOTAL_FAVORITES': {
            const totalFavorites = state.products.filter(item => item.isFavorite).length;
            return {
                ...state,
                totalFavorites
            };
        }

        case 'ADD_TO_FAVORITES': {
            const updatedProducts = state.products.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isFavorite: true
                    };
                }
                return item;
            });
            return {
                ...state,
                products: updatedProducts
            };
        }

        case 'REMOVE_FROM_FAVORITES': {
            const updatedProducts = state.products.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isFavorite: false
                    };
                }
                return item;
            });
            return {
                ...state,
                products: updatedProducts
            };
        }

        case 'TOGGLE_FAVORITE': {
            const updatedProducts = state.products.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isFavorite: !item.isFavorite
                    };
                }
                return item;
            });
            return {
                ...state,
                products: updatedProducts
            };
        }

        case 'CLEAR_FAVORITES': {
            const clearedProducts = state.products.map((item) => ({
                ...item,
                isFavorite: false
            }));
            return {
                ...state,
                products: clearedProducts,
                totalFavorites: 0
            };
        }

        case 'INITIALIZE_FAVORITES': {
            // Merge saved favorites data with original products
            const savedProducts = action.payload;
            const mergedProducts = state.products.map((originalProduct) => {
                const savedProduct = savedProducts.find(p => p.id === originalProduct.id);
                return {
                    ...originalProduct,
                    isFavorite: savedProduct ? savedProduct.isFavorite : false
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

export default FavoriteReducer; 