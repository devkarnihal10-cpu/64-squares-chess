import React, { useState } from 'react';
import { 
  CHESS_HISTORY_EVENTS, 
  HISTORICAL_RULE_COMPARISONS, 
  CHESS_HISTORY_SOURCES 
} from '../data/historyData';
import { ScrollText, BookOpen, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { ChessImage } from '../components/common/ChessImage';

export const HistoryPage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('All');

  const eras = [
    'All',
    'Origins & Antiquity',
    'Persian & Islamic Expansion',
    'European Renaissance',
    'Romantic Era & Steinitz',
    'Machine Age & Digital Chess'
  ];

  const filteredEvents = selectedEra === 'All' 
    ? CHESS_HISTORY_EVENTS 
    : CHESS_HISTORY_EVENTS.filter(e => e.era === selectedEra);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <ScrollText className="w-4 h-4" />
            <span>Curatorial Archive & Historical Chronicle</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
            The History of Chess: From Ancient India to the Modern World
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Trace fifteen centuries of intellectual evolution—from the 6th-century Gupta empire army simulations through Persian courts and Renaissance revolutions to modern neural network engines and India's global resurgence.
          </p>
        </div>

        {/* Featured Historical Artifact Image */}
        <div className="rounded-xl overflow-hidden border border-stone-800 shadow-2xl bg-[#141822]">
          <ChessImage
            src="/assets/images/chaturanga_history.jpg"
            alt="Historical museum archive of ancient Indian Chaturanga and Persian Shatranj artifacts"
            fallbackTitle="Ancient Indian Chaturanga & Persian Shatranj"
            theme="history"
            className="w-full h-72 sm:h-96 object-cover brightness-90"
          />
          <div className="p-4 sm:p-5 bg-[#12161f] border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-400 gap-2">
            <div>
              <strong className="text-stone-200">Fig. 1 — Archival Representation:</strong> Evolution from Indian Chaturanga (c. 6th C. CE) to Persian Chatrang.
            </div>
            <span className="font-mono text-stone-500">Source: British Museum & National Heritage Records</span>
          </div>
        </div>

        {/* Historical Terms Glossary Card */}
        <div className="bg-[#141822] border border-stone-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>Essential Historical Lexicon</span>
          </div>
          <h2 className="font-serif-display text-xl font-bold text-stone-100">
            Key Etymology & Historical Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-300 pt-2">
            <div className="p-3.5 rounded bg-[#0d1016] border border-stone-800/80 space-y-1">
              <strong className="text-[#d4af37] font-mono text-sm block">Chaturanga (Sanskrit)</strong>
              <p className="text-stone-300">Literally "four limbs" or "four divisions." Refers to the four divisions of the ancient Indian imperial army: infantry (pawns), cavalry (knights), elephants (bishops), and chariots (rooks).</p>
            </div>
            <div className="p-3.5 rounded bg-[#0d1016] border border-stone-800/80 space-y-1">
              <strong className="text-[#d4af37] font-mono text-sm block">Ashtāpada (Sanskrit)</strong>
              <p className="text-stone-300">An ancient Indian 8×8 uncheckered grid board used for race and alignment games before being adopted as the battlefield for Chaturanga.</p>
            </div>
            <div className="p-3.5 rounded bg-[#0d1016] border border-stone-800/80 space-y-1">
              <strong className="text-[#d4af37] font-mono text-sm block">Shāh Māt (Persian)</strong>
              <p className="text-stone-300">"The King is helpless / dead." The direct ancestor of the modern word "Checkmate," French "Échec et mat," and German "Schachmatt."</p>
            </div>
            <div className="p-3.5 rounded bg-[#0d1016] border border-stone-800/80 space-y-1">
              <strong className="text-[#d4af37] font-mono text-sm block">Mansūbat (Arabic)</strong>
              <p className="text-stone-300">Composed tactical chess puzzles and endgame problem studies created by Islamic grandmasters (Aliyat) like as-Suli and al-Adli in 9th-century Baghdad.</p>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Filter Tabs */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <h2 className="font-serif-display text-2xl font-bold text-stone-100">
                Chronological Timeline
              </h2>
              <p className="text-xs text-stone-400 mt-0.5">Explore each epoch of chess history in chronological sequence.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              {eras.map(era => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedEra === era
                      ? 'bg-[#d4af37] text-[#0c0e12] font-semibold shadow-sm'
                      : 'bg-[#181d26] text-stone-400 hover:text-stone-100 hover:bg-[#202734]'
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Events List */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-stone-800">
            {filteredEvents.map((event, idx) => (
              <div key={event.id} className="relative pl-12 group">
                {/* Timeline node marker */}
                <div className="absolute left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#181d26] border-2 border-[#d4af37] group-hover:bg-[#d4af37] transition-colors" />

                <div className="bg-[#141822] border border-stone-800 rounded-xl p-6 hover:border-stone-700 transition-colors space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#d4af37] bg-[#1d2330] px-2.5 py-1 rounded">
                        {event.centuryOrDate}
                      </span>
                      <span className="text-xs text-stone-400 font-medium">{event.region}</span>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500 uppercase">{event.era}</span>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-stone-100">
                    {event.title}
                  </h3>

                  <p className="text-sm text-stone-300 leading-relaxed font-medium">
                    {event.summary}
                  </p>

                  <div className="space-y-2 text-xs text-stone-300">
                    {event.details.map((detail, dIdx) => (
                      <p key={dIdx} className="leading-relaxed text-stone-400">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Rule evolution callout if present */}
                  {event.ruleEvolution && (
                    <div className="p-3.5 rounded bg-[#10131a] border border-stone-800 text-xs text-stone-300">
                      <span className="text-[#d4af37] font-semibold block mb-0.5">Rules Evolution:</span>
                      <span className="text-stone-400">{event.ruleEvolution}</span>
                    </div>
                  )}

                  {/* Historical uncertainty clarification */}
                  {event.uncertaintyNote && (
                    <div className="p-3 rounded bg-amber-950/20 border border-amber-900/30 text-[11px] text-amber-200/90 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                      <span>{event.uncertaintyNote}</span>
                    </div>
                  )}

                  {/* Historical Sources */}
                  <div className="pt-2 text-[11px] text-stone-500 font-mono">
                    <span className="text-stone-400">Primary Documentation:</span>{' '}
                    {event.keyFiguresOrSources.join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: ANCIENT VS MODERN CHESS COMPARISON */}
        <div className="bg-[#141822] border border-stone-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
            <Clock className="w-4 h-4" />
            <span>Comparative Rule Analysis</span>
          </div>
          <div>
            <h2 className="font-serif-display text-2xl font-bold text-stone-100">
              How Modern Chess Differs From Ancient Predecessors
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              The chess played today is fundamentally faster, sharper, and far more lethal than 6th-century Chaturanga or medieval Shatranj.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-300 divide-y divide-stone-800">
              <thead>
                <tr className="text-stone-400 font-mono uppercase text-[11px] bg-[#0d1016]">
                  <th className="py-3 px-4">Rule Aspect</th>
                  <th className="py-3 px-4">Ancient Chaturanga / Shatranj</th>
                  <th className="py-3 px-4 text-[#d4af37]">Modern International Chess</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60">
                {HISTORICAL_RULE_COMPARISONS.map((comp, idx) => (
                  <tr key={idx} className="hover:bg-stone-800/30">
                    <td className="py-3.5 px-4 font-semibold text-stone-200 whitespace-nowrap">
                      {comp.aspect}
                    </td>
                    <td className="py-3.5 px-4 text-stone-400 leading-relaxed">
                      {comp.ancient}
                    </td>
                    <td className="py-3.5 px-4 text-stone-200 leading-relaxed bg-[#d4af37]/5">
                      {comp.modern}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION: ACADEMIC BIBLIOGRAPHY & SOURCES */}
        <div className="bg-[#11141b] border border-stone-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Academic References & Credible Bibliography</span>
          </div>
          <h2 className="font-serif-display text-lg font-bold text-stone-100">
            Historical Sources & Scholarly Works
          </h2>
          <p className="text-xs text-stone-400">
            64 Squares adheres to verified historical standards. All dates and archaeological attributions are drawn from peer-reviewed chess scholarship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {CHESS_HISTORY_SOURCES.map((source, sIdx) => (
              <div key={sIdx} className="p-4 rounded bg-[#161a22] border border-stone-800/80 space-y-1 text-xs">
                <strong className="text-stone-100 font-serif-display text-sm block">
                  {source.title} ({source.year})
                </strong>
                <span className="text-amber-300/90 font-mono block">By {source.author} · {source.publisher}</span>
                <p className="text-stone-400 text-[11px] leading-relaxed pt-1">{source.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
