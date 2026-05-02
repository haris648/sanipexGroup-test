import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BRANDS } from '../data/brands';
import BrandList from '../components/BrandList';
import Header from '../components/Header';
import Filters from '../components/Filters';

function Brands2() {
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
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white px-4 md:px-8 pt-6 pb-2 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs">
            <Link 
              to="/" 
              className="text-gray-400 hover:text-black uppercase tracking-widest font-medium transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-black uppercase tracking-widest font-medium">Brands2</span>
          </nav>
        </div>
      </div>

      <main className="pb-25">
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

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeLetter={activeLetter}
          setActiveLetter={setActiveLetter}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          availableLetters={availableLetters}
        />

        <BrandList groupedBrands={groupedBrands} />
      </main>
    </div>
  );
}

export default Brands2;
