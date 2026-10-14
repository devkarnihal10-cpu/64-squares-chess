export interface PageSEO {
  title: string;           // 50-60 characters
  description: string;     // 150-160 characters
  primaryKeyword: string;
  secondaryKeywords: string[];
  canonicalSlug: string;
  ogType?: 'website' | 'article';
}

export const SEO_DATA: Record<string, PageSEO> = {
  // 1. Homepage
  home: {
    title: '64 Squares: Master Chess Openings, Tactics & History', // 52 chars
    description: 'Master chess with 64 Squares. Explore 1,500-year history, live grandmaster broadcasts, 10 tactical articles, and beginner guides. Play with real confidence.', // 156 chars
    primaryKeyword: 'chess website',
    secondaryKeywords: ['learn chess', 'chess history', 'live chess games', 'grandmaster tactics'],
    canonicalSlug: '',
    ogType: 'website',
  },

  // 2. History Page
  history: {
    title: 'History of Chess: From Ancient India to Modern World', // 53 chars
    description: 'Discover the origin of chess from 6th-century Indian Chaturanga to modern neural engines. Compare ancient rules, Lewis chessmen, and grandmaster evolution.', // 155 chars
    primaryKeyword: 'history of chess',
    secondaryKeywords: ['chaturanga origin', 'ancient chess history', 'shatranj rules', 'chess evolution'],
    canonicalSlug: 'history',
    ogType: 'article',
  },

  // 3. Live Chess Page
  live: {
    title: 'Live Chess Matches: Watch Grandmaster Games & Streams', // 53 chars
    description: 'Watch live grandmaster chess games streaming now on 64 Squares. Follow real broadcast moves, clock times, evaluations, and tournament matches in real time.', // 156 chars
    primaryKeyword: 'live chess matches',
    secondaryKeywords: ['watch chess live', 'grandmaster broadcast', 'lichess tv games', 'live chess clock'],
    canonicalSlug: 'live',
    ogType: 'website',
  },

  // 4. Players Directory
  players: {
    title: 'Famous Chess Players: 15 Legends & World Champions', // 51 chars
    description: 'Explore 15 legendary chess champions from Magnus Carlsen and Viswanathan Anand to D. Gukesh. Read biographies, peak ratings, playing styles, and titles.', // 153 chars
    primaryKeyword: 'famous chess players',
    secondaryKeywords: ['chess champions', 'magnus carlsen rating', 'viswanathan anand', 'gukesh biography'],
    canonicalSlug: 'players',
    ogType: 'website',
  },

  // 5. Learn Academy
  learn: {
    title: 'Learn Chess Fast: Free Beginner Course & Tactics Guide', // 54 chars
    description: 'Learn chess from zero to confident player with 8 free modules. Master piece moves, essential rules, tactics, openings, and checkmates on interactive boards.', // 157 chars
    primaryKeyword: 'learn chess for beginners',
    secondaryKeywords: ['how to play chess', 'chess rules beginner', 'chess tactics guide', 'checkmate patterns'],
    canonicalSlug: 'learn',
    ogType: 'website',
  },

  // 6. Famous Games Archive
  games: {
    title: 'Greatest Chess Games: Interactive PGN Replay Library', // 52 chars
    description: 'Replay immortal chess games move by move. Study Morphy\'s Opera Game, Kasparov\'s Immortal, and Fischer\'s Game of the Century with grandmaster commentary.', // 153 chars
    primaryKeyword: 'greatest chess games',
    secondaryKeywords: ['famous chess games', 'opera game replay', 'immortal chess game', 'pgn move analysis'],
    canonicalSlug: 'games',
    ogType: 'website',
  },

  // 7. News & Blog Directory
  news: {
    title: 'Chess News & Articles: Tournaments, Strategy & Theory', // 53 chars
    description: 'Read the latest chess news, tournament dispatches, and strategy essays. Follow the World Championship, Indian Olympiad gold, rating shifts, and AI updates.', // 156 chars
    primaryKeyword: 'chess news and articles',
    secondaryKeywords: ['chess tournament updates', 'world chess championship', 'fide ratings', 'chess strategy essays'],
    canonicalSlug: 'news',
    ogType: 'website',
  },

  // 8. About Page
  about: {
    title: 'About 64 Squares: Our Chess Mission & Editorial Desk', // 52 chars
    description: 'Discover the mission of 64 Squares: honoring 1,500 years of chess heritage, broadcasting genuine live matches, and educating new players with free tools.', // 154 chars
    primaryKeyword: 'about 64 squares',
    secondaryKeywords: ['chess education mission', 'editorial standards', 'contact chess desk', 'fide verified data'],
    canonicalSlug: 'about',
    ogType: 'website',
  },

  // ARTICLE 1: Chaturanga Origins
  'article-genesis-of-64-squares-ancient-chaturanga': {
    title: 'How Ancient Indian Chaturanga Conquered the Whole World', // 55 chars
    description: 'Trace how 6th-century Indian Chaturanga on the 64-square Ashtapada became Persian Chatrang, Islamic Shatranj, and modern chess. Discover the origin story.', // 155 chars
    primaryKeyword: 'ancient indian chaturanga',
    secondaryKeywords: ['origin of chess', 'ashtapada board', 'chatrang persia', 'history of checkmate'],
    canonicalSlug: 'news/genesis-of-64-squares-ancient-chaturanga',
    ogType: 'article',
  },

  // ARTICLE 2: Queen's Revolution
  'article-the-1475-queens-revolution': {
    title: 'The 1475 Queen\'s Revolution: How Chess Became So Deadly', // 55 chars
    description: 'Discover how 15th-century Valencia masters transformed the weak counselor into the lethal Queen, creating modern tactical checkmates and aggressive chess.', // 154 chars
    primaryKeyword: 'chess queen revolution 1475',
    secondaryKeywords: ['scachs d amor', 'queen moves history', 'castling origin', 'valencia chess history'],
    canonicalSlug: 'news/the-1475-queens-revolution',
    ogType: 'article',
  },

  // ARTICLE 3: India Double Gold Budapest
  'article-india-historic-double-gold-budapest-olympiad': {
    title: 'How India Won Historic Double Gold at Budapest Olympiad', // 55 chars
    description: 'Relive India\'s historic double gold at the 45th Chess Olympiad. Read how Gukesh, Arjun, and the women\'s team dominated with a 3056 performance rating.', // 152 chars
    primaryKeyword: 'india double gold chess olympiad',
    secondaryKeywords: ['budapest chess olympiad 2024', 'gukesh board 1 gold', 'arjun erigaisi 2800', 'indian chess team'],
    canonicalSlug: 'news/india-historic-double-gold-budapest-olympiad',
    ogType: 'article',
  },

  // ARTICLE 4: Gukesh Candidates
  'article-gukesh-candidates-triumph-toronto': {
    title: 'How 17-Year-Old D. Gukesh Made World Championship History', // 57 chars
    description: 'Read how 17-year-old Dommaraju Gukesh broke Garry Kasparov\'s 40-year record in Toronto to become the youngest World Chess Championship challenger in history.', // 158 chars
    primaryKeyword: 'gukesh candidates winner 2024',
    secondaryKeywords: ['youngest chess challenger', 'toronto candidates recap', 'gukesh vs ding', 'fide candidates tournament'],
    canonicalSlug: 'news/gukesh-candidates-triumph-toronto',
    ogType: 'article',
  },

  // ARTICLE 5: Deep Blue to AlphaZero
  'article-from-deep-blue-to-alphazero-ai-revolution': {
    title: 'From Deep Blue to AlphaZero: How AI Changed Chess Forever', // 57 chars
    description: 'Explore the AI chess revolution from Deep Blue defeating Kasparov in 1997 to DeepMind\'s AlphaZero sacrificing material for poetic, unstoppable piece activity.', // 159 chars
    primaryKeyword: 'ai chess engines alphazero',
    secondaryKeywords: ['deep blue vs kasparov', 'stockfish nnue', 'neural network chess', 'deepmind alphazero'],
    canonicalSlug: 'news/from-deep-blue-to-alphazero-ai-revolution',
    ogType: 'article',
  },

  // ARTICLE 6: Art of Calculation
  'article-the-art-of-grandmaster-calculation': {
    title: 'How Grandmasters Calculate 10 Moves Ahead in Every Game', // 55 chars
    description: 'Uncover how grandmasters calculate deep lines using chunking and Kotov\'s candidate moves. Train your tactical vision and eliminate blunders in your games.', // 155 chars
    primaryKeyword: 'how to calculate in chess',
    secondaryKeywords: ['grandmaster calculation', 'candidate moves kotov', 'visual chunking', 'chess tactical vision'],
    canonicalSlug: 'news/the-art-of-grandmaster-calculation',
    ogType: 'article',
  },

  // ARTICLE 7: Lasker Psychology
  'article-the-psychology-of-chess-lasker-mind-games': {
    title: 'Chess Psychology: Lasker\'s Mind Games and Tilt Control', // 54 chars
    description: 'Learn how Emanuel Lasker held the world crown for 27 years by attacking human psychology. Master tilt control and practical problem-posing on the board.', // 153 chars
    primaryKeyword: 'chess psychology tips',
    secondaryKeywords: ['emanuel lasker style', 'how to avoid tilt chess', 'practical chess defense', 'competitive mindset'],
    canonicalSlug: 'news/the-psychology-of-chess-lasker-mind-games',
    ogType: 'article',
  },

  // ARTICLE 8: Mikhail Tal Sacrifices
  'article-the-beauty-of-sacrifices-mikhail-tal': {
    title: 'Mikhail Tal\'s Wild Sacrifices: Why Initiative Wins Games', // 56 chars
    description: 'Discover how the Magician of Riga overwhelmed opponents with intuitive piece sacrifices. Learn how dynamic tempo and king attacks conquer raw material.', // 152 chars
    primaryKeyword: 'mikhail tal chess sacrifices',
    secondaryKeywords: ['magician of riga', 'attacking chess strategy', 'chess initiative vs material', 'tal vs botvinnik'],
    canonicalSlug: 'news/the-beauty-of-sacrifices-mikhail-tal',
    ogType: 'article',
  },

  // ARTICLE 9: Endgame Mastery Capablanca
  'article-mastering-the-endgame-capablanca-principles': {
    title: 'Mastering the Endgame: Why Capablanca Studied Ends First', // 56 chars
    description: 'Unlock Capablanca\'s secret to chess mastery. Learn why studying king activity, opposition, Lucena, and Philidor endgames transforms your overall rating.', // 153 chars
    primaryKeyword: 'chess endgame principles',
    secondaryKeywords: ['capablanca endgame technique', 'king and pawn opposition', 'lucena position guide', 'philidor defense endgame'],
    canonicalSlug: 'news/mastering-the-endgame-capablanca-principles',
    ogType: 'article',
  },

  // ARTICLE 10: 2800 Rating Club
  'article-the-exclusive-2800-rating-club': {
    title: 'The 2800 Club: Inside the Most Exclusive Rank in Sports', // 55 chars
    description: 'Discover the mathematical brutality of the 2800 FIDE Elo club. Learn how only 16 players in history, including Arjun Erigaisi, climbed the chess summit.', // 154 chars
    primaryKeyword: '2800 fide rating club',
    secondaryKeywords: ['highest rated chess players', 'magnus carlsen 2882', 'arjun erigaisi live rating', 'fide elo mathematics'],
    canonicalSlug: 'news/the-exclusive-2800-rating-club',
    ogType: 'article',
  },
};
