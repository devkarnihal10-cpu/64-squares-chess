import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0c0e12] text-stone-100 px-4 py-16">
      <div className="max-w-md w-full bg-[#141822] border border-stone-800 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#181d28] border border-[#d4af37]/40 flex items-center justify-center mx-auto text-[#d4af37]">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            404 — Square Not Found
          </span>
          <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100">
            Out of Bounds
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
            The page you are looking for has stepped beyond the 64 squares of the board. Check the URL or return to the main hall.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#d4af37] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/live"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#181d26] hover:bg-[#202734] border border-stone-700 text-xs font-medium text-stone-200 transition-colors"
          >
            <span>Watch Live</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
