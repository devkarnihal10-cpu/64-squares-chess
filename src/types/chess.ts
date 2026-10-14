export interface ChessPlayer {
  id: string;
  slug: string;
  name: string;
  title: 'GM' | 'WGM' | 'IM' | 'World Champion';
  country: string;
  countryCode: string;
  bornYear: number;
  diedYear?: number;
  era: 'Classical & Romantic' | 'Soviet Hegemony' | 'Modern & Digital' | 'Indian Prodigies';
  peakRating: number;
  peakRatingYear?: number;
  fideRank?: string;
  playingStyle: string;
  shortBio: string;
  biography: string[];
  majorAchievements: string[];
  famousGames: {
    title: string;
    white: string;
    black: string;
    year: number;
    result: string;
    description: string;
    gameId?: string;
  }[];
  strategicStrengths: string[];
  quote: string;
  avatarSeed: string;
}

export interface FamousGame {
  id: string;
  title: string;
  white: string;
  whiteTitle?: string;
  black: string;
  blackTitle?: string;
  year: number;
  event: string;
  site: string;
  result: '1-0' | '0-1' | '1/2-1/2';
  opening: string;
  eco: string;
  significance: string;
  summary: string;
  pgn: string;
  initialFen?: string;
  moveCommentary: Record<number, string>; // keyed by move half-ply index or move number
}

export interface HistoryEvent {
  id: string;
  centuryOrDate: string;
  title: string;
  region: string;
  era: 'Origins & Antiquity' | 'Persian & Islamic Expansion' | 'European Renaissance' | 'Romantic Era & Steinitz' | 'Machine Age & Digital Chess';
  summary: string;
  details: string[];
  keyFiguresOrSources: string[];
  ruleEvolution?: string;
  imageCaption?: string;
  uncertaintyNote?: string;
}

export interface LearnModule {
  id: string;
  slug: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  estimatedMinutes: number;
  topicsCount: number;
  level: 'Absolute Beginner' | 'Novice' | 'Intermediate';
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  slug: string;
  moduleId: string;
  title: string;
  overview: string;
  contentSections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
    diagramFen?: string;
    diagramCaption?: string;
  }[];
  interactiveChallenge?: {
    instruction: string;
    initialFen: string;
    expectedMoves: string[]; // UCI or SAN moves: e.g. ["e2e4"] or ["Qxf7#"]
    hint: string;
    successMessage: string;
    explanation: string;
  };
  quizQuestions?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: 'World Championship' | 'FIDE Tour' | 'Indian Chess' | 'Technology & Analysis' | 'Event Announcement';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  bodyParagraphs: string[];
  keyTakeaways: string[];
  sourceAttribution: string;
  sourceUrl?: string;
}

export interface LiveGameBroadcast {
  id: string;
  white: {
    name: string;
    title?: string;
    rating?: number;
    country?: string;
  };
  black: {
    name: string;
    title?: string;
    rating?: number;
    country?: string;
  };
  event: string;
  round?: string;
  timeControl: string;
  status: 'live' | 'upcoming' | 'completed';
  fen: string;
  lastMove?: string;
  eval?: string;
  whiteClock?: string;
  blackClock?: string;
  result?: string;
  source: 'Lichess TV' | 'Official Broadcast Feed' | 'Verified PGN Live';
  lichessId?: string;
}
