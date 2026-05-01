import React, { useState, useMemo } from 'react';
import { BRANDS } from './data/brands';
import BrandList from './components/BrandList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetter, setActiveLetter] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredBrands = useMemo(() => {
    return BRANDS.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLetter = activeLetter ? brand.letter === activeLetter : true;
      const matchesCategory = selectedCategories.length > 0 
        ? selectedCategories.includes(brand.category) 
        : true;
      
      return matchesSearch && matchesLetter && matchesCategory;
    });
  }, [searchTerm, activeLetter, selectedCategories]);

  const groupedBrands = useMemo(() => {
    const groups = {};
    filteredBrands.forEach(brand => {
      if (!groups[brand.letter]) {
        groups[brand.letter] = [];
      }
      groups[brand.letter].push(brand);
    });
    return groups;
  }, [filteredBrands]);

  // available letters based on current search and category filters
  const availableLetters = useMemo(() => {
    const letters = new Set();
    BRANDS.filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length > 0 
        ? selectedCategories.includes(brand.category) 
        : true;
      return matchesSearch && matchesCategory;
    }).forEach(brand => letters.add(brand.letter));
    return Array.from(letters);
  }, [searchTerm, selectedCategories]);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      
      
      <main className="pb-32">
        
        <div className="bg-white px-4 md:px-8 pt-16 pb-8 border-b border-gray-50">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Our Partners</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              World-Class <span className="text-gray-300">Brands</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Discover our curated collection of premium brands for bathrooms, kitchens, outdoor living, and architectural lighting.
            </p>
          </div>
        </div>

        <BrandList groupedBrands={groupedBrands} />
      </main>

      
    </div>
  );
}

export default App;
