import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Product } from '../types';

interface ChatbotAssistantProps {
  product: Product;
  position: { x: number; y: number };
}

const ChatbotAssistant: React.FC<ChatbotAssistantProps> = ({ product, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsOpen(true);
    setMessage(`Hi there! I see you're interested in the ${product.name}. Would you like more information about it or compare it with other products?`);
  }, [product]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={`fixed w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{
        top: `${position.y + 20}px`,
        left: `${position.x + 20}px`,
      }}
    >
      <div className="flex justify-between items-center bg-blue-600 text-white p-2 rounded-t-lg">
        <div className="flex items-center">
          <MessageCircle className="mr-2" size={16} />
          <span className="font-semibold text-sm">AI Assistant</span>
        </div>
        <button onClick={handleClose} className="text-white hover:text-gray-200">
          <X size={16} />
        </button>
      </div>
      <div className="p-3">
        <p className="text-gray-700 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatbotAssistant;