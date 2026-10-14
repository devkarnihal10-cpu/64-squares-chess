import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Chess, Square } from 'chess.js';
import { ChessPiece } from './ChessPieceSvg';
import { chessAudio } from '../../utils/chessAudio';
import { 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight, 
  Play, 
  Pause,
  ArrowUpDown
} from 'lucide-react';

export interface InteractiveBoardProps {
  initialFen?: string;
  pgn?: string;
  interactive?: boolean;
  orientation?: 'white' | 'black';
  onMove?: (move: { from: string; to: string; san: string; fen: string }) => void;
  onPieceSelect?: (square: string | null) => void;
  showControls?: boolean;
  showMoveHistory?: boolean;
  highlightSquares?: string[];
  customSquareStyles?: Record<string, string>;
  className?: string;
  boardWidthClass?: string;
}

export const InteractiveBoard: React.FC<InteractiveBoardProps> = ({
  initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  pgn,
  interactive = true,
  orientation: initialOrientation = 'white',
  onMove,
  showControls = true,
  showMoveHistory = false,
  highlightSquares = [],
  customSquareStyles = {},
  className = '',
  boardWidthClass = 'w-full max-w-[480px]',
}) => {
  // Setup chess game instance
  const [game, setGame] = useState<Chess>(() => {
    const c = new Chess();
    if (pgn) {
      try {
        c.loadPgn(pgn);
      } catch {
        c.load(initialFen);
      }
    } else {
      try {
        c.load(initialFen);
      } catch {
        // Fallback default
      }
    }
    return c;
  });

  const [currentFen, setCurrentFen] = useState<string>(() => game.fen());
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [legalMoves, setLegalMoves] = useState<string[]>([]);
  const [lastMoveSquares, setLastMoveSquares] = useState<string[]>([]);
  const [orientation, setOrientation] = useState<'white' | 'black'>(initialOrientation);
  const [isMuted, setIsMuted] = useState(false);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // If PGN is loaded, parse all positions for replay
  const historyMoves = useMemo(() => {
    if (!pgn) return [];
    try {
      const tempChess = new Chess();
      tempChess.loadPgn(pgn);
      return tempChess.history({ verbose: true });
    } catch {
      return [];
    }
  }, [pgn]);

  // Update game when pgn or initialFen prop changes
  useEffect(() => {
    const newChess = new Chess();
    if (pgn) {
      try {
        newChess.loadPgn(pgn);
        const moves = newChess.history({ verbose: true });
        setHistoryIndex(moves.length);
        setGame(newChess);
        setCurrentFen(newChess.fen());
        if (moves.length > 0) {
          const last = moves[moves.length - 1];
          setLastMoveSquares([last.from, last.to]);
        }
        return;
      } catch {
        // ignore
      }
    }
    try {
      newChess.load(initialFen);
      setGame(newChess);
      setCurrentFen(newChess.fen());
      setLastMoveSquares([]);
      setHistoryIndex(-1);
    } catch {
      // ignore
    }
  }, [pgn, initialFen]);

  // Handle step in PGN history
  const goToMove = useCallback((targetIndex: number) => {
    if (!pgn && historyMoves.length === 0) return;
    const replayChess = new Chess();
    try {
      const clamped = Math.max(0, Math.min(targetIndex, historyMoves.length));
      for (let i = 0; i < clamped; i++) {
        replayChess.move(historyMoves[i].san);
      }
      setGame(replayChess);
      setCurrentFen(replayChess.fen());
      setHistoryIndex(clamped);
      setSelectedSquare(null);
      setLegalMoves([]);
      if (clamped > 0) {
        const last = historyMoves[clamped - 1];
        setLastMoveSquares([last.from, last.to]);
        chessAudio.playMove();
      } else {
        setLastMoveSquares([]);
      }
    } catch {
      // ignore
    }
  }, [pgn, historyMoves]);

  // Auto-play replay timer
  useEffect(() => {
    if (!isPlaying) return;
    if (historyIndex >= historyMoves.length) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => {
      goToMove(historyIndex + 1);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isPlaying, historyIndex, historyMoves.length, goToMove]);

  // Squares array based on board orientation
  const files = useMemo(() => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], []);
  const ranks = useMemo(() => ['8', '7', '6', '5', '4', '3', '2', '1'], []);

  const displayedFiles = orientation === 'white' ? files : [...files].reverse();
  const displayedRanks = orientation === 'white' ? ranks : [...ranks].reverse();

  // Find checked king square
  const inCheckSquare = useMemo(() => {
    if (!game.inCheck()) return null;
    const turn = game.turn();
    const board = game.board();
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (piece && piece.type === 'k' && piece.color === turn) {
          const file = files[c];
          const rank = 8 - r;
          return `${file}${rank}`;
        }
      }
    }
    return null;
  }, [game, currentFen, files]);

  // Handle square clicks for movement
  const handleSquareClick = (square: Square) => {
    if (!interactive) return;

    // If already clicked a piece and clicked another square, attempt move
    if (selectedSquare) {
      if (selectedSquare === square) {
        setSelectedSquare(null);
        setLegalMoves([]);
        return;
      }

      // Check if clicked square is a valid target
      const moves = game.moves({ square: selectedSquare, verbose: true });
      const targetMove = moves.find(m => m.to === square);

      if (targetMove) {
        try {
          const moveRes = game.move({
            from: selectedSquare,
            to: square,
            promotion: 'q', // auto queen for convenience
          });

          if (moveRes) {
            setCurrentFen(game.fen());
            setLastMoveSquares([selectedSquare, square]);
            setSelectedSquare(null);
            setLegalMoves([]);

            if (moveRes.captured) {
              chessAudio.playCapture();
            } else if (game.inCheck()) {
              chessAudio.playCheck();
            } else {
              chessAudio.playMove();
            }

            if (onMove) {
              onMove({
                from: selectedSquare,
                to: square,
                san: moveRes.san,
                fen: game.fen(),
              });
            }
            return;
          }
        } catch {
          // move failed
        }
      }
    }

    // Select piece if it's the turn player's piece
    const piece = game.get(square);
    if (piece && piece.color === game.turn()) {
      setSelectedSquare(square);
      const moves = game.moves({ square, verbose: true });
      setLegalMoves(moves.map(m => m.to));
    } else {
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  const handleReset = () => {
    const newChess = new Chess();
    if (initialFen) {
      newChess.load(initialFen);
    }
    setGame(newChess);
    setCurrentFen(newChess.fen());
    setSelectedSquare(null);
    setLegalMoves([]);
    setLastMoveSquares([]);
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    chessAudio.setMuted(next);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Chessboard Container */}
      <div className={`relative ${boardWidthClass} aspect-square rounded-lg overflow-hidden shadow-2xl border border-stone-800 bg-[#161a22]`}>
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full select-none">
          {displayedRanks.map((rank, rIdx) => {
            return displayedFiles.map((file, fIdx) => {
              const square = `${file}${rank}` as Square;
              const isDark = (files.indexOf(file) + ranks.indexOf(rank)) % 2 === 1;
              const piece = game.get(square);
              const isSelected = selectedSquare === square;
              const isLegal = legalMoves.includes(square);
              const isLastMove = lastMoveSquares.includes(square);
              const isCheckedKing = inCheckSquare === square;
              const isCustomHighlight = highlightSquares.includes(square);

              // Background colors
              let bg = isDark ? 'bg-[#3b4455]' : 'bg-[#e2d6b5]'; // Classic dark charcoal-slate vs warm ivory
              if (isLastMove) {
                bg = isDark ? 'bg-[#5c6543]' : 'bg-[#ced47a]'; // Subtle olive move highlight
              }
              if (isSelected) {
                bg = 'bg-[#bca142]'; // Gold selected square
              }
              if (isCheckedKing) {
                bg = 'bg-[#991b1b]'; // Red check square
              }

              const customStyle = customSquareStyles[square] || '';

              return (
                <div
                  key={square}
                  onClick={() => handleSquareClick(square)}
                  className={`relative flex items-center justify-center cursor-pointer transition-colors duration-150 ${bg} ${customStyle}`}
                >
                  {/* File & Rank Coordinates */}
                  {fIdx === 0 && (
                    <span
                      className={`absolute top-0.5 left-1 text-[9px] font-mono font-semibold pointer-events-none ${
                        isDark ? 'text-stone-400' : 'text-stone-600'
                      }`}
                    >
                      {rank}
                    </span>
                  )}
                  {rIdx === 7 && (
                    <span
                      className={`absolute bottom-0.5 right-1 text-[9px] font-mono font-semibold pointer-events-none ${
                        isDark ? 'text-stone-400' : 'text-stone-600'
                      }`}
                    >
                      {file}
                    </span>
                  )}

                  {/* Legal move destination indicator */}
                  {isLegal && !piece && (
                    <span className="w-3.5 h-3.5 rounded-full bg-[#d4af37]/75 pointer-events-none drop-shadow-sm animate-pulse" />
                  )}
                  {isLegal && piece && (
                    <span className="absolute inset-0 rounded-none border-[3px] border-[#d4af37]/80 pointer-events-none" />
                  )}

                  {/* Piece */}
                  {piece && (
                    <div className="w-[88%] h-[88%] pointer-events-none transition-transform hover:scale-105 active:scale-95">
                      <ChessPiece piece={`${piece.color}${piece.type.toUpperCase()}`} />
                    </div>
                  )}

                  {/* Custom square badge if highlighted */}
                  {isCustomHighlight && (
                    <span className="absolute inset-0 border-2 border-amber-400 pointer-events-none" />
                  )}
                </div>
              );
            });
          })}
        </div>
      </div>

      {/* Control Utility Toolbar */}
      {showControls && (
        <div className="mt-3 w-full flex items-center justify-between text-xs text-stone-400 px-1 py-1 bg-[#12161f] border border-stone-800 rounded-md">
          {/* Flip and Sound */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setOrientation(prev => prev === 'white' ? 'black' : 'white')}
              title="Flip board perspective"
              className="p-1.5 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={toggleMute}
              title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
              className="p-1.5 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-500" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>
            <button
              onClick={handleReset}
              title="Reset position"
              className="p-1.5 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Turn and Status indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full border border-stone-600 ${game.turn() === 'w' ? 'bg-white' : 'bg-stone-900'}`} />
              <span className="text-stone-300">{game.turn() === 'w' ? 'White to move' : 'Black to move'}</span>
            </span>
            {game.isGameOver() && (
              <span className="text-amber-400 font-medium">
                {game.isCheckmate() ? 'Checkmate' : game.isDraw() ? 'Draw' : 'Game Over'}
              </span>
            )}
          </div>

          {/* Replay Controls if PGN/moves present */}
          {historyMoves.length > 0 && (
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => goToMove(0)}
                disabled={historyIndex <= 0}
                title="Start"
                className="p-1 hover:text-stone-100 disabled:opacity-30 rounded transition-colors"
              >
                <ChevronsLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => goToMove(historyIndex - 1)}
                disabled={historyIndex <= 0}
                title="Previous move"
                className="p-1 hover:text-stone-100 disabled:opacity-30 rounded transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Pause auto-play' : 'Play replay'}
                className="p-1 text-amber-400 hover:text-amber-300 rounded transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => goToMove(historyIndex + 1)}
                disabled={historyIndex >= historyMoves.length}
                title="Next move"
                className="p-1 hover:text-stone-100 disabled:opacity-30 rounded transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => goToMove(historyMoves.length)}
                disabled={historyIndex >= historyMoves.length}
                title="End"
                className="p-1 hover:text-stone-100 disabled:opacity-30 rounded transition-colors"
              >
                <ChevronsRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Move History Strip if requested */}
      {showMoveHistory && historyMoves.length > 0 && (
        <div className="mt-2 w-full max-h-24 overflow-y-auto bg-[#0f1218] border border-stone-800 rounded p-2 text-xs font-mono">
          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
            {historyMoves.reduce<Array<{ num: number; white: string; black?: string }>>((acc, m, idx) => {
              if (idx % 2 === 0) {
                acc.push({ num: Math.floor(idx / 2) + 1, white: m.san });
              } else {
                acc[acc.length - 1].black = m.san;
              }
              return acc;
            }, []).map((row, rIdx) => {
              const whiteMoveIdx = rIdx * 2 + 1;
              const blackMoveIdx = rIdx * 2 + 2;
              return (
                <div key={row.num} className="flex items-center gap-1.5 py-0.5 px-1 hover:bg-stone-800/60 rounded">
                  <span className="text-stone-500 w-5">{row.num}.</span>
                  <button
                    onClick={() => goToMove(whiteMoveIdx)}
                    className={`hover:text-amber-300 ${historyIndex === whiteMoveIdx ? 'text-amber-400 font-bold' : 'text-stone-300'}`}
                  >
                    {row.white}
                  </button>
                  {row.black && (
                    <button
                      onClick={() => goToMove(blackMoveIdx)}
                      className={`hover:text-amber-300 ml-1 ${historyIndex === blackMoveIdx ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
                    >
                      {row.black}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
