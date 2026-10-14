import { HistoryEvent } from '../types/chess';

export const CHESS_HISTORY_EVENTS: HistoryEvent[] = [
  {
    id: 'chaturanga-origins',
    centuryOrDate: 'c. 6th Century CE',
    title: 'Chaturanga: The Ancient Indian Genesis',
    region: 'Gupta Empire, Northern India',
    era: 'Origins & Antiquity',
    summary: 'The earliest verifiable ancestor of chess emerges in northwest India under the Gupta dynasty, depicting the fourfold military divisions of ancient Indian warfare.',
    details: [
      'The Sanskrit term "Chaturanga" literally means "four limbs" or "four divisions," directly reflecting the classic composition of the ancient Indian imperial army: infantry (padati / pawns), cavalry (ashva / knights), elephants (gaja / bishops), and war chariots (ratha / rooks), commanded by the Raja (king) and his Mantri (counselor / queen).',
      'The game was played on an uncheckered 8×8 grid board known as the "Ashtapada," which had previously existed for race games.',
      'Unlike games of pure dice chance, Chaturanga emphasized calculated strategy, tactical encirclement, and royal protection, designed as a simulation of military generalship and statecraft for noble princes and military commanders.'
    ],
    keyFiguresOrSources: [
      'Bāṇabhaṭṭa\'s Harṣacarita (c. 625 CE) — earliest documented Sanskrit literary allusion to Ashtapada and king-encirclement.',
      'H.J.R. Murray, "A History of Chess" (Oxford University Press, 1913).'
    ],
    ruleEvolution: 'Pieces moved with limited scope: the counselor could only move one square diagonally; the elephant leaped two squares diagonally; pawns lacked the initial double-step move; there was no castling.',
    imageCaption: 'Ancient Indian ivory and stone Ashtapada board pieces illustrating the four divisions of the army.',
    uncertaintyNote: 'While 6th-century Gupta origin is the dominant consensus among modern historians, earlier claims linking chess to the Mahabharata or 2000 BCE Harappan dice games lack decisive archaeological board-game evidence.'
  },
  {
    id: 'persian-chatrang',
    centuryOrDate: 'c. 600–650 CE',
    title: 'Chatrang: The Royal Game of Sasanian Persia',
    region: 'Sasanian Empire (Modern Iran/Iraq)',
    era: 'Origins & Antiquity',
    summary: 'Chaturanga traveled along Silk Road trade corridors to Persia during the reign of Khosrow I, becoming an essential discipline of courtly education.',
    details: [
      'In Persia, the Indian name "Chaturanga" was adapted into Middle Persian as "Chatrang."',
      'Persian royal youth were required to master Chatrang alongside horsemanship, archery, and calligraphy as an intellectual badge of aristocratic breeding.',
      'The Persian players introduced the verbal warning "Shāh!" when the opponent\'s king was assaulted, and "Shāh māt!" ("the King is helpless / ambushed / dead") when the king could not escape. This Persian phrase is the direct etymological root of the English "Checkmate," French "Échec et mat," and German "Schachmatt."'
    ],
    keyFiguresOrSources: [
      'Kārnāmag-ī Ardakhshīr-ī Pābagān (Book of the Deeds of Ardashir, c. 600 CE) — first explicit Middle Persian text mentioning the game.',
      'Ferdowsi\'s epic Shahnameh (Book of Kings) recounting the embassy of the King of Hind bearing the game to King Khosrow I.'
    ],
    ruleEvolution: 'Standardized pieces: Shah (King), Farzin (Counselor), Pil (Elephant), Asp (Horse), Rokh (Chariot), Piyada (Foot-soldier).'
  },
  {
    id: 'islamic-shatranj',
    centuryOrDate: '7th – 10th Century CE',
    title: 'Shatranj and the Golden Age of Islamic Scholarship',
    region: 'Abbasid Caliphate (Baghdad, Damascus, Cairo)',
    era: 'Persian & Islamic Expansion',
    summary: 'Following the Islamic conquest of Persia, the game was renamed "Shatranj" and flourished under the Abbasid Caliphs in Baghdad, generating the first chess literature, grandmasters, and analytical problem studies.',
    details: [
      'Islamic scholars embraced chess as an intellectual art compatible with philosophy, mathematics, and tactical reason.',
      'The Abbasid Caliphs Harun al-Rashid and al-Ma\'mun patronized the earliest recognized master players, known as "Aliyat" (the grandmasters of their era), notably al-Adli and as-Suli.',
      'Masters composed "mansubat" — exquisite tactical chess puzzles and endgame studies with strict narrative themes.',
      'Because figurative representations of humans and animals were discouraged in religious art, Islamic artisans created abstract, geometric, minimalist chess sets carved in stone, alabaster, and wood, which later influenced European Staunton proportions.'
    ],
    keyFiguresOrSources: [
      'Abu Bakr as-Suli (880–946 CE) — the legendary master and chess historian whose analytical treatise remained unsurpassed for centuries.',
      'Al-Adli ar-Rumi (c. 840 CE) — authored "Kitab ash-Shatranj" (Book of Chess).'
    ],
    ruleEvolution: 'Stalemate counted as a victory for the side giving stalemate in many Islamic schools, and winning all the opponent\'s pieces (leaving a "bare king") was also declared a win.'
  },
  {
    id: 'european-arrival',
    centuryOrDate: '10th – 13th Century CE',
    title: 'Transmission to Medieval Europe',
    region: 'Al-Andalus (Moorish Spain), Sicily, Holy Roman Empire',
    era: 'European Renaissance',
    summary: 'Chess entered Christian Europe through Muslim Andalusia and Norman Sicily, quickly adopted by European royalty and the knightly chivalric code.',
    details: [
      'By 1000 CE, chess had traversed the Pyrenees into northern Europe, recorded in the Catalan testament of Count Ermengol I of Urgell (1010 CE).',
      'The famous "Lewis Chessmen," carved from walrus tusk and whale teeth on the Isle of Lewis (Scotland) around 1150–1200 CE, showcase the cultural transition to Christian monarchy: knights on chargers, bishops in mitres, and solemn kings with swords across their knees.',
      'In 1283, King Alfonso X of Castile commissioned the monumental "Libro de los Juegos" (Book of Games), illustrating Christians, Muslims, and Jews playing chess together in peaceful cultural communion.'
    ],
    keyFiguresOrSources: [
      'The Lewis Chessmen collection (British Museum & National Museum of Scotland).',
      'King Alfonso X of Castile, "Libro de acedrex, dados e tablas" (1283).'
    ],
    ruleEvolution: 'Europe introduced the checkered alternating light and dark squares to aid diagonal line visualization, but piece movements remained slow.'
  },
  {
    id: 'mad-queen-revolution',
    centuryOrDate: 'c. 1475 – 1500 CE',
    title: 'The Queen\'s Revolution: The Birth of Modern Chess',
    region: 'Valencia & Castile (Spain), Italy',
    era: 'European Renaissance',
    summary: 'The slow medieval game was revolutionized into "Scachs d\'amor" (Chess of Love) or "Axedrez de la Dama", bestowing catastrophic long-range power upon the Queen and Bishop.',
    details: [
      'Before 1475, chess was a slow maneuvering game that could take hours: the counselor (Fers) moved only one diagonal square, and the elephant (Alfil) leaped two squares.',
      'In late 15th-century Valencia and Castile, inspired in part by the immense geopolitical authority of Queen Isabella I of Castile, chess players radically transformed the Queen into the most powerful weapon on the board, combining the full powers of the Rook and Bishop across unrestricted ranks, files, and diagonals.',
      'The Bishop was granted unlimited diagonal traversal, pawns were granted the option of advancing two squares on their first move (giving rise to the "en passant" rule), and castling was created to tuck the endangered king to safety.',
      'These rule updates transformed chess from a sedate contest into a dynamic, sharp, and lethal art of tactical calculation.'
    ],
    keyFiguresOrSources: [
      '"Scachs d\'amor" (Valencia, c. 1475) — Catalan poem containing the earliest recorded modern chess game.',
      'Luis Ramírez de Lucena, "Repetición de Amores y Arte de Axedrez" (Salamanca, 1497).'
    ],
    ruleEvolution: 'Modern moves finalized: Queen combines Rook + Bishop; Bishop traverses full diagonals; pawn double-step; castling rules codified.'
  },
  {
    id: 'romantic-era-london-1851',
    centuryOrDate: '1851 CE',
    title: 'London 1851: The First International Tournament',
    region: 'St. George\'s Chess Club, London, England',
    era: 'Romantic Era & Steinitz',
    summary: 'Organized by Howard Staunton alongside the Great Exhibition, London 1851 marked the inception of international competitive tournament chess.',
    details: [
      'Before 1851, masters played informal stakes matches in coffeehouses like London\'s Simpson\'s-in-the-Strand and Paris\'s Café de la Régence.',
      'English master Howard Staunton convened the greatest players across Europe—including Adolf Anderssen of Prussia, Lionel Kieseritzky, and Howard Staunton himself.',
      'Adolf Anderssen won the tournament, and during a casual side-game against Kieseritzky, played what is now immortalized as "The Immortal Game" (sacrificing both rooks, a bishop, and his queen to deliver checkmate with two minor pieces).',
      'The tournament also revealed the need for chess clocks, as individual moves occasionally took over two hours.'
    ],
    keyFiguresOrSources: [
      'Howard Staunton (inventor of the standard Staunton piece design manufactured by Jaques of London).',
      'Adolf Anderssen (German mathematics professor and tournament champion).'
    ],
    ruleEvolution: 'Sandglasses and later mechanical dual-face chess clocks were introduced in subsequent years to eliminate indefinite stalling.'
  },
  {
    id: 'official-world-championship',
    centuryOrDate: '1886 CE',
    title: '1886: The First Official World Championship',
    region: 'New York, St. Louis, and New Orleans (United States)',
    era: 'Romantic Era & Steinitz',
    summary: 'Wilhelm Steinitz defeated Johannes Zukertort in the first officially recognized World Chess Championship match, cementing the scientific foundation of chess strategy.',
    details: [
      'Wilhelm Steinitz pioneered modern chess theory, demonstrating that speculative sacrifices must yield to positional principles: pawn structure, king safety, weak squares, and accumulation of small advantages.',
      'Steinitz reigned until 1894 when Emanuel Lasker claimed the crown, holding it for an all-time record of 27 consecutive years.',
      'Subsequent champions established the golden lineage: the Cuban genius José Raúl Capablanca (1921), Alexander Alekhine (1927), Max Euwe (1935), and Mikhail Botvinnik (1948) as the Soviet chess school rose to dominance.'
    ],
    keyFiguresOrSources: [
      'Wilhelm Steinitz — First official World Chess Champion (1886–1894).',
      'Johannes Zukertort — World Championship challenger and brilliant tactician.'
    ]
  },
  {
    id: 'deep-blue-revolution',
    centuryOrDate: '1997 CE',
    title: 'Man vs. Machine: Deep Blue Defeats Garry Kasparov',
    region: 'Equitable Center, New York City',
    era: 'Machine Age & Digital Chess',
    summary: 'IBM\'s supercomputer Deep Blue defeated reigning World Champion Garry Kasparov in a six-game match, marking a watershed moment in artificial intelligence and chess history.',
    details: [
      'Kasparov had previously defeated Deep Blue 4–2 in Philadelphia in 1996. IBM heavily upgraded the supercomputer with 480 specialized chess processing chips capable of calculating 200 million positions per second.',
      'In Game 6, Kasparov played a dubious variation in the Caro-Kann Defense and was devastated in just 19 moves by Deep Blue\'s tactical piece sacrifice.',
      'While human grandmasters initially feared computers would kill chess, engines became indispensable analytical training companions, democratizing world-class preparation for anyone with a computer.'
    ],
    keyFiguresOrSources: [
      'Garry Kasparov — 13th World Champion and highest-rated human of the 20th century.',
      'Dr. Feng-hsiung Hsu & Murray Campbell — IBM Deep Blue research team.'
    ]
  },
  {
    id: 'alphazero-neural-networks',
    centuryOrDate: '2017 – 2018 CE',
    title: 'AlphaZero & The Neural Network Renaissance',
    region: 'DeepMind, London',
    era: 'Machine Age & Digital Chess',
    summary: 'DeepMind\'s AlphaZero mastered chess through reinforcement self-play in just 4 hours without human opening books, creating intuitive, poetic attacking ideas.',
    details: [
      'Unlike traditional brute-force engines, AlphaZero evaluated positions using deep neural networks and Monte Carlo Tree Search, prioritizing piece activity, space, and long-term pawn sacrifices over raw material.',
      'AlphaZero defeated Stockfish 8 decisively in a 100-game match (+28 -0 =72), reshaping how modern grandmasters think about piece activity and attacking king safety.',
      'The open-source Leela Chess Zero (Lc0) and neural-network enhanced Stockfish (NNUE) brought this superhuman intuition to everyday chess students worldwide.'
    ],
    keyFiguresOrSources: [
      'Demis Hassabis & David Silver (DeepMind / Google).',
      'Matthew Sadler & Natasha Regan, "Game Changer" (New in Chess, 2019).'
    ]
  },
  {
    id: 'india-global-superpower',
    centuryOrDate: '2000 – Present CE',
    title: 'The Indian Chess Renaissance: Back to the Roots',
    region: 'Chennai, New Delhi, Budapest, Worldwide',
    era: 'Machine Age & Digital Chess',
    summary: 'From Viswanathan Anand\'s trailblazing 5 World Championships to India\'s historic Double Gold at the 2024 Budapest Olympiad and D. Gukesh becoming the youngest World Championship Challenger in history.',
    details: [
      'Viswanathan "Vishy" Anand inspired an entire subcontinent by becoming India\'s first Grandmaster in 1988, subsequently winning five World Chess Championship crowns (2000, 2007, 2008, 2010, 2012).',
      'Today, India boasts over 85 Grandmasters, with an extraordinary surge of teenage prodigies dominating the world elite: D. Gukesh, Arjun Erigaisi (crossing 2800 FIDE), R. Praggnanandhaa, Nihal Sarin, and Vidit Gujrathi.',
      'In April 2024 at Toronto, 17-year-old Dommaraju Gukesh won the prestigious FIDE Candidates Tournament, becoming the youngest player in history to challenge for the World Chess Championship title.',
      'In September 2024 at the 45th FIDE Chess Olympiad in Budapest, India captured historic Double Gold medals in both the Open and Women\'s sections with unprecedented dominance.'
    ],
    keyFiguresOrSources: [
      'Viswanathan Anand — 5-time World Champion and mentor.',
      'D. Gukesh — Youngest ever FIDE Candidates Winner (Age 17).',
      '45th FIDE Chess Olympiad official records (Budapest 2024).'
    ]
  }
];

export const HISTORICAL_RULE_COMPARISONS = [
  {
    aspect: 'The Queen (Counselor / Mantri / Fers)',
    ancient: 'Moved only one square diagonally. Weakest piece on board besides pawns.',
    modern: 'Combines full Rook and Bishop movement along any unblocked file, rank, or diagonal. Most lethal offensive piece.'
  },
  {
    aspect: 'The Bishop (Elephant / Gaja / Alfil)',
    ancient: 'Leaped exactly two squares diagonally, jumping over intervening pieces, restricted to only 8 squares on the board.',
    modern: 'Traverses unrestricted diagonals of its designated color square. Controls long board lines.'
  },
  {
    aspect: 'Pawn Initial Move',
    ancient: 'Could only advance one square forward from the start.',
    modern: 'Option to advance one or two squares forward on its first move; balanced by the en passant capture rule.'
  },
  {
    aspect: 'King Safety & Castling',
    ancient: 'No castling existed. The king had to move manually square by square or utilize a single "knight-leap" once per game.',
    modern: 'Special dual move where King moves two squares toward a Rook and the Rook hops over to the adjacent square.'
  },
  {
    aspect: 'Victory Conditions',
    ancient: 'Checkmate, Stalemate (counted as win for staling side), or Bare King (capturing all enemy pieces except King was a win).',
    modern: 'Checkmate or resignation. Stalemate is strictly a draw (1/2–1/2), rewarding defensive ingenuity.'
  }
];

export const CHESS_HISTORY_SOURCES = [
  {
    title: 'A History of Chess',
    author: 'H. J. R. Murray',
    year: '1913',
    publisher: 'Oxford University Press',
    note: 'The foundational 900-page academic treatise on chess origins and global transmission.'
  },
  {
    title: 'The Oxford Companion to Chess',
    author: 'David Hooper & Kenneth Whyld',
    year: '1996',
    publisher: 'Oxford University Press',
    note: 'Comprehensive encyclopedia of rules, players, and historical terminology.'
  },
  {
    title: 'The Immortal Game: A History of Chess',
    author: 'David Shenk',
    year: '2006',
    publisher: 'Doubleday / Anchor Books',
    note: 'Cultural narrative tracing chess evolution through civilization.'
  },
  {
    title: 'FIDE Handbook and Historical Archives',
    author: 'International Chess Federation (FIDE)',
    year: '1924–Present',
    publisher: 'fide.com',
    note: 'Official rules codification, title awards, and championship records.'
  }
];
