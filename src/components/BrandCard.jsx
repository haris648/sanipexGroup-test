import React from 'react';

const CATEGORY_STYLES = {
  Bathroom: {
    tint: 'from-[#e7f0f7] via-white to-[#f9fbff]',
    accent: '#8fb2c4',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%238fb2c4' stroke-width='4' opacity='0.5'%3E%3Cpath d='M120 28 C92 70 72 98 72 132 a48 48 0 0 0 96 0 c0-34-20-62-48-104 z'/%3E%3C/g%3E%3C/svg%3E",
    blurb: 'Refined fittings and spa-inspired finishes.',
  },
  Kitchen: {
    tint: 'from-[#f6efe4] via-white to-[#fdf9f2]',
    accent: '#c7a876',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%23c7a876' stroke-width='4' opacity='0.5'%3E%3Cpath d='M80 44 v64 c0 16 10 28 24 32 v56'/%3E%3Cpath d='M110 44 v64'/%3E%3Cpath d='M140 44 v64'/%3E%3Cpath d='M170 44 c0 50-14 76-36 92 v84'/%3E%3C/g%3E%3C/svg%3E",
    blurb: 'Performance appliances with tailored style.',
  },
  Outdoor: {
    tint: 'from-[#e9f4ec] via-white to-[#f5fbf6]',
    accent: '#7fa68a',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%237fa68a' stroke-width='4' opacity='0.5'%3E%3Cpath d='M120 40 c-24 22-32 52-12 80 8 10 8 26-2 40'/%3E%3Cpath d='M120 40 c24 22 32 52 12 80-8 10-8 26 2 40'/%3E%3C/g%3E%3C/svg%3E",
    blurb: 'Weather-ready collections for open-air living.',
  },
  Lighting: {
    tint: 'from-[#fbf1dd] via-white to-[#fff9ee]',
    accent: '#d3a85d',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%23d3a85d' stroke-width='4' opacity='0.5'%3E%3Cpath d='M120 34 c-30 0-54 24-54 54 0 20 10 38 26 48 8 6 12 16 12 26 v10 h32 v-10 c0-10 4-20 12-26 16-10 26-28 26-48 0-30-24-54-54-54 z'/%3E%3Cpath d='M96 190 h48'/%3E%3C/g%3E%3C/svg%3E",
    blurb: 'Architectural lighting with signature glow.',
  },
  Others: {
    tint: 'from-[#f0eef6] via-white to-[#f8f7fb]',
    accent: '#b7afc7',
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cg fill='none' stroke='%23b7afc7' stroke-width='4' opacity='0.5'%3E%3Crect x='56' y='56' width='128' height='128' rx='16'/%3E%3Cpath d='M84 120 h72 M120 84 v72'/%3E%3C/g%3E%3C/svg%3E",
    blurb: 'Specialty partners with niche expertise.',
  },
};

const BrandCard = ({ brand, variant = 'default' }) => {
  const isFlip = variant === 'flip';
  const categoryStyle = CATEGORY_STYLES[brand.category] || CATEGORY_STYLES.Others;

  if (!isFlip) {
    return (
      <div className="group flex flex-col items-center justify-center p-8 border border-gray-100 bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 cursor-pointer h-full min-h-[160px] rounded-lg">
        <div className="w-full h-full flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-w-[95%] max-h-[60px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
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
  }

  return (
    <div className="group h-full min-h-[200px] [perspective:1200px] cursor-pointer">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={`absolute inset-0 rounded-2xl border border-[#e6ded5] bg-gradient-to-br ${categoryStyle.tint} shadow-[0_16px_40px_rgba(31,27,24,0.12)] [backface-visibility:hidden]`}
        >
          <div className="flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5c524a]">
              <span>{brand.category}</span>
              <span className="h-[1px] w-10" style={{ backgroundColor: categoryStyle.accent }}></span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-[85%] max-h-[70px] object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#7a7066]">
              <span>Explore</span>
              <span>Hover</span>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 rounded-2xl border border-[#1f1b18] bg-[#1f1b18] text-white shadow-[0_18px_50px_rgba(31,27,24,0.35)] [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <div className="flex h-full flex-col justify-between p-6">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
              <span>Brand</span>
              <span className="h-[1px] w-10 bg-white/40"></span>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em]">{brand.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {categoryStyle.blurb}
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/60">
              <span>{brand.category}</span>
              <span>Discover</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
