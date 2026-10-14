import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Search, Filter, ArrowRight, Trophy, Star } from 'lucide-react';
import { CHESS_PLAYERS } from '../data/playersData';

export const PlayersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [eraFilter, setEraFilter] = useState<string>('All');

  const eras = [
    'All',
    'Modern & Digital',
    'Indian Prodigies',
    'Soviet Hegemony',
    'Classical & Romantic'
  ];

  const filteredPlayers = CHESS_PLAYERS.filter(player => {
    if (eraFilter !== 'All' && player.era !== eraFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = player.name.toLowerCase().includes(q);
      const matchCountry = player.country.toLowerCase().includes(q);
      const matchStyle = player.playingStyle.toLowerCase().includes(q);
      return matchName || matchCountry || matchStyle;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <Crown className="w-4 h-4 text-amber-300" />
            <span>Grandmaster Pantheon</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
            Legends and Champions of Chess
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            From Emanuel Lasker's 27-year championship reign to Garry Kasparov's volcanic dominance, Viswanathan Anand's Indian revolution, Magnus Carlsen's peak 2882 technique, and teenage prodigy D. Gukesh.
          </p>
        </div>

        {/* Search & Era Filter Bar */}
        <div className="bg-[#141822] border border-stone-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by player name, nation, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#0d1016] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Era Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-stone-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Era:</span>
            </span>
            {eras.map(era => (
              <button
                key={era}
                onClick={() => setEraFilter(era)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  eraFilter === era
                    ? 'bg-[#d4af37] text-[#0c0e12] font-semibold shadow-sm'
                    : 'bg-[#181d26] text-stone-400 hover:text-stone-100 hover:bg-[#202734]'
                }`}
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        {/* Players Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="bg-[#141822] border border-stone-800 rounded-xl p-6 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all group shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Top strip: Country and Era */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-3 border-b border-stone-800/80">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[#d4af37] font-semibold">{player.country}</span>
                    <span>·</span>
                    <span className="font-mono text-stone-400">{player.bornYear}{player.diedYear ? `–${player.diedYear}` : ''}</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">{player.era}</span>
                </div>

                {/* Player Name and Title */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-display text-2xl font-bold text-stone-100 group-hover:text-[#d4af37] transition-colors">
                      {player.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#1d2330] text-amber-300 border border-amber-900/40">
                      {player.title}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-stone-400">
                    Peak Classical Rating: <strong className="text-stone-200">{player.peakRating}</strong>
                    {player.peakRatingYear && <span className="text-stone-500"> ({player.peakRatingYear})</span>}
                  </div>
                </div>

                {/* Style */}
                <div className="mt-4 p-3 rounded bg-[#0e1117] border border-stone-800/60 text-xs text-stone-300">
                  <span className="text-[#d4af37] font-semibold block mb-0.5">Playing Style:</span>
                  <span className="text-stone-300 leading-snug">{player.playingStyle}</span>
                </div>

                {/* Short Bio */}
                <p className="mt-4 text-xs text-stone-300 leading-relaxed line-clamp-3">
                  {player.shortBio}
                </p>

                {/* Key Achievement bullet */}
                {player.majorAchievements.length > 0 && (
                  <div className="mt-4 flex items-start gap-2 text-xs text-amber-200/90">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{player.majorAchievements[0]}</span>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-[11px] font-serif-display italic text-stone-400 truncate max-w-[170px]">
                  {player.famousGames[0]?.title || 'Legendary Match'}
                </span>
                <Link
                  to={`/players/${player.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Detailed Biography</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="py-16 text-center text-stone-400 text-sm bg-[#141822] rounded-xl border border-stone-800">
            No grandmasters found matching your query. Try resetting your search or filter.
          </div>
        )}

      </div>
    </div>
  );
};
