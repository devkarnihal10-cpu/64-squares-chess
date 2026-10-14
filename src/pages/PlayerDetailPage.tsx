import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CHESS_PLAYERS } from '../data/playersData';
import { FAMOUS_CHESS_GAMES } from '../data/gamesData';
import { 
  ChevronRight, 
  Crown, 
  Trophy, 
  Award, 
  Quote, 
  Swords, 
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export const PlayerDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const player = CHESS_PLAYERS.find(p => p.slug === slug);

  if (!player) {
    return (
      <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-20 px-4 text-center">
        <h1 className="font-serif-display text-2xl text-stone-200">Player Profile Not Found</h1>
        <p className="text-stone-400 text-sm mt-2">The grandmaster profile requested does not exist in our directory.</p>
        <div className="mt-6">
          <Link to="/players" className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Players</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related players from the same era
  const relatedPlayers = CHESS_PLAYERS.filter(p => p.id !== player.id && p.era === player.era).slice(0, 3);

  // Check if any famous game features this player
  const relatedGames = FAMOUS_CHESS_GAMES.filter(
    g => g.white.toLowerCase().includes(player.name.toLowerCase().split(' ')[1] || player.name.toLowerCase()) ||
         g.black.toLowerCase().includes(player.name.toLowerCase().split(' ')[1] || player.name.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-400 font-mono">
          <Link to="/" className="hover:text-stone-200 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link to="/players" className="hover:text-stone-200 transition-colors">Players</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[#d4af37] font-semibold">{player.name}</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-stone-800 pb-8">
            <div className="flex items-start gap-5">
              {/* Grandmaster crest avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1d2432] via-[#161a22] to-[#0c0e12] border-2 border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] shadow-xl shrink-0">
                <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-wider">
                  {player.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] font-mono text-xs font-bold">
                    {player.title}
                  </span>
                  <span className="text-xs font-mono text-stone-400">{player.country} ({player.countryCode})</span>
                  <span>·</span>
                  <span className="text-xs font-mono text-stone-400">{player.bornYear}{player.diedYear ? ` – ${player.diedYear}` : ''}</span>
                </div>
                <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100">
                  {player.name}
                </h1>
                {player.fideRank && (
                  <p className="text-xs sm:text-sm font-mono text-amber-300/90 font-medium">
                    {player.fideRank}
                  </p>
                )}
              </div>
            </div>

            {/* Peak rating badge box */}
            <div className="p-4 rounded-xl bg-[#0d1016] border border-stone-800/80 text-center min-w-[140px] shrink-0">
              <span className="text-[11px] font-mono uppercase text-stone-400 block">Peak FIDE Rating</span>
              <strong className="text-2xl sm:text-3xl font-mono font-bold text-[#d4af37] block mt-0.5">
                {player.peakRating}
              </strong>
              {player.peakRatingYear && (
                <span className="text-[10px] font-mono text-stone-500">Achieved {player.peakRatingYear}</span>
              )}
            </div>
          </div>

          {/* Quote */}
          {player.quote && (
            <div className="p-4 sm:p-5 rounded-lg bg-[#0d1016]/90 border border-stone-800/80 flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <p className="font-serif-display text-sm sm:text-base italic text-stone-200 leading-relaxed">
                “{player.quote}”
              </p>
            </div>
          )}

          {/* Strategic Strengths & Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-lg bg-[#11141c] border border-stone-800/70 space-y-1.5">
              <strong className="text-[#d4af37] uppercase tracking-wider block text-[11px]">Playing Style:</strong>
              <p className="text-stone-300 leading-relaxed">{player.playingStyle}</p>
            </div>
            <div className="p-4 rounded-lg bg-[#11141c] border border-stone-800/70 space-y-1.5">
              <strong className="text-[#d4af37] uppercase tracking-wider block text-[11px]">Strategic Strengths:</strong>
              <ul className="space-y-1 text-stone-300">
                {player.strategicStrengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#d4af37]">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Biography & Milestones */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-6">
          <h2 className="font-serif-display text-2xl font-bold text-stone-100 border-b border-stone-800 pb-4">
            Biography & Career Milestones
          </h2>
          <div className="space-y-4 text-stone-300 text-sm leading-relaxed max-w-none">
            {player.biography.map((p, idx) => (
              <p key={idx} className="text-stone-300 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Major Achievements & Titles */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
            <Trophy className="w-4 h-4 text-amber-300" />
            <span>Honors & Championship Titles</span>
          </div>
          <h2 className="font-serif-display text-2xl font-bold text-stone-100">
            Championship Record
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300">
            {player.majorAchievements.map((ach, idx) => (
              <li key={idx} className="p-3.5 rounded bg-[#0d1016] border border-stone-800/80 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-snug text-stone-200">{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notable Games */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
            <Swords className="w-4 h-4 text-amber-300" />
            <span>Legendary Encounters</span>
          </div>
          <h2 className="font-serif-display text-2xl font-bold text-stone-100">
            Famous Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {player.famousGames.map((game, gIdx) => (
              <div key={gIdx} className="p-4 rounded-xl bg-[#0d1016] border border-stone-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono text-amber-300">{game.year}</span>
                  <span className="font-mono font-bold text-stone-300">{game.result}</span>
                </div>
                <h4 className="font-serif-display text-base font-bold text-stone-100">
                  {game.title}
                </h4>
                <div className="text-xs font-mono text-stone-400">
                  {game.white} vs {game.black}
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {game.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Replay Link if available */}
          {relatedGames.length > 0 && (
            <div className="mt-4 p-4 rounded-lg bg-[#181d28] border border-[#d4af37]/40 flex items-center justify-between text-xs">
              <div>
                <strong className="text-stone-100 block font-serif-display text-sm">
                  Interactive Masterpiece Replay Available
                </strong>
                <span className="text-stone-400 text-xs">
                  Replay {relatedGames[0].title} with step-by-step move notation and commentary.
                </span>
              </div>
              <Link
                to={`/games/${relatedGames[0].id}`}
                className="px-3.5 py-1.5 rounded bg-[#d4af37] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors whitespace-nowrap ml-4"
              >
                Replay Game
              </Link>
            </div>
          )}
        </div>

        {/* Related Players from the same era */}
        {relatedPlayers.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif-display text-xl font-bold text-stone-100">
              Related Grandmasters ({player.era})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPlayers.map(rp => (
                <Link
                  key={rp.id}
                  to={`/players/${rp.slug}`}
                  className="p-4 rounded-xl bg-[#141822] border border-stone-800 hover:border-[#d4af37]/60 transition-colors block group"
                >
                  <span className="text-[11px] font-mono text-[#d4af37] block mb-1">{rp.country}</span>
                  <strong className="font-serif-display text-base text-stone-100 group-hover:text-[#d4af37] transition-colors block">
                    {rp.name}
                  </strong>
                  <span className="text-xs font-mono text-stone-400 block mt-1">Peak: {rp.peakRating}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
          <Link
            to="/players"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-stone-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Players</span>
          </Link>
          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
          >
            <span>Learn Grandmaster Openings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
