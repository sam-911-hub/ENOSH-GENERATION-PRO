
import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default GalleryImage;
