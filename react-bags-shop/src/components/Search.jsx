import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    
    const { products } = useCart();

    // Filter options
    const filterOptions = [
        { id: 'all', label: 'ทั้งหมด' },
        { id: 'new', label: 'สินค้าใหม่' },
        { id: 'bestSeller', label: 'ขายดี' },
        { id: 'discount', label: 'ลดราคา' }
    ];

    // Search and filter products
    useEffect(() => {
        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            
            if (!matchesSearch) return false;
            
            switch (activeFilter) {
                case 'new':
                    return product.isNew;
                case 'bestSeller':
                    return product.isBestSeller;
                case 'discount':
                    return product.discount > 0;
                default:
                    return true;
            }
        });
        
        setFilteredProducts(filtered);
    }, [searchTerm, activeFilter, products]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setActiveFilter('all');
    };

    return (
        <div className="p-6">
            {/* Search Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4"></h2>
                
                {/* Search Input */}
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="ค้นหาชื่อสินค้า..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                    <svg 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {searchTerm && (
                        <button
                            onClick={clearSearch}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                    {filterOptions.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleFilterChange(option.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                activeFilter === option.id
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Results */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        ผลการค้นหา
                    </h3>
                    <span className="text-sm text-gray-600">
                        พบ {filteredProducts.length} รายการ
                    </span>
                </div>

                {searchTerm && filteredProducts.length === 0 && (
                    <div className="text-center py-8">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">ไม่พบสินค้า</h3>
                        <p className="text-gray-600">ลองค้นหาด้วยคำอื่น หรือล้างตัวกรอง</p>
                    </div>
                )}

                {!searchTerm && (
                    <div className="text-center py-8">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">เริ่มต้นค้นหา</h3>
                        <p className="text-gray-600">พิมพ์ชื่อสินค้าที่ต้องการค้นหา</p>
                    </div>
                )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 && (
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-h-96 md:max-h-[70vh] overflow-y-auto">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            products={product}
                            onProductClick={handleProductClick}
                        />
                    ))}
                </div>
            )}

            {/* Product Modal */}
            <ProductModal
                isOpen={isModalOpen}
                onClose={closeModal}
                product={selectedProduct}
            />
        </div>
    );
};

export default Search; 