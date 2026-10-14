import React from 'react';

export type PieceSymbol = 'p' | 'n' | 'b' | 'r' | 'q' | 'k' | 'P' | 'N' | 'B' | 'R' | 'Q' | 'K';

interface ChessPieceProps {
  piece: string; // e.g. 'wP', 'bK', or single letter 'p', 'K'
  className?: string;
}

export const ChessPiece: React.FC<ChessPieceProps> = ({ piece, className = 'w-full h-full' }) => {
  // Normalize piece identifier: color ('w' or 'b') and type ('p', 'r', 'n', 'b', 'q', 'k')
  let color = 'w';
  let type = 'p';

  if (piece.length === 2) {
    color = piece[0].toLowerCase();
    type = piece[1].toLowerCase();
  } else if (piece.length === 1) {
    color = piece === piece.toUpperCase() ? 'w' : 'b';
    type = piece.toLowerCase();
  }

  const isWhite = color === 'w';
  const fill = isWhite ? '#f8fafc' : '#1e232d';
  const stroke = isWhite ? '#0f172a' : '#94a3b8';
  const secondaryStroke = isWhite ? '#334155' : '#64748b';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 45 45"
        className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] pointer-events-none"
      >
        {type === 'p' && (
          <g style={{ fill, stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M 22.5,9 A 3.5,3.5 0 1,1 22.5,16 A 3.5,3.5 0 1,1 22.5,9 Z" />
            <path d="M 22.5,16 C 20,16 19.5,19 19,23 C 18.5,27 16.5,29 16.5,30 C 16.5,31 17.5,32 19,32 L 26,32 C 27.5,32 28.5,31 28.5,30 C 28.5,29 26.5,27 26,23 C 25.5,19 25,16 22.5,16 Z" />
            <path d="M 12.5,37 C 14.5,35 17.5,34.5 22.5,34.5 C 27.5,34.5 30.5,35 32.5,37 C 32.5,38 31.5,39 29.5,39.5 L 15.5,39.5 C 13.5,39 12.5,38 12.5,37 Z" />
            <path d="M 12.5,37 L 32.5,37" stroke={secondaryStroke} strokeWidth={1} />
          </g>
        )}

        {type === 'r' && (
          <g style={{ fill, stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 Z" />
            <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 Z" />
            <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14" />
            <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
            <path d="M 14,17 L 14,29.5 C 14,31 16,32 17,32 L 28,32 C 29,32 31,31 31,29.5 L 31,17" />
            <circle cx="22.5" cy="24.5" r="2.5" stroke={secondaryStroke} strokeWidth={1} fill="none" />
          </g>
        )}

        {type === 'n' && (
          <g style={{ fill, stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,36 14,30.5 9,26 C 8.5,25.5 9,24 11,24 C 13,24 13.5,23.5 13.5,22 C 13.5,20.5 12,19.5 11,18 C 9,15 11,13 13,13 C 14.5,13 16,14.5 17,14 C 18,13.5 17.5,10.5 22,10 Z" />
            <circle cx="15.5" cy="18.5" r="1.5" fill={isWhite ? '#1e293b' : '#f8fafc'} />
            <path d="M 24,18 C 24.5,16 27,15 28.5,16.5" stroke={secondaryStroke} strokeWidth={1.2} />
            <path d="M 25,23 C 26,20.5 29,19.5 31,21" stroke={secondaryStroke} strokeWidth={1.2} />
            <path d="M 9.5,25.5 A 0.5,0.5 0 1,1 9.5,24.5 A 0.5,0.5 0 1,1 9.5,25.5 Z" />
          </g>
        )}

        {type === 'b' && (
          <g style={{ fill, stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M 9,36 C 12.33,35 15.67,34.5 22.5,34.5 C 29.33,34.5 32.67,35 36,36 C 36,37 35,38 33,38.5 L 12,38.5 C 10,38 9,37 9,36 Z" />
            <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 29,28 C 26,25 29,18 27.5,13 C 26.5,9.5 23.5,8 22.5,8 C 21.5,8 18.5,9.5 17.5,13 C 16,18 19,25 16,28 C 15,30 14.5,30.5 15,32 Z" />
            <circle cx="22.5" cy="5" r="2" />
            <path d="M 17.5,26 L 27.5,26" stroke={secondaryStroke} strokeWidth={1} />
            <path d="M 22.5,14 L 22.5,20" stroke={secondaryStroke} strokeWidth={1.2} />
            <path d="M 19.5,17 L 25.5,17" stroke={secondaryStroke} strokeWidth={1.2} />
          </g>
        )}

        {type === 'q' && (
          <g style={{ fill, stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.5,11 L 22.5,24.5 L 14.5,11 L 14,25 L 6.5,13.5 Z" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="14" cy="9" r="2" />
            <circle cx="22.5" cy="8" r="2" />
            <circle cx="31" cy="9" r="2" />
            <circle cx="39" cy="12" r="2" />
            <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 12,37 C 17,36.5 28,36.5 33,37 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 Z" />
            <path d="M 12,38.5 L 33,38.5" stroke={secondaryStroke} strokeWidth={1.5} />
            <circle cx="22.5" cy="29.5" r="2.5" stroke={secondaryStroke} strokeWidth={1} fill="none" />
          </g>
        )}

        {type === 'k' && (
          <g style={{ fill, stroke, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            {/* Crown Cross */}
            <path d="M 22.5,11.5 L 22.5,4.5" stroke={stroke} strokeWidth={1.8} />
            <path d="M 19.5,7.5 L 25.5,7.5" stroke={stroke} strokeWidth={1.8} />
            <path d="M 22.5,12 C 16,12 12,16 11,20 C 11.5,22 13,24 14,25 C 15,26 15.5,28 14.5,30 C 13.5,32 13.5,34 14,35.5 C 16,35 29,35 31,35.5 C 31.5,34 31.5,32 30.5,30 C 29.5,28 30,26 31,25 C 32,24 33.5,22 34,20 C 33,16 29,12 22.5,12 Z" />
            <path d="M 11.5,37 C 17,35.5 28,35.5 33.5,37 C 33.5,38 32,39.5 30,40 L 15,40 C 13,39.5 11.5,38 11.5,37 Z" />
            <circle cx="22.5" cy="22.5" r="3" stroke={secondaryStroke} strokeWidth={1} fill="none" />
            <path d="M 18,29 L 27,29" stroke={secondaryStroke} strokeWidth={1.2} />
          </g>
        )}
      </svg>
    </div>
  );
};
