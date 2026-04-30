import React from 'react';
import BrandCard from './BrandCard';

const BrandList = ({ groupedBrands }) => {
  const letters = Object.keys(groupedBrands).sort();

  if (letters.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold uppercase tracking-widest text-black mb-2">No brands found</h3>
        <p className="text-gray-400 text-sm max-w-xs text-center">
          We couldn't find any brands matching your current filters. Try adjusting your search or category selection.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-20">
      {letters.map(letter => (
        <section key={letter} id={`section-${letter}`} className="scroll-mt-60">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-4xl font-black text-black w-12 border-b-4 border-black pb-1 leading-none">{letter}</h2>
            <div className="flex-grow h-[1px] bg-gray-100"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupedBrands[letter].map(brand => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default BrandList;
