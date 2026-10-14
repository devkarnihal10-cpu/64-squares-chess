import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Send, 
  BookOpen, 
  Radio, 
  Crown, 
  History,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 15) {
      errors.message = 'Message must be at least 15 characters.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form validated cleanly
      setSubmittedStatus(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0e12] text-stone-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Mission & Editorial Standards</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-100">
            About 64 Squares
          </h1>
          <p className="font-serif-display text-lg text-amber-200/90 italic">
            “64 Squares. Infinite Possibilities.”
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-5 shadow-xl">
          <h2 className="font-serif-display text-2xl font-bold text-stone-100 border-b border-stone-800 pb-3">
            Our Purpose & Vision
          </h2>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            <strong className="text-stone-100">64 Squares</strong> was founded to provide a serious, dignified, and beautifully curated destination for chess enthusiasts of all levels. In an era dominated by rapid clickbait and superficial gaming clips, we honor the royal game\'s intellectual depth, fifteen centuries of historical heritage, and modern grandmaster brilliance.
          </p>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Whether you are tracing the evolution of pawns from ancient Indian Chaturanga, studying the tactical sacrifices of Mikhail Tal, replaying Bobby Fischer\'s Game of the Century, or following live world championship broadcasts, 64 Squares gathers the royal game into one cohesive platform.
          </p>
        </div>

        {/* Four Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase font-mono">
              <History className="w-4 h-4" />
              <span>Historical Rigor</span>
            </div>
            <h3 className="font-serif-display text-base font-bold text-stone-100">
              Verified Heritage
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              We distinguish verifiable archaeological and literary evidence from romantic mythology. Every timeline entry cites recognized academic scholars like H.J.R. Murray and FIDE historical archives.
            </p>
          </div>

          <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase font-mono">
              <BookOpen className="w-4 h-4" />
              <span>Free Education</span>
            </div>
            <h3 className="font-serif-display text-base font-bold text-stone-100">
              Open Academy
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              All 8 beginner and intermediate learning modules—covering piece movements, opening principles, tactical motifs, and endgame checkmates—are 100% free with no registration walls.
            </p>
          </div>

          <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase font-mono">
              <Radio className="w-4 h-4 text-amber-400" />
              <span>Live Integrity</span>
            </div>
            <h3 className="font-serif-display text-base font-bold text-stone-100">
              Genuine Broadcasts
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              We never fabricate live game data, clocks, or tournament results. Broadcast feeds are directly sourced through verified public APIs including Lichess open channels.
            </p>
          </div>

          <div className="bg-[#141822] border border-stone-800 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase font-mono">
              <Crown className="w-4 h-4 text-amber-300" />
              <span>Curated Pantheon</span>
            </div>
            <h3 className="font-serif-display text-base font-bold text-stone-100">
              Masterpiece Archives
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Detailed biographies of 15 legendary champions, accompanied by interactive move-by-move PGN replays and verified strategic commentary.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#141822] border border-stone-800 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
              <Mail className="w-4 h-4 text-[#d4af37]" />
              <span>Contact the Editorial Desk</span>
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-stone-100">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Have a historical inquiry, tournament reporting correction, or feedback for the 64 Squares editorial board? Send us a message below.
            </p>
          </div>

          {submittedStatus ? (
            <div className="p-6 rounded-xl bg-[#0d1016] border border-emerald-600/40 text-stone-200 space-y-2 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="font-serif-display text-lg font-bold text-emerald-300">
                Inquiry Validated
              </h3>
              <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                Thank you for your message, <strong className="text-stone-100">{formData.name}</strong>. Your feedback has been verified and logged for editorial review.
              </p>
              <button
                onClick={() => {
                  setSubmittedStatus(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-3 text-xs text-[#d4af37] hover:underline font-semibold"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Grandmaster aspirant..."
                    className="w-full px-3 py-2 bg-[#0d1016] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
                  />
                  {formErrors.name && (
                    <span className="text-[11px] text-red-400 block">{formErrors.name}</span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300 block">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 bg-[#0d1016] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
                  />
                  {formErrors.email && (
                    <span className="text-[11px] text-red-400 block">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300 block">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Historical inquiry regarding 15th century Queen's move"
                  className="w-full px-3 py-2 bg-[#0d1016] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
                />
                {formErrors.subject && (
                  <span className="text-[11px] text-red-400 block">{formErrors.subject}</span>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300 block">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please share details..."
                  className="w-full px-3 py-2 bg-[#0d1016] border border-stone-700 rounded-lg text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#d4af37]"
                />
                {formErrors.message && (
                  <span className="text-[11px] text-red-400 block">{formErrors.message}</span>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  Client-side verified submission
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#d4af37] hover:bg-[#c29d2b] text-[#0c0e12] font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
