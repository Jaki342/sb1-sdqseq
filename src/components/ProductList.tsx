import React from 'react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onProductHover: (product: Product | null, event: React.MouseEvent<HTMLDivElement>) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductHover }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          onMouseEnter={(e) => onProductHover(product, e)}
          onMouseLeave={(e) => onProductHover(null, e)}
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;