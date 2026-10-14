import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Radio, 
  BookOpen, 
  Crown, 
  ScrollText, 
  Flame, 
  Swords, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CHESS_PLAYERS } from '../data/playersData';
import { FAMOUS_CHESS_GAMES } from '../data/gamesData';
import { CHESS_NEWS_ARTICLES } from '../data/newsData';
import { CHESS_HISTORY_EVENTS } from '../data/historyData';
import { CHESS_LEARN_MODULES } from '../data/learningData';
import { VERIFIED_TOURNAMENT_BROADCASTS } from '../services/liveChessService';
import { InteractiveBoard } from '../components/chess/InteractiveBoard';
import { ChessImage } from '../components/common/ChessImage';
import { SEOHead } from '../components/seo/SEOHead';
import { SEOInspector } from '../components/seo/SEOInspector';
import { SEO_DATA } from '../data/seoData';

export const HomePage: React.FC = () => {
  const featuredPlayers = CHESS_PLAYERS.slice(0, 4);
  const featuredNews = CHESS_NEWS_ARTICLES.slice(0, 3);
  const featuredGames = FAMOUS_CHESS_GAMES.slice(0, 3);
  const liveGamesPreview = VERIFIED_TOURNAMENT_BROADCASTS.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100">
      <SEOHead seo={SEO_DATA.home} />
      <SEOInspector seo={SEO_DATA.home} />
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-stone-800 bg-gradient-to-b from-[#131720] via-[#0c0e12] to-[#0c0e12] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading and Core Gateway Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-2">
                <span>The Premier Royal Game Destination</span>
                <span>·</span>
                <span>Est. 6th Century CE to Silicon Age</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-100 leading-[1.1] text-balance">
                The World of Chess, All in One Place.
              </h1>

              <p className="font-serif-display text-xl text-[#e5c97b] italic font-medium">
                “64 Squares. Infinite Possibilities.”
              </p>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore the complete universe of chess. Trace its ancient origins from 6th-century Indian Chaturanga, follow live grandmaster tournament broadcasts, study legendary world champions, replay historic masterpieces, and learn chess fundamentals from beginner to confident contender.
              </p>

              {/* 4 Core Section Buttons */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Link
                  to="/live"
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded bg-[#181d26] hover:bg-[#222937] border border-stone-700 hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-stone-200 transition-colors"
                >
                  <Radio className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Live Chess</span>
                </Link>
                <Link
                  to="/history"
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded bg-[#181d26] hover:bg-[#222937] border border-stone-700 hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-stone-200 transition-colors"
                >
                  <ScrollText className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span className="truncate">History</span>
                </Link>
                <Link
                  to="/players"
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded bg-[#181d26] hover:bg-[#222937] border border-stone-700 hover:border-[#d4af37] text-xs font-semibold uppercase tracking-wider text-stone-200 transition-colors"
                >
                  <Crown className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="truncate">Players</span>
                </Link>
                <Link
                  to="/learn"
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded bg-[#d4af37] hover:bg-[#c49f2b] text-[#0c0e12] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span className="truncate">Learn Chess</span>
                </Link>
              </div>

              {/* Editorial Proof Metric strip */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center gap-6 sm:gap-10 text-xs text-stone-400 font-mono">
                <div>
                  <span className="text-stone-100 font-bold text-sm block">1,500+</span>
                  <span>Years History</span>
                </div>
                <div>
                  <span className="text-stone-100 font-bold text-sm block">15 Grandmasters</span>
                  <span>Biographies</span>
                </div>
                <div>
                  <span className="text-stone-100 font-bold text-sm block">8 Structured</span>
                  <span>Academy Modules</span>
                </div>
                <div>
                  <span className="text-stone-100 font-bold text-sm block">100% Free</span>
                  <span>No Paywalls</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Board & Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[460px] rounded-xl overflow-hidden shadow-2xl border border-stone-700/80 bg-[#161a22] group">
                <ChessImage
                  src="/assets/images/chess_hero_board.jpg"
                  alt="Staunton luxury wooden chess set on dark walnut board with dramatic side lighting"
                  fallbackTitle="Staunton Championship Board"
                  theme="hero"
                  className="w-full h-64 object-cover brightness-95 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-5 space-y-3 bg-[#11141b]">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="font-serif-display text-amber-300 font-semibold tracking-wide">Featured Position</span>
                    <span className="font-mono">Morphy vs Duke & Count, 1858</span>
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-stone-100">
                    The Opera Game: Masterclass in Harmony
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Paul Morphy sacrificed his queen on b8 to deliver a stunning two-rook back-rank checkmate in 17 moves, creating the ultimate textbook lesson in rapid piece development.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to="/games/the-opera-game"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
                    >
                      <span>Replay Interactive Moves</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-stone-500">17 Moves · 1-0</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: LIVE CHESS BROADCAST PREVIEW */}
      <section className="py-14 border-b border-stone-800 bg-[#0e1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                <span>Real-Time Broadcast Centre</span>
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                Live Matches in Progress
              </h2>
            </div>
            <Link
              to="/live"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-amber-300 transition-colors"
            >
              <span>View All Live Channels</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveGamesPreview.map((game) => (
              <div
                key={game.id}
                className="bg-[#141822] border border-stone-800 rounded-lg p-5 flex flex-col justify-between hover:border-stone-700 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-3 pb-3 border-b border-stone-800/80">
                    <span className="font-medium text-stone-300 truncate max-w-[240px]">{game.event}</span>
                    <span className="text-[11px] font-mono uppercase text-amber-400/90">{game.timeControl}</span>
                  </div>

                  <div className="space-y-3">
                    {/* White Player */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-stone-100 border border-stone-300" />
                        <span className="text-sm font-semibold text-stone-100">{game.white.name}</span>
                        {game.white.title && (
                          <span className="text-[10px] font-mono text-[#d4af37] font-bold">[{game.white.title}]</span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-stone-400">
                        {game.white.rating ? `${game.white.rating}` : '—'}
                      </span>
                    </div>

                    {/* Black Player */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-stone-900 border border-stone-700" />
                        <span className="text-sm font-semibold text-stone-100">{game.black.name}</span>
                        {game.black.title && (
                          <span className="text-[10px] font-mono text-[#d4af37] font-bold">[{game.black.title}]</span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-stone-400">
                        {game.black.rating ? `${game.black.rating}` : '—'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">
                    {game.status === 'live' ? 'Ongoing Broadcast' : `Result: ${game.result || 'Concluded'}`}
                  </span>
                  <Link
                    to="/live"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#d4af37] hover:underline"
                  >
                    <span>Open Game Board</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CHESS HISTORY PREVIEW */}
      <section className="py-16 border-b border-stone-800 bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Historical Heritage
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-100 leading-tight">
                From Ancient India to Modern Neural Engines
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                Before modern grandmasters battled in digital arenas, chess originated in 6th-century northern India as <strong className="text-stone-100">Chaturanga</strong>, depicting infantry, cavalry, war elephants, and chariots.
              </p>
              <p className="text-sm text-stone-400 leading-relaxed">
                Traversing along Persian Silk Road trade routes into medieval Andalusia and the Renaissance courts of Europe, the game underwent a violent revolution in 1475 when the Queen transformed into the most dangerous weapon on the board.
              </p>
              <div className="pt-2">
                <Link
                  to="/history"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#181d26] hover:bg-[#222937] border border-[#d4af37]/60 text-xs font-semibold uppercase tracking-wider text-amber-200 transition-colors"
                >
                  <span>Explore Complete History Timeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-stone-800 shadow-xl bg-[#141822]">
                <ChessImage
                  src="/assets/images/chaturanga_history.jpg"
                  alt="Ancient Indian Chaturanga and Persian Shatranj historical artifacts and board"
                  fallbackTitle="Ancient Chaturanga & Shatranj"
                  theme="history"
                  className="w-full h-64 sm:h-72 object-cover brightness-90"
                />
                <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
                  <div className="space-y-1">
                    <span className="text-stone-400 font-mono text-[11px] block">c. 550 CE</span>
                    <strong className="text-stone-100 font-medium block">Indian Chaturanga</strong>
                    <p className="text-stone-400 text-[11px]">Infantry, cavalry, elephants, and chariots on the 64-square Ashtapada grid.</p>
                  </div>
                  <div className="pt-3 sm:pt-0 sm:pl-4 space-y-1">
                    <span className="text-stone-400 font-mono text-[11px] block">c. 1475 CE</span>
                    <strong className="text-stone-100 font-medium block">The Queen's Revolution</strong>
                    <p className="text-stone-400 text-[11px]">Valencia masters empower the Queen and Bishop, creating dynamic modern chess.</p>
                  </div>
                  <div className="pt-3 sm:pt-0 sm:pl-4 space-y-1">
                    <span className="text-stone-400 font-mono text-[11px] block">2024 CE</span>
                    <strong className="text-stone-100 font-medium block">Indian Double Gold</strong>
                    <p className="text-stone-400 text-[11px]">India sweeps historic double gold at Budapest Olympiad; Gukesh becomes World Challenger.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED GRANDMASTERS & LEGENDS */}
      <section className="py-16 border-b border-stone-800 bg-[#0e1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Titans of the Royal Game
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                Featured Legends and Champions
              </h2>
            </div>
            <Link
              to="/players"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-amber-300 transition-colors"
            >
              <span>Explore All 15 Grandmasters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlayers.map((player) => (
              <div
                key={player.id}
                className="bg-[#141822] border border-stone-800 rounded-lg p-5 flex flex-col justify-between hover:border-[#d4af37]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                    <span className="text-[#d4af37] font-mono font-semibold">{player.country} ({player.countryCode})</span>
                    <span className="font-mono text-[11px]">{player.era}</span>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-stone-100 group-hover:text-[#d4af37] transition-colors">
                    {player.name}
                  </h3>

                  <div className="mt-1 text-xs font-mono text-stone-400">
                    Peak FIDE: <span className="text-amber-300 font-semibold">{player.peakRating}</span>
                  </div>

                  <p className="mt-3 text-xs text-stone-300 line-clamp-3 leading-relaxed">
                    {player.shortBio}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-serif-display italic truncate max-w-[130px]">
                    {player.title}
                  </span>
                  <Link
                    to={`/players/${player.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] hover:underline"
                  >
                    <span>Full Profile</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BEGINNER ACADEMY PREVIEW */}
      <section className="py-16 border-b border-stone-800 bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-stone-800 shadow-xl bg-[#141822]">
                <ChessImage
                  src="/assets/images/chess_academy_study.jpg"
                  alt="Overhead still life of open chess tactics book and study notebook"
                  fallbackTitle="Grandmaster Study Room"
                  theme="academy"
                  className="w-full h-64 sm:h-80 object-cover brightness-90"
                />
                <div className="p-5 bg-[#12161f]">
                  <span className="text-xs font-mono text-amber-300 uppercase tracking-wider block mb-1">
                    Structured 8-Module Syllabus
                  </span>
                  <h4 className="font-serif-display text-lg font-bold text-stone-100">
                    Zero Fluff. Pure Chess Fundamentals.
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Every module contains verified diagrams, interactive chessboard challenges powered by chess.js, immediate hints, and quizzes. Progress is automatically saved locally.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Chess Academy
                </div>
                <h2 className="font-serif-display text-3xl font-bold text-stone-100 mt-1">
                  Learn Chess — From Beginner to Confident Player
                </h2>
                <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                  Whether you have never touched a piece or want to solidify your tactical foundation, our structured curriculum guides you step-by-step from board geometry to endgame checkmates.
                </p>
              </div>

              {/* 4 Sample Modules preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CHESS_LEARN_MODULES.slice(0, 4).map((mod) => (
                  <Link
                    key={mod.id}
                    to={`/learn/${mod.slug}`}
                    className="p-3.5 rounded bg-[#141822] border border-stone-800 hover:border-[#d4af37]/60 transition-colors block group"
                  >
                    <span className="text-[11px] font-mono text-amber-400 block mb-1">Module {mod.number}</span>
                    <strong className="font-serif-display text-sm text-stone-100 group-hover:text-[#d4af37] transition-colors block">
                      {mod.title}
                    </strong>
                    <span className="text-[11px] text-stone-400 mt-1 block truncate">{mod.tagline}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/learn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#d4af37] hover:bg-[#c29d2b] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
                >
                  <span>Start Course Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST CHESS NEWS & TOURNAMENTS */}
      <section className="py-16 border-b border-stone-800 bg-[#0e1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Journalism & Essays
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                Featured Articles & Analysis
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-amber-300 transition-colors"
            >
              <span>Explore All 10 Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((article) => (
              <div
                key={article.id}
                className="bg-[#141822] border border-stone-800 rounded-lg p-5 flex flex-col justify-between hover:border-stone-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                    <span className="text-amber-400 font-medium">{article.category}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-stone-100 leading-snug">
                    <Link to={`/news/${article.slug}`} className="hover:text-[#d4af37] transition-colors">
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-xs text-stone-300 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500">{article.readTime}</span>
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] hover:underline"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAMOUS GAMES PREVIEW */}
      <section className="py-16 bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Immortal Masterpieces
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                Greatest Games in Chess History
              </h2>
            </div>
            <Link
              to="/games"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-amber-300 transition-colors"
            >
              <span>Explore All Games</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <div
                key={game.id}
                className="bg-[#141822] border border-stone-800 rounded-lg p-5 flex flex-col justify-between hover:border-[#d4af37]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                    <span className="font-mono text-amber-300">{game.year} · {game.site}</span>
                    <span className="font-mono font-bold text-stone-300">{game.result}</span>
                  </div>

                  <h3 className="font-serif-display text-lg font-bold text-stone-100 group-hover:text-[#d4af37] transition-colors">
                    {game.title}
                  </h3>

                  <div className="text-xs font-mono text-stone-400 mt-1">
                    {game.white} vs {game.black}
                  </div>

                  <p className="mt-2.5 text-xs text-stone-300 line-clamp-3 leading-relaxed">
                    {game.significance}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 truncate max-w-[170px]">{game.opening}</span>
                  <Link
                    to={`/games/${game.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] hover:underline"
                  >
                    <span>Replay Moves</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
