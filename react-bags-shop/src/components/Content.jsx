import ProductCard from "./ProductCard";
import products from "../data/products";
import Loadmore from "./Loadmore";
import Header from "./Header";
import ProductModal from './ProductModal';
import { useState } from 'react';

function Content() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-[1320px] relative h-auto px-4 lg:px-10">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              products={product} // แก้ให้ตรงกับที่ ProductCard รับ
              onProductClick={handleProductClick} // ส่ง function
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
