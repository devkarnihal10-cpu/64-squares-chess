import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  ArrowRight, 
  Trophy, 
  Clock, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CHESS_NEWS_ARTICLES, UPCOMING_TOURNAMENTS_SCHEDULE } from '../data/newsData';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Indian Chess',
    'World Championship',
    'FIDE Tour',
    'Event Announcement'
  ];

  const filteredArticles = CHESS_NEWS_ARTICLES.filter(article => {
    if (selectedCategory !== 'All' && article.category !== selectedCategory) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchSummary = article.summary.toLowerCase().includes(q);
      return matchTitle || matchSummary;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <Newspaper className="w-4 h-4 text-amber-300" />
            <span>International Chess Journalism</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
            Chess News, Results and Tournaments
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            In-depth coverage of world championships, FIDE Candidates, national Olympiads, rating updates, and tournament schedules across the global chess circuit.
          </p>
        </div>

        {/* Featured News Lead Story */}
        {CHESS_NEWS_ARTICLES.length > 0 && (
          <div className="bg-[#141822] border border-stone-800 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 hover:border-[#d4af37]/50 transition-colors">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <span className="text-amber-400 font-semibold">{CHESS_NEWS_ARTICLES[0].category}</span>
                  <span>·</span>
                  <span>{CHESS_NEWS_ARTICLES[0].date}</span>
                  <span>·</span>
                  <span>{CHESS_NEWS_ARTICLES[0].readTime}</span>
                </div>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-stone-100 leading-tight">
                  <Link to={`/news/${CHESS_NEWS_ARTICLES[0].slug}`} className="hover:text-[#d4af37] transition-colors">
                    {CHESS_NEWS_ARTICLES[0].title}
                  </Link>
                </h2>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {CHESS_NEWS_ARTICLES[0].summary}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-800/80">
                <span className="text-xs text-stone-500 font-mono">By {CHESS_NEWS_ARTICLES[0].author}</span>
                <Link
                  to={`/news/${CHESS_NEWS_ARTICLES[0].slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#d4af37] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
                >
                  <span>Read Full Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0f1218] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-stone-800 flex flex-col justify-between space-y-4">
              <span className="text-xs font-mono uppercase text-amber-300 font-semibold">Key Takeaways</span>
              <ul className="space-y-2 text-xs text-stone-300">
                {CHESS_NEWS_ARTICLES[0].keyTakeaways.map((k, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold">·</span>
                    <span className="text-stone-300">{k}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] font-mono text-stone-500">
                Source: {CHESS_NEWS_ARTICLES[0].sourceAttribution}
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter */}
        <div className="bg-[#141822] border border-stone-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search news articles and reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#0d1016] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-[#0c0e12] font-semibold shadow-sm'
                    : 'bg-[#181d26] text-stone-400 hover:text-stone-100 hover:bg-[#202734]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Articles on left, Tournament Schedule on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Articles Feed: 8 Cols */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif-display text-2xl font-bold text-stone-100 border-b border-stone-800 pb-3">
              Latest Dispatches & Analysis
            </h2>

            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#141822] border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-colors flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <span className="text-amber-400 font-medium">{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif-display text-xl font-bold text-stone-100 group-hover:text-[#d4af37] transition-colors">
                      <Link to={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-stone-500">By {article.author}</span>
                    <Link
                      to={`/news/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] hover:underline"
                    >
                      <span>Read Story</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="p-8 text-center text-stone-400 text-xs bg-[#141822] border border-stone-800 rounded-xl">
                No news articles match your filter.
              </div>
            )}
          </div>

          {/* Tournament Schedule Sidebar: 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold border-b border-stone-800 pb-3">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Major Tournament Calendar</span>
              </div>

              <div className="space-y-3">
                {UPCOMING_TOURNAMENTS_SCHEDULE.map((tourney, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#0d1016] border border-stone-800/80 space-y-1.5">
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold block">
                      {tourney.type}
                    </span>
                    <strong className="text-xs font-serif-display text-stone-100 block">
                      {tourney.name}
                    </strong>
                    <div className="text-[11px] text-stone-400 flex items-center justify-between font-mono">
                      <span>{tourney.dates}</span>
                      <span>{tourney.location}</span>
                    </div>
                    <div className="text-[10px] text-stone-500 font-mono pt-1 border-t border-stone-800/60">
                      Prize Fund: {tourney.prizeFund}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Standard Card */}
            <div className="bg-[#10131a] border border-stone-800 rounded-xl p-5 space-y-2 text-xs text-stone-400">
              <strong className="text-stone-200 block font-serif-display text-sm">
                Editorial Integrity & Reporting
              </strong>
              <p className="leading-relaxed text-[11px]">
                64 Squares reports only verified tournament schedules, game scores, and official FIDE announcements. We credit original reporting organizations and maintain objective, independent coverage.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
