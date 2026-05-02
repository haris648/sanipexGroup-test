import React, { useState, useEffect, useRef } from 'react';
import { ALPHABET, CATEGORIES } from '../data/brands';

const Filters = ({ 
  searchTerm, 
  setSearchTerm, 
  activeLetter, 
  setActiveLetter, 
  selectedCategories, 
  setSelectedCategories,
  availableLetters 
}) => {
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const alphabetScrollRef = useRef(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, setSearchTerm]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleLetterClick = (letter) => {
    if (availableLetters.includes(letter)) {
      setActiveLetter(activeLetter === letter ? null : letter);
      
      // Smooth scroll to the section if it exists
      if (activeLetter !== letter) {
        const element = document.getElementById(`section-${letter}`);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  };

  return (
    <div className="bg-white px-4 md:px-8 py-6 sticky top-[73px] z-[90] shadow-sm">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search brands..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-black/5 text-sm transition-all rounded-full placeholder:text-gray-400 placeholder:uppercase placeholder:tracking-widest"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {localSearch && (
            <button 
              onClick={() => { setLocalSearch(''); setSearchTerm(''); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                selectedCategories.includes(category)
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-gray-400 border-gray-100 hover:border-gray-300 hover:text-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
          {(selectedCategories.length > 0 || activeLetter || searchTerm) && (
            <button 
              onClick={() => {
                setSelectedCategories([]);
                setActiveLetter(null);
                setLocalSearch('');
                setSearchTerm('');
              }}
              className="text-[10px] font-bold uppercase tracking-widest text-red-400 hover:text-red-600 ml-2"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Alphabet Filter */}
        <div className="relative group">
          <div 
            ref={alphabetScrollRef}
            className="flex items-center overflow-x-auto hide-scrollbar gap-2 py-2"
          >
            {ALPHABET.map(letter => {
              const isDisabled = !availableLetters.includes(letter);
              const isActive = activeLetter === letter;
              
              return (
                <button
                  key={letter}
                  disabled={isDisabled}
                  onClick={() => handleLetterClick(letter)}
                  className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-black text-white'
                      : isDisabled
                        ? 'text-gray-200 cursor-not-allowed bg-gray-50'
                        : 'bg-gray-100 text-gray-400 hover:text-black hover:bg-gray-200'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
