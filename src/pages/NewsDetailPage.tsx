import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CHESS_NEWS_ARTICLES } from '../data/newsData';
import { 
  ChevronRight, 
  ArrowLeft, 
  Clock, 
  User, 
  Share2, 
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = CHESS_NEWS_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-20 px-4 text-center">
        <h1 className="font-serif-display text-2xl text-stone-200">Article Not Found</h1>
        <p className="text-stone-400 text-sm mt-2">The requested news report could not be found.</p>
        <div className="mt-6">
          <Link to="/news" className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to News Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = CHESS_NEWS_ARTICLES.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-400 font-mono">
          <Link to="/" className="hover:text-stone-200 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link to="/news" className="hover:text-stone-200 transition-colors">News</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[#d4af37] font-semibold truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Article Header Card */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
            <span className="text-amber-400 font-semibold">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-500" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-100 leading-tight">
            {article.title}
          </h1>

          <p className="font-serif-display text-base sm:text-lg text-amber-200/90 leading-relaxed italic border-t border-stone-800/80 pt-4">
            {article.summary}
          </p>

          <div className="pt-2 text-xs text-stone-400 flex items-center justify-between border-t border-stone-800/80">
            <span className="flex items-center gap-1.5 font-mono">
              <User className="w-3.5 h-3.5 text-stone-500" />
              Reported by {article.author}
            </span>
            <span className="text-[11px] font-mono text-stone-500">64 Squares Editorial</span>
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-[#10131a] border border-[#d4af37]/30 rounded-xl p-6 space-y-3">
          <span className="text-xs uppercase tracking-wider text-amber-300 font-mono font-bold block">
            Executive Summary & Key Takeaways
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#d4af37] font-bold">·</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Body Paragraphs */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {article.bodyParagraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Source Attribution */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400">
            <div>
              <span className="font-semibold text-stone-300">Primary Source: </span>
              <span>{article.sourceAttribution}</span>
            </div>
            {article.sourceUrl && (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#d4af37] hover:underline"
              >
                <span>External Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif-display text-xl font-bold text-stone-100">
              Related Chess Dispatches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map(rel => (
                <Link
                  key={rel.id}
                  to={`/news/${rel.slug}`}
                  className="p-4 rounded-xl bg-[#141822] border border-stone-800 hover:border-[#d4af37]/60 transition-colors block group"
                >
                  <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">
                    {rel.category}
                  </span>
                  <strong className="font-serif-display text-sm text-stone-100 group-hover:text-[#d4af37] transition-colors line-clamp-2 block">
                    {rel.title}
                  </strong>
                  <span className="text-[11px] text-stone-500 block mt-2">{rel.date}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-stone-800">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-stone-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All News</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
