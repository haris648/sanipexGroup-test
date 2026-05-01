import React, { useMemo, useState } from 'react';
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
    <div className="min-h-screen bg-[#fbf9f6] font-sans text-[#1f1b18] selection:bg-[#1f1b18] selection:text-[#fbf9f6]">
      <Header />
      <main className="pb-32">
        <section className="px-4 md:px-8 pt-12 pb-10 border-b border-[#e8e1d9] bg-gradient-to-b from-[#f6f1ea] via-[#fbf9f6] to-[#fbf9f6]">
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8a7f74]">Brands Directory</p>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                Crafted <span className="text-[#c9b8a4]">Collections</span>
              </h1>
              <p className="text-sm md:text-base text-[#6f645b] leading-relaxed max-w-xl">
                Explore our design-focused partners across bathrooms, kitchens, outdoor living, and architectural lighting.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7a7066]">
                <span className="px-3 py-1 border border-[#d7cbbf] rounded-full">Premium</span>
                <span className="px-3 py-1 border border-[#d7cbbf] rounded-full">Global</span>
                <span className="px-3 py-1 border border-[#d7cbbf] rounded-full">Curated</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-[#e6ded5] rounded-2xl p-6 shadow-[0_10px_30px_rgba(31,27,24,0.08)]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a7f74] font-semibold">Snapshot</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-[#1f1b18]">
                <div>
                  <p className="text-2xl font-black">{BRANDS.length}+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7a7066]">Brands</p>
                </div>
                <div>
                  <p className="text-2xl font-black">4</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7a7066]">Segments</p>
                </div>
                <div>
                  <p className="text-2xl font-black">30+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7a7066]">Markets</p>
                </div>
                <div>
                  <p className="text-2xl font-black">25+ yrs</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7a7066]">Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 md:px-8 pt-6">
          <div className="max-w-7xl mx-auto bg-white/90 border border-[#efe6dc] rounded-2xl shadow-[0_12px_30px_rgba(31,27,24,0.06)]">
            <Filters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeLetter={activeLetter}
              setActiveLetter={setActiveLetter}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              availableLetters={availableLetters}
            />
          </div>
        </div>

        <BrandList groupedBrands={groupedBrands} />
      </main>
    </div>
  );
}

export default Brands2;
