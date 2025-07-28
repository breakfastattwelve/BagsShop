import { VscHeart } from "react-icons/vsc";
import { useCart } from '../hooks/useCart';
import { useFavorite } from '../hooks/useFavorite';

function ProductCard({ products, onProductClick }) {
  const { id, name, price, originalPrice, image, discount, isNew, isBestSeller } = products;
  const { addToCart, getItemQuantity, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorite();
  const quantity = getItemQuantity(products.id);

  const handleCardClick = (e) => {
    if (e.target.closest('button')) {
      return;
    }
    onProductClick(products);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(products.id);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    toggleFavorite(products.id);
  };

  return (
    <div
      id={id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-gray-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative bg-gray-200 aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </div>
        )}

        {/* New Badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}

        {/* Best Seller Badge */}
        {isBestSeller && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            BEST
          </div>
        )}

        {/* Heart Button */}
        <button
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
          onClick={handleHeartClick}
        >
          <VscHeart className={`w-5 h-5 transition-colors ${isFavorite(products.id) ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
          </div>
          <span className="text-gray-500 text-sm">(4.8)</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-gray-800">฿{price.toLocaleString()}</span>
          {originalPrice > price && (
            <>
              <span className="text-gray-500 line-through">฿{originalPrice.toLocaleString()}</span>
              <span className="text-green-600 text-sm font-medium">
                Saved: ฿{(originalPrice - price).toLocaleString()}
              </span>
            </>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          {isInCart(products.id) ? `เพิ่มแล้ว (${quantity})` : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
