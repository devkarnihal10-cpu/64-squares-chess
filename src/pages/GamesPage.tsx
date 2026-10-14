import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swords, Search, ArrowRight, Play, Eye } from 'lucide-react';
import { FAMOUS_CHESS_GAMES } from '../data/gamesData';

export const GamesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = FAMOUS_CHESS_GAMES.filter(g => {
    if (searchQuery.trim() === '') return true;
    const q = searchQuery.toLowerCase();
    return (
      g.title.toLowerCase().includes(q) ||
      g.white.toLowerCase().includes(q) ||
      g.black.toLowerCase().includes(q) ||
      g.opening.toLowerCase().includes(q) ||
      g.site.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <Swords className="w-4 h-4 text-amber-300" />
            <span>Immortal Masterpieces</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
            The Greatest Chess Games Ever Played
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Replay immortal clashes that defined generations. Step forward and backward through verified PGN scores, examine grandmaster move commentary, and witness poetic tactical sacrifices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by game title, player, opening, or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#141822] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* Games Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-[#141822] border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all group shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-3 pb-3 border-b border-stone-800/80">
                  <span className="font-mono text-amber-300">{game.year} · {game.site}</span>
                  <span className="font-mono font-bold text-stone-200 bg-[#1e2432] px-2 py-0.5 rounded">
                    {game.result}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-xl font-bold text-stone-100 group-hover:text-[#d4af37] transition-colors">
                  {game.title}
                </h3>

                {/* Players */}
                <div className="mt-2 text-xs font-mono text-stone-300 space-y-0.5">
                  <div>White: <strong className="text-stone-100">{game.white}</strong></div>
                  <div>Black: <strong className="text-stone-100">{game.black}</strong></div>
                </div>

                {/* Opening */}
                <div className="mt-3 text-[11px] font-mono text-stone-400">
                  Opening: <span className="text-amber-200/90">{game.opening} ({game.eco})</span>
                </div>

                {/* Significance */}
                <p className="mt-3 text-xs text-stone-300 leading-relaxed line-clamp-3">
                  {game.significance}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500">
                  {game.event.length > 25 ? `${game.event.substring(0, 25)}...` : game.event}
                </span>
                <Link
                  to={`/games/${game.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d26] hover:bg-[#d4af37] hover:text-[#0c0e12] border border-stone-700 hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-stone-200 transition-colors"
                >
                  <Play className="w-3 h-3 text-amber-400 group-hover:text-[#0c0e12]" />
                  <span>Replay Game</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="py-16 text-center text-stone-400 text-sm bg-[#141822] rounded-xl border border-stone-800">
            No games found matching your search term.
          </div>
        )}

      </div>
    </div>
  );
};
