import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Clock, 
  Award,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { CHESS_LEARN_MODULES } from '../data/learningData';

export const LearnPage: React.FC = () => {
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('64squares_completed_modules');
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const resetProgress = () => {
    localStorage.removeItem('64squares_completed_modules');
    setCompletedModules([]);
  };

  const progressPercent = Math.round((completedModules.length / CHESS_LEARN_MODULES.length) * 100);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>Structured Curriculum</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
            Learn Chess — From Beginner to Confident Player
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            A comprehensive, step-by-step master course designed for complete beginners and improving amateurs. Interactive boards, tactical puzzles, instant feedback, and grandmaster principles.
          </p>
        </div>

        {/* Progress Overview Bar */}
        <div className="bg-[#141822] border border-stone-800 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between text-xs text-stone-300 mb-1.5 font-medium">
              <span>Your Course Completion Progress</span>
              <span className="font-mono text-[#d4af37] font-bold">{completedModules.length} of {CHESS_LEARN_MODULES.length} Modules ({progressPercent}%)</span>
            </div>
            {/* Progress bar line */}
            <div className="w-full h-2.5 rounded-full bg-[#0d1016] overflow-hidden border border-stone-800">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-[#d4af37] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {completedModules.length > 0 && (
              <button
                onClick={resetProgress}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 p-2 rounded hover:bg-stone-800/60 transition-colors"
                title="Reset completion tracking"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
            <Link
              to={`/learn/${CHESS_LEARN_MODULES[0].slug}`}
              className="px-4 py-2 rounded bg-[#d4af37] hover:bg-[#c29d2b] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors whitespace-nowrap"
            >
              {completedModules.length === 0 ? 'Start Module 1' : 'Continue Learning'}
            </Link>
          </div>
        </div>

        {/* 8 Course Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHESS_LEARN_MODULES.map((module) => {
            const isCompleted = completedModules.includes(module.slug);
            return (
              <div
                key={module.id}
                className={`bg-[#141822] border rounded-xl p-6 flex flex-col justify-between hover:border-[#d4af37]/70 transition-all group ${
                  isCompleted ? 'border-[#d4af37]/40 bg-[#161b26]' : 'border-stone-800'
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-3 pb-3 border-b border-stone-800/80">
                    <span className="font-mono text-amber-400 font-bold">
                      MODULE {module.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3 h-3 text-stone-500" />
                        {module.estimatedMinutes} min
                      </span>
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Done
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-stone-500 font-mono text-[11px]">
                          <Circle className="w-3.5 h-3.5" />
                          Not Started
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-stone-100 group-hover:text-[#d4af37] transition-colors">
                    {module.title}
                  </h3>

                  <div className="text-xs text-[#e5c97b] font-medium mt-1">
                    {module.tagline}
                  </div>

                  <p className="mt-3 text-xs text-stone-300 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>Level: {module.level}</span>
                    <span>{module.topicsCount} Core Topics</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between">
                  <span className="text-xs text-stone-400">
                    Interactive puzzle challenge included
                  </span>
                  <Link
                    to={`/learn/${module.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Start Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why 64 Squares Curriculum Section */}
        <div className="bg-[#11141c] border border-stone-800 rounded-xl p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif-display text-2xl font-bold text-stone-100">
              The 64 Squares Educational Philosophy
            </h2>
            <p className="text-xs text-stone-400">
              We eliminate memory-heavy rote learning. Instead, we teach visual geometry, piece harmony, and the foundational reasons behind every move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300 pt-2">
            <div className="p-4 rounded-lg bg-[#161a22] border border-stone-800 space-y-2">
              <strong className="text-amber-300 font-serif-display text-sm block">1. Hands-On Interaction</strong>
              <p className="text-stone-400 leading-relaxed">
                Every single lesson is backed by a fully interactive chessboard. Try moves, see legal squares, and experience the tactile geometry of chess directly.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#161a22] border border-stone-800 space-y-2">
              <strong className="text-amber-300 font-serif-display text-sm block">2. Concrete Explanations</strong>
              <p className="text-stone-400 leading-relaxed">
                No cryptic engine symbols without explanation. We explain WHY a pin hurts, WHY the king is unsafe in the center, and HOW to deliver clean checkmates.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#161a22] border border-stone-800 space-y-2">
              <strong className="text-amber-300 font-serif-display text-sm block">3. Zero Account Required</strong>
              <p className="text-stone-400 leading-relaxed">
                No passwords, no subscriptions, no paywalls. All lessons and local progress tracking work seamlessly inside your browser.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
