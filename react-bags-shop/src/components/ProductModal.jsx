import { VscClose } from 'react-icons/vsc';

function ProductModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="relative bg-gray-500 opacity-50 w-full h-full">
      </div>
      <div className="absolute bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-70">
        {/* Header */}
        <div className="relative flex justify-center items-center p-6 border-b">
          <h2 className="text-2xl font-bold">รายละเอียดสินค้า</h2>
          <button onClick={onClose} className="absolute right-6 p-2 hover:bg-gray-100 rounded-full">
            <VscClose className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* รูปภาพ */}
          <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          
          {/* รายละเอียด */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">{product.name}</h3>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-green-600">฿{product.price.toLocaleString()}</span>
              <span className="text-xl text-gray-500 line-through">฿{product.originalPrice.toLocaleString()}</span>
            </div>
            <p className="text-gray-600 text-lg">{product.details}</p>
            
            {/* เพิ่มปุ่ม Add to Cart */}
            <button className="w-full bg-black text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl mt-15">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;