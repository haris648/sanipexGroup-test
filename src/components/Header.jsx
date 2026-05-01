import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-6 px-4 md:px-8 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-[100]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-xl italic">S</span>
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase text-black">Sanipex Group</span>
      </div>
      <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
        <a href="#" className="hover:text-black transition-colors">About</a>
        <a href="#" className="text-black border-b border-black pb-1">Brands</a>
        <a href="#" className="hover:text-black transition-colors">Projects</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
      </nav>
      <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
        Enquire
      </button>
    </header>
  );
};

export default Header;
