
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  backgroundImageUrl: string;
  title: string;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, backgroundImageUrl, title, className }) => {
  return (
    <div 
      className={`relative min-h-[calc(100vh-var(--navbar-height,80px)-var(--footer-height,200px))] bg-cover bg-center bg-no-repeat flex flex-col items-center py-10 md:py-16 animate-fade-in ${className || ''}`}
      style={{ 
        backgroundImage: `linear-gradient(rgba(26, 32, 44, 0.85), rgba(26, 32, 44, 0.95)), url(${backgroundImageUrl})`,
        '--navbar-height': '80px', /* Approximate navbar height */
        '--footer-height': '200px' /* Approximate footer height */
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex-grow w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-brand-accent text-center mb-8 sm:mb-12 animate-fade-in-up">
          {title}
        </h1>
        <div className="bg-brand-primary bg-opacity-70 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
