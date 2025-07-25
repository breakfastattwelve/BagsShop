// import { useState } from 'react';

function Header() {
  return (
    // const [selectedFilter, setSelectedFilter] = useState('Total');

    // const handleFilterClick = (filter) => {
    //     setSelectedFilter(filter);
    // };

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
          <button className="px-6 py-2 rounded-lg bg-black text-white font-semibold">
            Total
          </button>
          <button className="px-6 py-2 rounded-lg text-gray-600 hover:text-gray-900 font-semibold">
            Latest
          </button>
          <button className="px-6 py-2 rounded-lg text-gray-600 hover:text-gray-900 font-semibold">
            Best Seller
          </button>
          <button className="px-6 py-2 rounded-lg text-gray-600 hover:text-gray-900 font-semibold">
            Discount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
