import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CHESS_LEARN_MODULES } from '../data/learningData';
import { InteractiveBoard } from '../components/chess/InteractiveBoard';
import { 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const LessonDetailPage: React.FC = () => {
  const { moduleSlug } = useParams<{ moduleSlug: string }>();
  
  // Find current module
  const currentModuleIndex = CHESS_LEARN_MODULES.findIndex(m => m.slug === moduleSlug);
  const currentModule = currentModuleIndex !== -1 ? CHESS_LEARN_MODULES[currentModuleIndex] : null;

  const [puzzleState, setPuzzleState] = useState<'unattempted' | 'solved' | 'incorrect'>('unattempted');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [isModuleCompleted, setIsModuleCompleted] = useState<boolean>(false);

  // Check if module is already marked complete in localStorage
  useEffect(() => {
    if (!currentModule) return;
    try {
      const saved = localStorage.getItem('64squares_completed_modules');
      if (saved) {
        const list = JSON.parse(saved);
        setIsModuleCompleted(list.includes(currentModule.slug));
      }
    } catch {
      // ignore
    }
    // reset state when navigating between modules
    setPuzzleState('unattempted');
    setShowHint(false);
    setShowSolution(false);
    setSelectedQuizAnswers({});
  }, [currentModule]);

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-20 px-4 text-center">
        <h1 className="font-serif-display text-2xl text-stone-200">Module Not Found</h1>
        <p className="text-stone-400 text-sm mt-2">The requested learning module does not exist.</p>
        <div className="mt-6">
          <Link to="/learn" className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Chess Academy</span>
          </Link>
        </div>
      </div>
    );
  }

  const lesson = currentModule.lessons[0];
  const prevModule = currentModuleIndex > 0 ? CHESS_LEARN_MODULES[currentModuleIndex - 1] : null;
  const nextModule = currentModuleIndex < CHESS_LEARN_MODULES.length - 1 ? CHESS_LEARN_MODULES[currentModuleIndex + 1] : null;

  const handleMoveAttempt = (move: { from: string; to: string; san: string }) => {
    if (!lesson.interactiveChallenge) return;
    const challenge = lesson.interactiveChallenge;
    const uciMove = `${move.from}${move.to}`.toLowerCase();
    const sanMove = move.san;

    const isMatch = challenge.expectedMoves.some(
      expected => expected.toLowerCase() === uciMove || expected === sanMove
    );

    if (isMatch) {
      setPuzzleState('solved');
    } else {
      setPuzzleState('incorrect');
    }
  };

  const toggleComplete = () => {
    try {
      const saved = localStorage.getItem('64squares_completed_modules');
      let list: string[] = saved ? JSON.parse(saved) : [];
      if (isModuleCompleted) {
        list = list.filter(slug => slug !== currentModule.slug);
        setIsModuleCompleted(false);
      } else {
        if (!list.includes(currentModule.slug)) list.push(currentModule.slug);
        setIsModuleCompleted(true);
      }
      localStorage.setItem('64squares_completed_modules', JSON.stringify(list));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-400 font-mono">
          <Link to="/" className="hover:text-stone-200 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <Link to="/learn" className="hover:text-stone-200 transition-colors">Learn</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
          <span className="text-[#d4af37] font-semibold">Module {currentModule.number}: {currentModule.title}</span>
        </nav>

        {/* Lesson Header */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Module {currentModule.number} of 8 · {currentModule.level}
            </span>
            <button
              onClick={toggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                isModuleCompleted 
                  ? 'bg-emerald-950/60 border border-emerald-600 text-emerald-300'
                  : 'bg-[#181d26] border border-stone-700 text-stone-300 hover:border-[#d4af37]'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${isModuleCompleted ? 'text-emerald-400' : 'text-stone-500'}`} />
              <span>{isModuleCompleted ? 'Completed' : 'Mark as Complete'}</span>
            </button>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-100">
            {lesson.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            {lesson.overview}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {lesson.contentSections.map((sec, sIdx) => (
            <div key={sIdx} className="bg-[#141822] border border-stone-800 rounded-xl p-6 sm:p-8 space-y-4">
              <h2 className="font-serif-display text-xl font-bold text-stone-100">
                {sec.heading}
              </h2>

              <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {sec.bulletPoints && (
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-stone-300">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#d4af37] font-bold">·</span>
                      <span className="text-stone-300">{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* If section includes diagram */}
              {sec.diagramFen && (
                <div className="pt-4 flex flex-col items-center">
                  <InteractiveBoard
                    initialFen={sec.diagramFen}
                    interactive={false}
                    showControls={false}
                    boardWidthClass="w-full max-w-[320px]"
                  />
                  {sec.diagramCaption && (
                    <span className="text-xs text-stone-400 mt-2 font-mono text-center">
                      {sec.diagramCaption}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Challenge Section */}
        {lesson.interactiveChallenge && (
          <div className="bg-[#141822] border border-amber-900/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Interactive Board Challenge</span>
              </div>
              <span className="text-[11px] font-mono text-stone-400">Click & Move on Board</span>
            </div>

            <p className="text-sm font-medium text-stone-100">
              {lesson.interactiveChallenge.instruction}
            </p>

            {/* Board container */}
            <div className="flex flex-col items-center">
              <InteractiveBoard
                key={lesson.id}
                initialFen={lesson.interactiveChallenge.initialFen}
                interactive={puzzleState !== 'solved'}
                onMove={handleMoveAttempt}
                showControls={true}
                boardWidthClass="w-full max-w-[420px]"
              />
            </div>

            {/* Status alerts */}
            {puzzleState === 'solved' && (
              <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-600/50 text-emerald-200 text-xs sm:text-sm space-y-1">
                <div className="font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lesson.interactiveChallenge.successMessage}</span>
                </div>
                <p className="text-stone-300 text-xs mt-1">
                  {lesson.interactiveChallenge.explanation}
                </p>
              </div>
            )}

            {puzzleState === 'incorrect' && (
              <div className="p-4 rounded-lg bg-red-950/30 border border-red-800/50 text-red-200 text-xs sm:text-sm flex items-center justify-between">
                <span>Not quite the intended move. Try again or check the hint below.</span>
                <button
                  onClick={() => setPuzzleState('unattempted')}
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {/* Hint & Solution Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d26] hover:bg-[#202734] border border-stone-700 text-xs font-medium text-stone-300 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
              </button>

              <button
                onClick={() => setShowSolution(!showSolution)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d26] hover:bg-[#202734] border border-stone-700 text-xs font-medium text-stone-400 hover:text-stone-200 transition-colors"
              >
                <span>{showSolution ? 'Hide Solution' : 'Reveal Solution'}</span>
              </button>
            </div>

            {showHint && (
              <div className="p-3.5 rounded bg-[#10141d] border border-amber-900/40 text-xs text-amber-200/90">
                <span className="font-semibold block mb-0.5">Hint:</span>
                <span>{lesson.interactiveChallenge.hint}</span>
              </div>
            )}

            {showSolution && (
              <div className="p-3.5 rounded bg-[#10141d] border border-stone-800 text-xs text-stone-300 space-y-1">
                <span className="font-semibold text-[#d4af37] block">Correct Continuation:</span>
                <span className="font-mono text-stone-100">{lesson.interactiveChallenge.expectedMoves.join(' or ')}</span>
                <p className="text-stone-400 text-[11px] pt-1">{lesson.interactiveChallenge.explanation}</p>
              </div>
            )}
          </div>
        )}

        {/* Quiz Questions */}
        {lesson.quizQuestions && lesson.quizQuestions.length > 0 && (
          <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="font-serif-display text-xl font-bold text-stone-100 border-b border-stone-800 pb-3">
              Knowledge Check Quiz
            </h2>

            <div className="space-y-6">
              {lesson.quizQuestions.map((q, qIdx) => {
                const selectedOpt = selectedQuizAnswers[qIdx];
                const hasAnswered = selectedOpt !== undefined;

                return (
                  <div key={qIdx} className="space-y-3">
                    <p className="text-sm font-semibold text-stone-200">
                      {qIdx + 1}. {q.question}
                    </p>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        let btnStyle = 'bg-[#0d1016] border-stone-800 text-stone-300 hover:border-stone-700';
                        if (hasAnswered) {
                          if (oIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-950/40 border-emerald-600 text-emerald-200 font-medium';
                          } else if (selectedOpt === oIdx) {
                            btnStyle = 'bg-red-950/40 border-red-700 text-red-200';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={hasAnswered}
                            onClick={() => {
                              setSelectedQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
                            }}
                            className={`w-full text-left p-3 rounded-lg border text-xs transition-colors flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && oIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <p className="text-xs text-stone-400 pt-1 leading-relaxed bg-[#0d1016] p-2.5 rounded border border-stone-800">
                        <strong className="text-amber-400">Explanation:</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Previous & Next Module Navigation */}
        <div className="pt-6 border-t border-stone-800 flex items-center justify-between gap-4">
          {prevModule ? (
            <Link
              to={`/learn/${prevModule.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-stone-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Module {prevModule.number}: {prevModule.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextModule ? (
            <Link
              to={`/learn/${nextModule.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#d4af37] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
            >
              <span>Module {nextModule.number}: {nextModule.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#d4af37] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
            >
              <span>Back to Academy Overview</span>
              <CheckCircle2 className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};
