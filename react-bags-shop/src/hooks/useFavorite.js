import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorite must be used within FavoriteProvider');
    }
    return context;
}; 