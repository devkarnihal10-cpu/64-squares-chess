import React, { useState } from 'react';

interface ChessImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  theme?: 'hero' | 'history' | 'academy' | 'general';
}

export const ChessImage: React.FC<ChessImageProps> = ({
  src,
  alt = 'Chess illustration',
  className = '',
  fallbackTitle,
  theme = 'general',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Normalize path: if path starts with /src/assets/, point it to /assets/ for production builds
  const normalizedSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.startsWith('/src/assets/')) {
      return src.replace('/src/assets/', '/assets/');
    }
    return src;
  }, [src]);

  // Compute corresponding webp source if it's a local jpg asset
  const webpSrc = React.useMemo(() => {
    if (!normalizedSrc) return '';
    if (normalizedSrc.endsWith('.jpg') || normalizedSrc.endsWith('.jpeg')) {
      return normalizedSrc.replace(/\.(jpg|jpeg)$/, '.webp');
    }
    return '';
  }, [normalizedSrc]);

  if (hasError || !normalizedSrc) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a202c] via-[#12161f] to-[#0c0e12] border border-stone-800 text-stone-300 p-6 select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle decorative chessboard grid background watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={(Math.floor(i / 8) + (i % 8)) % 2 === 1 ? 'bg-white' : 'bg-transparent'}
              />
            ))}
          </div>
        </div>

        {/* Thematic icon badge */}
        <div className="relative z-10 w-12 h-12 rounded-xl bg-[#202734] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-lg mb-2">
          {theme === 'history' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {theme === 'academy' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          )}
          {(theme === 'hero' || theme === 'general') && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19 20H5V18C5 17 6 15 8 14C7 13 6 11 6 9C6 6 8 3 12 3C15 3 17 5 17 8C17 9 16 10 15 11C17 12 18 14 18 16L19 20ZM12 5C9.5 5 8 6.8 8 9C8 10.3 8.7 11.5 9.7 12.2L10.5 12.8L9.7 13.4C8 14.6 7.1 16.2 7 18H17L16.2 14.8C15.8 13.5 14.8 12.5 13.5 11.8L12.7 11.4L13.5 10.9C14.4 10.3 15 9.2 15 8C15 6.3 13.7 5 12 5Z" />
            </svg>
          )}
        </div>

        <span className="relative z-10 font-serif-display text-sm font-semibold text-stone-100 text-center tracking-wide">
          {fallbackTitle || alt}
        </span>
        <span className="relative z-10 text-[11px] font-mono text-stone-400 mt-0.5">
          64 Squares Archive
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#12161f] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#161a22] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-stone-700 border-t-[#d4af37] rounded-full animate-spin" />
        </div>
      )}
      <picture className="w-full h-full">
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          {...props}
          src={normalizedSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </picture>
    </div>
  );
};
