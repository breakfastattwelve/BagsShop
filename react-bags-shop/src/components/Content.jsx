import ProductCard from "./ProductCard";
import products from "../data/products";
import Loadmore from "./Loadmore";
import Header from "./Header";
import ProductModal from './ProductModal';
import { useState, useMemo } from 'react';

function Content() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Total');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Filter products based on selected filter
  const filteredProducts = useMemo(() => {
    switch (selectedFilter) {
      case 'Latest':
        return products.filter(product => product.isNew);
      case 'Best Seller':
        return products.filter(product => product.isBestSeller);
      case 'Discount':
        return products.filter(product => product.discount > 0);
      default:
        return products; // Total - show all products
    }
  }, [selectedFilter]);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-[1320px] relative h-auto px-4 lg:px-10">
        <Header 
          onFilterChange={handleFilterChange}
          selectedFilter={selectedFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              products={product}
              onProductClick={handleProductClick}
              className="
                animate-fade-in-up
                hover:ring-4 
                hover:ring-blue-100 
                hover:ring-opacity-50
              "
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">ไม่พบสินค้า</h3>
            <p className="text-gray-600">ไม่มีสินค้าในหมวดหมู่ที่เลือก</p>
          </div>
        )}

        <div className="mb-20 md:mb-8">
          <Loadmore />
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default Content;
