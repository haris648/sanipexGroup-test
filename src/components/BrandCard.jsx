import React from 'react';

const BrandCard = ({ brand }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-8 border border-gray-100 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 cursor-pointer h-full min-h-[160px] rounded-lg">
      <div className="w-full h-full flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="max-w-full max-h-[60px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-auto pt-4 border-t border-transparent group-hover:border-gray-100 w-full text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
          {brand.name}
        </h3>
        <p className="text-[10px] text-gray-300 uppercase tracking-tighter mt-1 group-hover:text-gray-500 transition-colors">
          {brand.category}
        </p>
      </div>
    </div>
  );
};

export default BrandCard;
