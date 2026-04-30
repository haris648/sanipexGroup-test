import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import BrandList from './components/BrandList';
import { BRANDS } from './data/brands';

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

  // Derived state for available letters based on current search and category filters
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
      
      <main className="pb-32">
        {/* Hero Section */}
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

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-xl italic">S</span>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Sanipex Group</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              A market-leading supplier of high-quality bathroom and tiling solutions, offering a comprehensive range of products for residential and commercial projects.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest">Connect</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest">Legal</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
          <p>© 2026 Sanipex Group. All Rights Reserved.</p>
          <p>Designed with Excellence</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
