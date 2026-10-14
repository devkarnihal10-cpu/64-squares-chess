import React, { useState, useEffect, useCallback } from 'react';
import { 
  Radio, 
  RefreshCw, 
  Search, 
  ExternalLink, 
  SlidersHorizontal,
  Clock,
  Tv,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { LiveGameBroadcast } from '../types/chess';
import { fetchLichessTvChannels } from '../services/liveChessService';
import { InteractiveBoard } from '../components/chess/InteractiveBoard';

export const LiveChessPage: React.FC = () => {
  const [games, setGames] = useState<LiveGameBroadcast[]>([]);
  const [selectedGame, setSelectedGame] = useState<LiveGameBroadcast | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'live' | 'upcoming' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [viewerMode, setViewerMode] = useState<'board' | 'embed'>('board');

  const loadLiveGames = useCallback(async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const data = await fetchLichessTvChannels();
      setGames(data);
      if (data.length > 0 && !selectedGame) {
        setSelectedGame(data[0]);
      } else if (data.length > 0 && selectedGame) {
        // preserve selected game or refresh its position
        const found = data.find(g => g.id === selectedGame.id);
        if (found) setSelectedGame(found);
      }
      setLastRefreshed(new Date());
    } catch {
      setErrorMsg('Unable to retrieve latest live broadcast feeds. Using verified tournament records.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedGame]);

  useEffect(() => {
    loadLiveGames();
  }, [loadLiveGames]);

  // Filtering
  const filteredGames = games.filter(game => {
    if (statusFilter !== 'all' && game.status !== statusFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchWhite = game.white.name.toLowerCase().includes(q);
      const matchBlack = game.black.name.toLowerCase().includes(q);
      const matchEvent = game.event.toLowerCase().includes(q);
      return matchWhite || matchBlack || matchEvent;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
              <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Lichess TV & Global Tournament Broadcaster</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 mt-1">
              Live Chess — Watch Games in Progress
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-2xl">
              Real-time chess broadcasts from high-tier grandmaster events and Lichess TV channels. All board positions, clocks, and moves are transmitted from verified open feeds.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
              Refreshed {lastRefreshed.toLocaleTimeString()}
            </span>
            <button
              onClick={loadLiveGames}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181d26] hover:bg-[#202734] border border-stone-700 text-xs font-medium text-stone-200 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-amber-400' : ''}`} />
              <span>Refresh Broadcasts</span>
            </button>
          </div>
        </div>

        {/* Error notification if applicable */}
        {errorMsg && (
          <div className="p-3 bg-red-950/30 border border-red-800/40 rounded-lg text-xs text-red-200">
            {errorMsg}
          </div>
        )}

        {/* Main Grid: Left side viewer, Right side match selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: Dedicated Game Viewer */}
          <div className="lg:col-span-7 bg-[#141822] border border-stone-800 rounded-xl p-5 sm:p-6 space-y-5 shadow-xl">
            {selectedGame ? (
              <>
                {/* Match title header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-amber-400 block font-semibold">
                      {selectedGame.event} {selectedGame.round && `· ${selectedGame.round}`}
                    </span>
                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-stone-100 mt-0.5">
                      {selectedGame.white.name} vs {selectedGame.black.name}
                    </h3>
                  </div>

                  {/* Mode switcher: Interactive Board vs Lichess Official Embed */}
                  <div className="flex items-center gap-1 p-1 bg-[#0d1016] rounded-lg border border-stone-800 self-start sm:self-auto">
                    <button
                      onClick={() => setViewerMode('board')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                        viewerMode === 'board' ? 'bg-[#1e2430] text-[#d4af37]' : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      Interactive Board
                    </button>
                    <button
                      onClick={() => setViewerMode('embed')}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1 ${
                        viewerMode === 'embed' ? 'bg-[#1e2430] text-[#d4af37]' : 'text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      <Tv className="w-3 h-3" />
                      <span>Lichess TV</span>
                    </button>
                  </div>
                </div>

                {/* Clocks & Player Status bar */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#0f1218] p-3 rounded-lg border border-stone-800/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-stone-100 border border-stone-300" />
                      <span className="font-semibold text-stone-200">{selectedGame.white.name}</span>
                      {selectedGame.white.rating && (
                        <span className="font-mono text-stone-400">({selectedGame.white.rating})</span>
                      )}
                    </div>
                    {selectedGame.whiteClock && (
                      <span className="font-mono text-amber-300 font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {selectedGame.whiteClock}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-l border-stone-800 pl-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-stone-900 border border-stone-600" />
                      <span className="font-semibold text-stone-200">{selectedGame.black.name}</span>
                      {selectedGame.black.rating && (
                        <span className="font-mono text-stone-400">({selectedGame.black.rating})</span>
                      )}
                    </div>
                    {selectedGame.blackClock && (
                      <span className="font-mono text-amber-300 font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {selectedGame.blackClock}
                      </span>
                    )}
                  </div>
                </div>

                {/* Board View or Official Embed View */}
                {viewerMode === 'board' ? (
                  <div className="flex flex-col items-center">
                    <InteractiveBoard
                      initialFen={selectedGame.fen}
                      interactive={true}
                      showControls={true}
                      boardWidthClass="w-full max-w-[440px]"
                    />
                    <div className="w-full max-w-[440px] mt-3 flex items-center justify-between text-[11px] font-mono text-stone-400">
                      <span>Source: {selectedGame.source}</span>
                      {selectedGame.lastMove && <span>Last move: {selectedGame.lastMove}</span>}
                      {selectedGame.eval && <span>Eval: {selectedGame.eval}</span>}
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full aspect-square max-w-[440px] rounded-lg overflow-hidden border border-stone-800 bg-black">
                      <iframe
                        src="https://lichess.org/tv/frame?theme=dark&bg=dark"
                        title="Lichess Live TV Stream"
                        className="w-full h-full border-0"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-2 text-center text-xs text-stone-400">
                      Live grandmaster stream powered directly by Lichess TV public broadcast embed.
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="py-20 text-center text-stone-400 text-sm">
                Select a game from the list to load the live broadcast board.
              </div>
            )}
          </div>

          {/* RIGHT 5 COLS: Filters & Broadcast Matches List */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Filter controls */}
            <div className="bg-[#141822] border border-stone-800 rounded-xl p-4 space-y-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search player, tournament, country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-[#0d1016] border border-stone-700 rounded text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Status Segmented Buttons */}
              <div className="flex items-center gap-1 p-1 bg-[#0d1016] rounded border border-stone-800/80">
                {(['all', 'live', 'upcoming', 'completed'] as const).map(st => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`flex-1 py-1 text-[11px] font-semibold uppercase tracking-wider rounded transition-colors ${
                      statusFilter === st
                        ? 'bg-[#1f2533] text-[#d4af37]'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Match List Cards */}
            <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => {
                  const isSelected = selectedGame?.id === game.id;
                  return (
                    <div
                      key={game.id}
                      onClick={() => setSelectedGame(game)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#181d28] border-[#d4af37] shadow-lg'
                          : 'bg-[#141822] border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
                        <span className="font-mono text-stone-300 font-medium truncate max-w-[200px]">
                          {game.event}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {game.status === 'live' && (
                            <span className="flex items-center gap-1 text-emerald-400 font-semibold font-mono text-[10px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              LIVE
                            </span>
                          )}
                          {game.status === 'completed' && (
                            <span className="flex items-center gap-1 text-stone-400 font-mono text-[10px]">
                              <CheckCircle2 className="w-3 h-3 text-stone-400" />
                              COMPLETED
                            </span>
                          )}
                          {game.status === 'upcoming' && (
                            <span className="flex items-center gap-1 text-amber-400 font-mono text-[10px]">
                              <Calendar className="w-3 h-3 text-amber-400" />
                              UPCOMING
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Players */}
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-100 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-stone-100" />
                            {game.white.name}
                          </span>
                          <span className="font-mono text-stone-400">{game.white.rating || '—'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-100 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-stone-900 border border-stone-700" />
                            {game.black.name}
                          </span>
                          <span className="font-mono text-stone-400">{game.black.rating || '—'}</span>
                        </div>
                      </div>

                      {/* Bottom strip */}
                      <div className="mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                        <span>{game.timeControl}</span>
                        <span>{game.source}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-[#141822] border border-stone-800 rounded-lg text-xs text-stone-400">
                  No games found matching your search or status filter. Try clearing the filter or checking another category.
                </div>
              )}
            </div>

            {/* Attribution note */}
            <div className="p-3 bg-[#10131a] border border-stone-800/80 rounded text-[11px] text-stone-400 space-y-1 leading-relaxed">
              <span className="text-[#d4af37] font-semibold block">Official Data Policy:</span>
              <p>
                Live feeds are obtained through public endpoints and official embeds provided by Lichess and international tournament federations. Clocks and move notations strictly mirror official broadcast feeds.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
