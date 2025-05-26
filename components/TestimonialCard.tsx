
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      {testimonial.imageUrl && (
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.name} 
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-brand-accent"
        />
      )}
      {!testimonial.imageUrl && (
         <div className="w-24 h-24 rounded-full mb-4 border-4 border-brand-accent bg-brand-primary flex items-center justify-center">
           <i className="fas fa-user text-4xl text-brand-accent"></i>
         </div>
      )}
      <blockquote className="text-brand-text-medium italic mb-4 text-sm md:text-base whitespace-pre-line">
        "{testimonial.quote}"
      </blockquote>
      <p className="font-bold text-brand-text-light">{testimonial.name}</p>
      <p className="text-sm text-brand-accent">{testimonial.role}</p>
    </div>
  );
};

export default TestimonialCard;
