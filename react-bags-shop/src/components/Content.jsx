import ProductCard from "./ProductCard";
import products from "../data/products";

function Content() {
  return (
    <div className="bg-gray-50 py-14">
      <div className="container mx-auto max-w-[1320px] relative h-auto px-4 lg:px-10">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg">Discover our exclusive collection</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard className="" key={product.id} products={product}/>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Content;
