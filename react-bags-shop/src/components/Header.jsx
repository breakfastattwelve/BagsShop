function Header({ onFilterChange, selectedFilter = 'Total' }) {
  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Discover our exclusive collection
        </p>
        <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex bg-white rounded-xl p-1 shadow-md">
          <button 
            onClick={() => handleFilterClick('Total')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'Total' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Total
          </button>
          <button 
            onClick={() => handleFilterClick('Latest')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'Latest' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Latest
          </button>
          <button 
            onClick={() => handleFilterClick('Best Seller')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'Best Seller' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Best Seller
          </button>
          <button 
            onClick={() => handleFilterClick('Discount')}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'Discount' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Discount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
