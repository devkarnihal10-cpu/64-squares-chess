import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Radio } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/history', label: 'History' },
    { to: '/live', label: 'Live' },
    { to: '/players', label: 'Players' },
    { to: '/learn', label: 'Learn' },
    { to: '/games', label: 'Games' },
    { to: '/news', label: 'Blog & News' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0d10]/95 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link to="/" className="flex items-center gap-2.5 text-stone-100 group shrink-0">
          <div className="w-8 h-8 rounded bg-[#161a22] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-inner group-hover:border-[#d4af37] transition-colors">
            {/* Minimalist Chess Knight Icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19 20H5V18C5 17 6 15 8 14C7 13 6 11 6 9C6 6 8 3 12 3C15 3 17 5 17 8C17 9 16 10 15 11C17 12 18 14 18 16L19 20ZM12 5C9.5 5 8 6.8 8 9C8 10.3 8.7 11.5 9.7 12.2L10.5 12.8L9.7 13.4C8 14.6 7.1 16.2 7 18H17L16.2 14.8C15.8 13.5 14.8 12.5 13.5 11.8L12.7 11.4L13.5 10.9C14.4 10.3 15 9.2 15 8C15 6.3 13.7 5 12 5Z" />
            </svg>
          </div>
          <span className="font-serif-display text-lg tracking-wider font-semibold text-stone-100 group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
            64 SQUARES
          </span>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to || 
              (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/live"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#181d26] hover:bg-[#202734] border border-stone-700 hover:border-[#d4af37]/60 text-xs font-medium text-stone-200 transition-colors whitespace-nowrap"
          >
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span>Watch Live</span>
          </Link>

          <Link
            to="/learn"
            className="px-4 py-2 rounded bg-[#d4af37] hover:bg-[#c29d2b] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors whitespace-nowrap"
          >
            Start Course
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1117] border-b border-stone-800 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to || 
              (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  isActive
                    ? 'bg-[#181d26] text-[#d4af37]'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-stone-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
