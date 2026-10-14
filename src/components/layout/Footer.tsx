import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090d] border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-stone-100 group">
              <div className="w-8 h-8 rounded bg-[#161a22] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 20H5V18C5 17 6 15 8 14C7 13 6 11 6 9C6 6 8 3 12 3C15 3 17 5 17 8C17 9 16 10 15 11C17 12 18 14 18 16L19 20ZM12 5C9.5 5 8 6.8 8 9C8 10.3 8.7 11.5 9.7 12.2L10.5 12.8L9.7 13.4C8 14.6 7.1 16.2 7 18H17L16.2 14.8C15.8 13.5 14.8 12.5 13.5 11.8L12.7 11.4L13.5 10.9C14.4 10.3 15 9.2 15 8C15 6.3 13.7 5 12 5Z" />
                </svg>
              </div>
              <span className="font-serif-display text-lg tracking-wider font-semibold text-stone-100">
                64 SQUARES
              </span>
            </Link>
            
            <p className="font-serif-display text-amber-200/90 text-sm italic">
              “64 Squares. Infinite Possibilities.”
            </p>
            
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              The premier editorial destination dedicated to the royal game. Chronicling chess history from sixth-century Chaturanga to modern silicon intelligence, broadcasting live grandmaster encounters, and training the next generation of players.
            </p>

            <div className="pt-2 text-xs text-stone-500">
              <span>Open broadcast telemetry via Lichess Open API</span>
              <span className="mx-2">·</span>
              <span>PGN validation via chess.js</span>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#d4af37] transition-colors">Home Gateway</Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-[#d4af37] transition-colors">History & Origins</Link>
              </li>
              <li>
                <Link to="/live" className="hover:text-[#d4af37] transition-colors">Live Match Centre</Link>
              </li>
              <li>
                <Link to="/players" className="hover:text-[#d4af37] transition-colors">Legends & Champions</Link>
              </li>
              <li>
                <Link to="/learn" className="hover:text-[#d4af37] transition-colors">Beginner Academy</Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-[#d4af37] transition-colors">Famous Games Archive</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#d4af37] transition-colors">Blog & Chess Articles</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#d4af37] transition-colors">About & Editorial</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Chess Academy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/learn/intro" className="hover:text-[#d4af37] transition-colors">1. The Chessboard</Link>
              </li>
              <li>
                <Link to="/learn/pieces" className="hover:text-[#d4af37] transition-colors">2. How Pieces Move</Link>
              </li>
              <li>
                <Link to="/learn/rules" className="hover:text-[#d4af37] transition-colors">3. Essential Rules</Link>
              </li>
              <li>
                <Link to="/learn/strategy" className="hover:text-[#d4af37] transition-colors">4. Opening Principles</Link>
              </li>
              <li>
                <Link to="/learn/tactics" className="hover:text-[#d4af37] transition-colors">5. Basic Tactics</Link>
              </li>
              <li>
                <Link to="/learn/openings" className="hover:text-[#d4af37] transition-colors">6. Key Openings</Link>
              </li>
              <li>
                <Link to="/learn/endgames" className="hover:text-[#d4af37] transition-colors">7. Fundamental Endgames</Link>
              </li>
              <li>
                <Link to="/learn/practice" className="hover:text-[#d4af37] transition-colors">8. Practice Routine</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Player Highlights & Eras */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Featured Champions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/players/magnus-carlsen" className="hover:text-[#d4af37] transition-colors">Magnus Carlsen</Link>
              </li>
              <li>
                <Link to="/players/viswanathan-anand" className="hover:text-[#d4af37] transition-colors">Viswanathan Anand</Link>
              </li>
              <li>
                <Link to="/players/gukesh-dommaraju" className="hover:text-[#d4af37] transition-colors">D. Gukesh</Link>
              </li>
              <li>
                <Link to="/players/garry-kasparov" className="hover:text-[#d4af37] transition-colors">Garry Kasparov</Link>
              </li>
              <li>
                <Link to="/players/bobby-fischer" className="hover:text-[#d4af37] transition-colors">Bobby Fischer</Link>
              </li>
              <li>
                <Link to="/players/judit-polgar" className="hover:text-[#d4af37] transition-colors">Judit Polgár</Link>
              </li>
              <li>
                <Link to="/players/mikhail-tal" className="hover:text-[#d4af37] transition-colors">Mikhail Tal</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} 64 Squares. Built for chess lovers, scholars, and contenders worldwide.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-stone-300 transition-colors">Editorial Policy</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-stone-300 transition-colors">Historical Sources</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-stone-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
