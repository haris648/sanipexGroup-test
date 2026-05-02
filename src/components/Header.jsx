import React from 'react';
import { NavLink } from 'react-router-dom';
import logoBlack from '../assets/SANIPEXGROUP_Logo_BLACK.svg';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-6 px-4 md:px-8 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-[100]">
      <div className="flex items-center gap-2">
        <img
          src={logoBlack}
          alt="Sanipex Group"
          className="h-8 w-auto"
        />
      </div>
      <nav className="md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
        {/* <a href="#" className="hover:text-black transition-colors">About</a> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-b border-black pb-1'
              : 'hover:text-black transition-colors'
          }
          end
        >
          Brands
        </NavLink>
        <NavLink
          to="/brands-2"
          className={({ isActive }) =>
            isActive
              ? 'text-black border-b border-black pb-1'
              : 'hover:text-black transition-colors'
          }
        >
          Brands 2
        </NavLink>
        {/* <a href="#" className="hover:text-black transition-colors">Projects</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a> */}
      </nav>
      {/* <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
        Enquire
      </button> */}
    </header>
  );
};

export default Header;
