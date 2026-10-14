import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FAMOUS_CHESS_GAMES } from '../data/gamesData';
import { InteractiveBoard } from '../components/chess/InteractiveBoard';
import { 
  ChevronRight, 
  ArrowLeft, 
  Swords, 
  Copy, 
  Check, 
  BookOpen, 
  FileText 
} from 'lucide-react';

export const GameDetailPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = FAMOUS_CHESS_GAMES.find(g => g.id === gameId);
  const [copiedPgn, setCopiedPgn] = useState(false);

  if (!game) {
    return (
      <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-20 px-4 text-center">
        <h1 className="font-serif-display text-2xl text-stone-200">Game Not Found</h1>
        <p className="text-stone-400 text-sm mt-2">The requested chess game does not exist in our library.</p>
        <div className="mt-6">
          <Link to="/games" className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Games Archive</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyPgn = () => {
    navigator.clipboard.writeText(game.pgn);
    setCopiedPgn(true);
    setTimeout(() => setCopiedPgn(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-400 font-mono">
          <Link to="/" className="hover:text-stone-200 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link to="/games" className="hover:text-stone-200 transition-colors">Games</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[#d4af37] font-semibold">{game.title}</span>
        </nav>

        {/* Title Header */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-semibold">
              <Swords className="w-4 h-4 text-amber-400" />
              <span>{game.year} · {game.event} ({game.site})</span>
            </div>
            <span className="font-mono text-sm font-bold bg-[#1e2432] text-[#d4af37] px-3 py-1 rounded">
              Result: {game.result}
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-100">
            {game.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-stone-300">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-stone-100" />
              <span>White: <strong className="text-stone-100">{game.white}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-stone-900 border border-stone-700" />
              <span>Black: <strong className="text-stone-100">{game.black}</strong></span>
            </div>
          </div>

          <div className="pt-2 text-xs font-mono text-stone-400">
            Opening: <strong className="text-stone-200">{game.opening}</strong> <span className="text-amber-300">[{game.eco}]</span>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/80 pt-4">
            {game.significance}
          </p>
        </div>

        {/* Replay Section: Left 7 Cols Board, Right 5 Cols Move Commentary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Chessboard */}
          <div className="lg:col-span-7 bg-[#141822] border border-stone-800 rounded-xl p-5 sm:p-6 space-y-4 shadow-xl flex flex-col items-center">
            <InteractiveBoard
              pgn={game.pgn}
              interactive={true}
              showControls={true}
              showMoveHistory={true}
              boardWidthClass="w-full max-w-[460px]"
            />
            <div className="w-full text-center text-xs text-stone-400">
              Use playback buttons or click move numbers to navigate the game history.
            </div>
          </div>

          {/* Right Column: Move Commentary & Key Decisions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold border-b border-stone-800 pb-3">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Move Commentary & Critical Turning Points</span>
              </div>

              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {Object.entries(game.moveCommentary).map(([moveNum, note]) => (
                  <div key={moveNum} className="p-3 rounded bg-[#0d1016] border border-stone-800/80 space-y-1 text-xs">
                    <span className="font-mono text-amber-300 font-bold block">Move {moveNum}</span>
                    <p className="text-stone-300 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PGN Viewer Card */}
            <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="font-mono uppercase font-semibold flex items-center gap-1.5 text-stone-300">
                  <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                  Verified PGN Score
                </span>
                <button
                  onClick={handleCopyPgn}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#d4af37] hover:underline"
                >
                  {copiedPgn ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy PGN</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 rounded bg-[#0d1016] border border-stone-800 font-mono text-xs text-stone-400 max-h-32 overflow-y-auto leading-relaxed select-all">
                {game.pgn}
              </div>
            </div>

          </div>

        </div>

        {/* Back Link */}
        <div className="pt-4 border-t border-stone-800">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-stone-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Immortal Games</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
