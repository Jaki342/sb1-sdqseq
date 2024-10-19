import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ChatbotAssistant from './components/ChatbotAssistant';
import { Product } from './types';

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' },
  { id: 2, name: 'Smartphone', price: 699, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80' },
  { id: 3, name: 'Headphones', price: 199, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
];

function App() {
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleProductHover = (product: Product | null, event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredProduct(product);
    if (product) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <ProductList products={products} onProductHover={handleProductHover} />
      {hoveredProduct && (
        <ChatbotAssistant product={hoveredProduct} position={mousePosition} />
      )}
    </div>
  );
}

export default App;