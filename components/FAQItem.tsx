
import React, { useState } from 'react';
import { FAQItemData } from '../types';

interface FAQItemProps {
  item: FAQItemData;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-primary">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left text-brand-text-light hover:text-brand-accent focus:outline-none"
      >
        <span className="text-lg font-medium">{item.question}</span>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-brand-accent transition-transform duration-300`}></i>
      </button>
      {isOpen && (
        <div className="pb-5 px-1 animate-fade-in">
          <p className="text-brand-text-medium whitespace-pre-line">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
