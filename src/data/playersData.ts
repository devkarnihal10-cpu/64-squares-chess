import { ChessPlayer } from '../types/chess';

export const CHESS_PLAYERS: ChessPlayer[] = [
  {
    id: 'magnus-carlsen',
    slug: 'magnus-carlsen',
    name: 'Magnus Carlsen',
    title: 'World Champion',
    country: 'Norway',
    countryCode: 'NO',
    bornYear: 1990,
    era: 'Modern & Digital',
    peakRating: 2882,
    peakRatingYear: 2014,
    fideRank: 'World No. 1 (Classical)',
    playingStyle: 'Universal, Grinding Positional Mastery & Incomparable Endgame Technique',
    shortBio: 'Widely regarded as one of the greatest chess players in history, Carlsen held the Classical World Championship from 2013 to 2023 and achieved the highest FIDE rating of all time (2882).',
    biography: [
      'Sven Magnus Øen Carlsen was born in Tønsberg, Norway in 1990. Taught chess at age five by his father Henrik, Carlsen quickly displayed an uncanny photographic memory for chessboard structures and geographic maps.',
      'Carlsen earned the Grandmaster title in 2004 at the age of 13 years and 148 days, following an astonishing performance at the Corus Chess Tournament. Later that year, he held Garry Kasparov to a sensational draw in rapid chess.',
      'In November 2013, Carlsen defeated Viswanathan Anand in Chennai to capture the World Chess Championship title. He successfully defended his crown four times against Anand (2014), Sergey Karjakin (2016), Fabiano Caruana (2018), and Ian Nepomniachtchi (2021).',
      'In 2019, Carlsen achieved a legendary 125-game undefeated streak in classical chess, shattering the previous world record. Renowned for converting minuscule, equal-looking endgames into clinical victories, Carlsen remains the world rating leader.'
    ],
    majorAchievements: [
      '5-time Classical World Chess Champion (2013–2023)',
      'Highest FIDE Classical Rating in Human History: 2882 (May 2014)',
      'Multiple-time World Rapid & World Blitz Champion (Record Triple Crown)',
      'All-time longest undefeated classical streak: 125 games (2018–2020)',
      'Winner of 5 Chess World Cups, 8 Tata Steel Masters titles'
    ],
    famousGames: [
      {
        title: 'The Squeeze against Caruana',
        white: 'Magnus Carlsen',
        black: 'Fabiano Caruana',
        year: 2015,
        result: '1-0',
        description: 'Carlsen outmaneuvers Caruana in an apparently symmetrical endgame, demonstrating his peerless pawn structure understanding.'
      },
      {
        title: 'Nepomniachtchi Marathon Game 6',
        white: 'Magnus Carlsen',
        black: 'Ian Nepomniachtchi',
        year: 2021,
        result: '1-0',
        description: 'The longest game in World Championship history (136 moves, 7 hours 45 minutes), breaking the match wide open.'
      }
    ],
    strategicStrengths: [
      'Impeccable endgame squeeze and precision in 6-piece tablebase endings',
      'Psychological resilience and relentless refusal to accept easy draws',
      'Unmatched tactical safety and minimal blunder propensity under severe time pressure'
    ],
    quote: 'Some people think that if their opponent plays a beautiful game, it\'s okay to lose. I try not to give them that satisfaction.',
    avatarSeed: 'magnus'
  },
  {
    id: 'viswanathan-anand',
    slug: 'viswanathan-anand',
    name: 'Viswanathan Anand',
    title: 'World Champion',
    country: 'India',
    countryCode: 'IN',
    bornYear: 1969,
    era: 'Modern & Digital',
    peakRating: 2817,
    peakRatingYear: 2011,
    fideRank: 'FIDE Deputy President & Indian Legend',
    playingStyle: 'Lightning Intuition, Sharp Tactical Flair & Deep Preparation',
    shortBio: 'India\'s first Grandmaster and 5-time World Champion, "Vishy" Anand revolutionized chess in India, inspiring the golden generation of modern Indian prodigies.',
    biography: [
      'Born in Mayiladuthurai, Tamil Nadu, Viswanathan Anand learned chess from his mother Susheela at the Tal Chess Club in Madras (Chennai). His rapid calculation speed earned him the moniker "The Lightning Kid."',
      'In 1988, Anand made history by becoming India\'s first Grandmaster. He captured the FIDE World Championship knockout tournament in 2000 in Tehran/New Delhi, becoming the first Asian player to claim the crown.',
      'Anand unified the World Championship title by winning the 2007 tournament in Mexico City. He then defended his title in three consecutive classical matches against Vladimir Kramnik (Bonn 2008), Veselin Topalov (Sofia 2010), and Boris Gelfand (Moscow 2012).',
      'Anand is also a distinguished mentor through the Westbridge Anand Chess Academy (WACA), which trained prodigies like Gukesh, Praggnanandhaa, and Vaishali.'
    ],
    majorAchievements: [
      '5-time World Chess Champion (2000, 2007, 2008, 2010, 2012)',
      'India\'s First Grandmaster (1988)',
      'First recipient of Rajiv Gandhi Khel Ratna (1991) and Padma Vibhushan (2008)',
      'World Rapid Chess Champion (2003, 2017 in Riyadh at age 48)',
      'Peak Classical FIDE Rating: 2817'
    ],
    famousGames: [
      {
        title: 'Anand\'s Immortal vs Levon Aronian',
        white: 'Levon Aronian',
        black: 'Viswanathan Anand',
        year: 2013,
        result: '0-1',
        description: 'Played at Wijk aan Zee in the Semi-Slav defense; Anand sacrificed multiple pieces in an astonishing intuitive kingside onslaught.'
      },
      {
        title: 'World Championship Match Game 3 vs Kramnik',
        white: 'Vladimir Kramnik',
        black: 'Viswanathan Anand',
        year: 2008,
        result: '0-1',
        description: 'Anand unveiled an electrifying piece sacrifice in the Meran variation, breaking Kramnik\'s fabled opening preparation.'
      }
    ],
    strategicStrengths: [
      'Legendary opening novelty preparation and home computer analysis',
      'Rapid calculation and crystal-clear tactical intuition',
      'Exceptional versatility across Classical, Rapid, and Blitz formats'
    ],
    quote: 'If you don\'t believe you can win, you will never win. Self-belief is the most powerful weapon on the board.',
    avatarSeed: 'vishy'
  },
  {
    id: 'gukesh-dommaraju',
    slug: 'gukesh-dommaraju',
    name: 'D. Gukesh',
    title: 'GM',
    country: 'India',
    countryCode: 'IN',
    bornYear: 2006,
    era: 'Indian Prodigies',
    peakRating: 2794,
    peakRatingYear: 2024,
    fideRank: 'World No. 5 (Top 10 Junior)',
    playingStyle: 'Composed Classical Maturity, Concrete Calculation & Fearless Ambition',
    shortBio: 'At 17 years old, Dommaraju Gukesh became the youngest player in chess history to win the FIDE Candidates Tournament, qualifying for the 2024 World Chess Championship match.',
    biography: [
      'Dommaraju Gukesh was born in Chennai, India. Showing phenomenal aptitude from childhood, he became the second-youngest Grandmaster in history in January 2019 at the age of 12 years, 7 months, and 17 days.',
      'At the 44th Chess Olympiad held in Chennai in 2022, Gukesh stunned the world with an extraordinary 8/8 start on Board 1 for India 2, earning individual Gold with a 2867 tournament performance rating.',
      'In September 2023, Gukesh ended Viswanathan Anand\'s 37-year reign as India\'s top-ranked chess player.',
      'In April 2024 in Toronto, Gukesh made history by winning the 8-player FIDE Candidates Tournament with 9/14 points, outlasting Fabiano Caruana, Hikaru Nakamura, and Ian Nepomniachtchi to become the youngest challenger ever for the world crown.'
    ],
    majorAchievements: [
      'Youngest FIDE Candidates Tournament Winner in History (Toronto 2024, Age 17)',
      'Double Gold Medals (Team & Individual Board 1) at 45th Chess Olympiad (Budapest 2024)',
      'Second-youngest Grandmaster in chess history (12 years, 7 months)',
      'Individual Gold Medal on Board 1 at Chennai Olympiad 2022',
      'FIDE Classical Rating over 2790'
    ],
    famousGames: [
      {
        title: 'Crucial Victory vs Nijat Abasov',
        white: 'D. Gukesh',
        black: 'Nijat Abasov',
        year: 2024,
        result: '1-0',
        description: 'Round 12 of the Toronto Candidates, exhibiting nerves of steel in an intricate rook and bishop endgame to reclaim tournament lead.'
      },
      {
        title: 'Olympiad Gold Clash vs Fabiano Caruana',
        white: 'Fabiano Caruana',
        black: 'D. Gukesh',
        year: 2024,
        result: '0-1',
        description: 'Budapest 2024 Olympiad, where Gukesh defeated World No. 2 Caruana with black to seal India\'s historic team victory.'
      }
    ],
    strategicStrengths: [
      'Zen-like emotional control and laser focus in do-or-die encounters',
      'Profound classical understanding reminiscent of Anatoly Karpov',
      'Exhaustive concrete calculation of multi-ply defensive resources'
    ],
    quote: 'My approach was just to give my best in every single game. The numbers and age records don\'t matter when you sit at the board.',
    avatarSeed: 'gukesh'
  },
  {
    id: 'garry-kasparov',
    slug: 'garry-kasparov',
    name: 'Garry Kasparov',
    title: 'World Champion',
    country: 'Soviet Union / Russia / Croatia',
    countryCode: 'HR',
    bornYear: 1963,
    era: 'Soviet Hegemony',
    peakRating: 2851,
    peakRatingYear: 1999,
    fideRank: '13th World Champion (1985–2000)',
    playingStyle: 'Fierce Aggressive Dynamo, Deep Preparation & Psychological Dominance',
    shortBio: 'Widely considered by many historians to be the greatest champion of all time, Kasparov became the youngest undisputed World Champion in 1985 at age 22 and held the World No. 1 ranking for 255 months.',
    biography: [
      'Born Garik Kimovich Weinstein in Baku, Azerbaijan, Kasparov was groomed in the famous Botvinnik-Kasparov chess school. His volcanic tactical vision and relentless energy overwhelmed older opponents.',
      'Between 1984 and 1990, Kasparov contested five titanic World Championship matches against Anatoly Karpov, encompassing 144 epic games that revolutionized every aspect of opening theory.',
      'In 1985, Kasparov defeated Karpov to become the 13th World Chess Champion at age 22. In 1999, his rating reached an unprecedented 2851, a summit that stood for 14 years until Magnus Carlsen eclipsed it.',
      'Kasparov was also a pioneer in human-computer matches, famously battling IBM\'s Deep Blue in 1996 and 1997.'
    ],
    majorAchievements: [
      '13th World Chess Champion (1985–2000)',
      'Youngest undisputed World Champion in history (Age 22 in 1985)',
      'Ranked World No. 1 for 255 months (over 21 years)',
      'Achieved peak rating of 2851 (held world record from 1999 to 2013)',
      '11 Chess Oscars for player of the year'
    ],
    famousGames: [
      {
        title: 'Kasparov\'s Immortal vs Veselin Topalov',
        white: 'Garry Kasparov',
        black: 'Veselin Topalov',
        year: 1999,
        result: '1-0',
        description: 'Wijk aan Zee 1999; Kasparov sacrificed a rook on d4 to embark on a 15-move king hunt that chased Topalov\'s monarch across the entire board.'
      },
      {
        title: 'Game 16 vs Anatoly Karpov (1985)',
        white: 'Anatoly Karpov',
        black: 'Garry Kasparov',
        year: 1985,
        result: '0-1',
        description: 'The famous "Octopus Knight" on d3 that completely paralyzed Karpov\'s entire white army in the Sicilian defense.'
      }
    ],
    strategicStrengths: [
      'Explosive tactical imagination and lethal initiative conversion',
      'Revolutionary home opening preparation using personal computer databases',
      'Relentless psychological pressure that forced opponents into time trouble'
    ],
    quote: 'Chess is mental torture. You have to destroy your opponent\'s plans before he realizes they even exist.',
    avatarSeed: 'kasparov'
  },
  {
    id: 'bobby-fischer',
    slug: 'bobby-fischer',
    name: 'Bobby Fischer',
    title: 'World Champion',
    country: 'United States',
    countryCode: 'US',
    bornYear: 1943,
    diedYear: 2008,
    era: 'Soviet Hegemony',
    peakRating: 2785,
    peakRatingYear: 1972,
    fideRank: '11th World Champion (1972–1975)',
    playingStyle: 'Pure Classical Clarity, Relentless Will to Win & Flawless Accuracy',
    shortBio: 'The enigmatic American prodigy who single-handedly shattered the Soviet chess monopoly in 1972 in Reykjavik, Fischer captivated the world and elevated chess into global pop culture.',
    biography: [
      'Robert James Fischer was born in Chicago and raised in Brooklyn, New York. At age 13, he achieved worldwide fame by defeating Donald Byrne in what Hans Kmoch dubbed "The Game of the Century."',
      'Fischer won the US Championship eight times, including a historic 11-0 clean sweep in 1963/64. In the 1971 Candidates cycle, Fischer achieved an unbelievable 6-0 sweep of Mark Taimanov and 6-0 sweep of Bent Larsen.',
      'In the 1972 "Match of the Century" in Reykjavik, Iceland, against Boris Spassky, amidst intense Cold War geopolitical scrutiny, Fischer emerged victorious 12.5–8.5.',
      'Fischer introduced the increment chess clock (Fischer clock) and Fischer Random Chess (Chess960), both now universal standards.'
    ],
    majorAchievements: [
      '11th World Chess Champion (1972–1975)',
      'Historic 6-0 shutouts in 1971 Candidates matches',
      'Eight-time US Chess Champion (including 11-0 perfect sweep)',
      'Inventor of increment digital chess clocks and Chess960 (Fischer Random)',
      'Peak rating 2785 (125-point gap over the world No. 2 at the time)'
    ],
    famousGames: [
      {
        title: 'The Game of the Century vs Donald Byrne',
        white: 'Donald Byrne',
        black: 'Bobby Fischer',
        year: 1956,
        result: '0-1',
        description: 'At age 13, Fischer sacrificed his queen with 17...Be6!! to launch a deadly windmill mating attack.'
      },
      {
        title: 'Game 6 vs Boris Spassky (1972)',
        white: 'Bobby Fischer',
        black: 'Boris Spassky',
        year: 1972,
        result: '1-0',
        description: 'Spassky joined the audience in applauding Fischer\'s breathtaking strategic elegance in the Queen\'s Gambit Tartakower defense.'
      }
    ],
    strategicStrengths: [
      'Unsurpassed clarity of plan: every piece placed on its ideal square',
      'Relentless refusal to settle for peaceful grandmaster draws',
      'Encyclopedic opening mastery with White (1.e4) and Black (Najdorf & King\'s Indian)'
    ],
    quote: 'I don\'t believe in psychology. I believe in good moves.',
    avatarSeed: 'fischer'
  },
  {
    id: 'hikaru-nakamura',
    slug: 'hikaru-nakamura',
    name: 'Hikaru Nakamura',
    title: 'GM',
    country: 'United States',
    countryCode: 'US',
    bornYear: 1987,
    era: 'Modern & Digital',
    peakRating: 2816,
    peakRatingYear: 2015,
    fideRank: 'World No. 2 (Classical) & Online Speed Titan',
    playingStyle: 'Blistering Speed, Tactical Resourcefulness & Swindling Brilliance',
    shortBio: 'A 5-time US Champion and World Fischer Random Champion, Nakamura bridged elite over-the-board classical chess with modern streaming, becoming the foremost chess personality of the digital era.',
    biography: [
      'Born in Hirakata, Japan and raised in New York, Nakamura broke Bobby Fischer\'s record as the youngest American Grandmaster in 2003 at age 15 years and 79 days.',
      'Renowned for his staggering calculation speed in Blitz and Bullet chess, Nakamura won five US Championships and established himself among the classical world elite, reaching World No. 2 with a 2816 rating in 2015.',
      'During the 2020 pandemic, Nakamura revolutionized chess streaming on Twitch and YouTube, propelling chess to tens of millions of new fans.',
      'He returned to elite over-the-board chess with sensational results, winning the 2022 FIDE Grand Prix, the 2022 World Fischer Random Championship, and finishing runner-up at the 2024 Toronto Candidates.'
    ],
    majorAchievements: [
      'World Fischer Random Chess Champion (2022)',
      '5-time United States Chess Champion (2005, 2009, 2012, 2015, 2019)',
      'Peak Classical FIDE Rating: 2816',
      'Record 6-time winner of Chess.com Speed Chess Championship',
      'Olympiad Team Gold with United States (Baku 2016)'
    ],
    famousGames: [
      {
        title: 'Masterclass vs Fabiano Caruana (Candidates 2024)',
        white: 'Hikaru Nakamura',
        black: 'Fabiano Caruana',
        year: 2024,
        result: '1-0',
        description: 'A tense Round 8 duel where Nakamura converted a bishop endgame with surgical precision.'
      }
    ],
    strategicStrengths: [
      'Incredible time management and ability to play accurately with under 10 seconds',
      'Mastery of defensive counter-punches and resource finding',
      'Deep opening flexibility spanning King\'s Indian, Sicilian, and English'
    ],
    quote: 'You can\'t just play moves that look good. You have to play moves that are objectively best, even when they look ugly.',
    avatarSeed: 'hikaru'
  },
  {
    id: 'judit-polgar',
    slug: 'judit-polgar',
    name: 'Judit Polgár',
    title: 'GM',
    country: 'Hungary',
    countryCode: 'HU',
    bornYear: 1976,
    era: 'Modern & Digital',
    peakRating: 2735,
    peakRatingYear: 2005,
    fideRank: 'Greatest Female Player in Chess History',
    playingStyle: 'Fearsome King Hunting, Aggressive Kingside Attacks & Wild Complications',
    shortBio: 'The strongest female chess player of all time, Judit Polgár broke Bobby Fischer\'s youngest Grandmaster record in 1991, cracked the overall World Top 10, and defeated 11 World Champions in classical and rapid games.',
    biography: [
      'Judit Polgár was raised in Budapest as part of the famous educational experiment conducted by her father László Polgár. She never participated in the Women\'s World Championship, competing exclusively against the strongest male grandmasters.',
      'In December 1991 at age 15 years and 4 months, Judit became the youngest Grandmaster in history, eclipsing Bobby Fischer\'s 33-year-old record.',
      'In 2005, she achieved a peak rating of 2735 and rose to World No. 8 on the overall FIDE rating list. She is the only woman ever to play in a World Chess Championship Candidates match (San Luis 2005).',
      'Over her storied career, she defeated Garry Kasparov, Anatoly Karpov, Magnus Carlsen, Viswanathan Anand, Boris Spassky, and Vasily Smyslov.'
    ],
    majorAchievements: [
      'Ranked World No. 1 Woman for 26 consecutive years (1989–2015)',
      'Cracked the World Top 10 (Peak Rank #8 in 2005 with 2735 FIDE rating)',
      'Youngest Grandmaster in history in 1991 (15 years, 4 months)',
      'Defeated 11 World Champions in competitive play',
      'Olympic Team Silver Medal with Hungary Open Team (2002 & 2014)'
    ],
    famousGames: [
      {
        title: 'Polgár vs Garry Kasparov (Russia vs World 2002)',
        white: 'Judit Polgár',
        black: 'Garry Kasparov',
        year: 2002,
        result: '1-0',
        description: 'In Moscow, Judit defeated reigning World No. 1 Kasparov in 42 moves with a textbook bind in the Ruy Lopez.'
      },
      {
        title: 'The King Hunt vs Ferenc Berkes',
        white: 'Judit Polgár',
        black: 'Ferenc Berkes',
        year: 2003,
        result: '1-0',
        description: 'A dazzling tactical sacrifice in the French Defense crowned by 17.Qxf7+! and an unstoppable checkmating net.'
      }
    ],
    strategicStrengths: [
      'Devastating tactical eye for attacking piece coordination',
      'Supreme courage to initiate complications against any opponent',
      'Dynamic handling of the Sicilian Defense and King\'s Indian'
    ],
    quote: 'I always say that women have the possibility to achieve the same results as men in intellectual areas. The only limit is what you think is possible.',
    avatarSeed: 'judit'
  },
  {
    id: 'hou-yifan',
    slug: 'hou-yifan',
    name: 'Hou Yifan',
    title: 'GM',
    country: 'China',
    countryCode: 'CN',
    bornYear: 1994,
    era: 'Modern & Digital',
    peakRating: 2686,
    peakRatingYear: 2015,
    fideRank: '4-time Women\'s World Champion & Oxford Professor',
    playingStyle: 'Solidity, Pure Technique & Active Piece Play',
    shortBio: 'A 4-time Women\'s World Champion and Rhodes Scholar, Hou Yifan became the youngest female Grandmaster in history at age 14 and is the second woman after Judit Polgár to break into the World Top 100.',
    biography: [
      'Born in Xinghua, Jiangsu, China, Hou Yifan displayed extraordinary chess gifts, winning the Girls\' World Youth Championship at age 10.',
      'In August 2008, Hou achieved the Grandmaster title at age 14 years and 6 months, the youngest woman ever to do so. In 2010, at age 16, she won the Women\'s World Chess Championship in Turkey, becoming the youngest champion in women\'s chess history.',
      'She successfully defended or regained her world title in 2011, 2013, and 2016. In 2017, she earned a Rhodes Scholarship to the University of Oxford and was appointed Professor at Shenzhen University at age 26.'
    ],
    majorAchievements: [
      '4-time Women\'s World Chess Champion (2010, 2011, 2013, 2016)',
      'Youngest female Grandmaster in chess history (14 years, 6 months)',
      'Winner of the Biel Grandmaster Tournament (2017)',
      'Rhodes Scholar at University of Oxford',
      'Peak Classical FIDE Rating: 2686'
    ],
    famousGames: [
      {
        title: 'Triumph over David Navara (Biel 2017)',
        white: 'Hou Yifan',
        black: 'David Navara',
        year: 2017,
        result: '1-0',
        description: 'Hou outplayed Navara (2737 FIDE) in an instructive positional English Opening.'
      }
    ],
    strategicStrengths: [
      'Complete opening repertoire with no glaring theoretical vulnerabilities',
      'Endgame calm under pressure',
      'Exceptional clarity in transition from middlegame to winning endgames'
    ],
    quote: 'Chess is a mirror of life. It teaches you patience, discipline, and how to embrace both victory and setbacks.',
    avatarSeed: 'hou'
  },
  {
    id: 'fabiano-caruana',
    slug: 'fabiano-caruana',
    name: 'Fabiano Caruana',
    title: 'GM',
    country: 'United States / Italy',
    countryCode: 'US',
    bornYear: 1992,
    era: 'Modern & Digital',
    peakRating: 2844,
    peakRatingYear: 2014,
    fideRank: 'World No. 2 (Classical)',
    playingStyle: 'Encyclopedic Opening Depth, Relentless Calculation & Positional Precision',
    shortBio: 'Caruana achieved the third-highest rating in chess history (2844) following his historic 7-0 streak at the 2014 Sinquefield Cup and drew all 12 classical games against Magnus Carlsen in the 2018 World Championship match.',
    biography: [
      'Fabiano Luigi Caruana was born in Miami and grew up in Brooklyn, New York. At age 12, his family relocated to Europe to train full-time with top grandmasters.',
      'In September 2014, Caruana achieved what many regard as the most dominant tournament performance in modern chess: scoring 8.5/10 with an opening 7-0 winning streak at the Sinquefield Cup against Carlsen, Aronian, Nakamura, and Topalov, yielding a 3098 performance rating.',
      'In 2018, Caruana won the Candidates Tournament in Berlin and pushed Magnus Carlsen to the absolute limit in London, drawing all 12 classical games in the World Championship match before falling in rapid tiebreaks.'
    ],
    majorAchievements: [
      'Third highest FIDE Classical rating of all time: 2844 (October 2014)',
      '2018 World Chess Championship Challenger (12-12 classical draw vs Carlsen)',
      'Legendary 7-0 start at Sinquefield Cup 2014 (3098 performance rating)',
      '3-time United States Chess Champion (2016, 2022, 2023)',
      'FIDE Candidates Winner (Berlin 2018)'
    ],
    famousGames: [
      {
        title: 'Sinquefield Destruction of Carlsen',
        white: 'Fabiano Caruana',
        black: 'Magnus Carlsen',
        year: 2014,
        result: '1-0',
        description: 'Caruana dismantled the World Champion in 34 moves with a brilliant Catalan setup.'
      }
    ],
    strategicStrengths: [
      'Unrivaled depth and breadth of computer opening preparation',
      'Capacity for deep 20-ply concrete tactical calculation',
      'Exceptional work ethic and stamina across 6-hour classical games'
    ],
    quote: 'At the highest level, chess is about precision. One single misplaced piece can dismantle hundreds of hours of preparation.',
    avatarSeed: 'caruana'
  },
  {
    id: 'arjun-erigaisi',
    slug: 'arjun-erigaisi',
    name: 'Arjun Erigaisi',
    title: 'GM',
    country: 'India',
    countryCode: 'IN',
    bornYear: 2003,
    era: 'Indian Prodigies',
    peakRating: 2805,
    peakRatingYear: 2024,
    fideRank: 'World No. 3 (Live 2800+ Club)',
    playingStyle: 'Fearless Combative Aggression, Unorthodox Complexity & Ruthless Conversion',
    shortBio: 'Hailing from Telangana, Arjun Erigaisi became the second Indian player after Viswanathan Anand to cross the legendary 2800 FIDE threshold, known as an unstoppable machine in open tournaments.',
    biography: [
      'Born in Warangal, Telangana, Arjun took up chess at age eight and attained the Grandmaster title at age 14 in 2018.',
      'In 2022, Arjun won the Tata Steel Challengers in Wijk aan Zee with 10.5/13, qualifying for the Masters. In 2024, Arjun mounted an unprecedented assault on the international open circuit, consistently grinding down 2650+ grandmasters.',
      'At the 45th Chess Olympiad in Budapest (September 2024), Arjun produced a monstrous 10/11 score on Board 3 for India, claiming individual Gold with a 2968 tournament performance rating and vaulting past the 2800 live rating barrier.'
    ],
    majorAchievements: [
      'Second Indian player in history to cross 2800 FIDE rating (2024)',
      'Individual Gold Medal on Board 3 at Budapest Olympiad 2024 (10/11 points)',
      'Double Gold Medals (Team & Individual) at 45th Chess Olympiad',
      'Champion of Tata Steel Challengers (2022) & Stephen Avram Memorial (2024)',
      'Indian National Classical Champion (2022)'
    ],
    famousGames: [
      {
        title: 'Masterclass vs Richard Rapport',
        white: 'Arjun Erigaisi',
        black: 'Richard Rapport',
        year: 2024,
        result: '1-0',
        description: 'Budapest Olympiad 2024; Arjun navigated a razor-sharp tactical labyrinth with stunning dynamic precision.'
      }
    ],
    strategicStrengths: [
      'Willingness to take risks and fight for wins with both colors against any rating tier',
      'Exceptional practical calculation and dynamic piece harmony',
      'Inexhaustible energy and endurance across consecutive open tournaments'
    ],
    quote: 'I don\'t play to make safe draws. I play every game to create genuine problems for my opponent from move one.',
    avatarSeed: 'erigaisi'
  },
  {
    id: 'anatoly-karpov',
    slug: 'anatoly-karpov',
    name: 'Anatoly Karpov',
    title: 'World Champion',
    country: 'Soviet Union / Russia',
    countryCode: 'RU',
    bornYear: 1951,
    era: 'Soviet Hegemony',
    peakRating: 2780,
    peakRatingYear: 1994,
    fideRank: '12th World Champion (1975–1985)',
    playingStyle: 'Boa Constrictor Positional Squeeze, Prophylaxis & Flawless Piece Placement',
    shortBio: 'The 12th World Champion and one of the winningest tournament players in history, Karpov perfected the art of prophylaxis—suffocating opponent plans before they could even begin.',
    biography: [
      'Born in Zlatoust in the Ural Mountains, Anatoly Karpov studied under Mikhail Botvinnik. In 1975, when Bobby Fischer refused to defend his crown, the 23-year-old Karpov was declared the 12th World Champion.',
      'Determined to prove his legitimacy, Karpov entered every major international tournament, winning nearly all of them. He successfully defended his crown in brutal matches against Viktor Korchnoi in Baguio City (1978) and Merano (1981).',
      'His rivalry with Garry Kasparov produced some of the greatest games in chess literature. In 1994, Karpov scored an astonishing 11/13 (+9 =4) at Linares against the greatest field ever assembled.'
    ],
    majorAchievements: [
      '12th World Chess Champion (1975–1985; FIDE Champion 1993–1999)',
      'Over 160 first-place finishes in international grandmaster tournaments',
      'Historic 11/13 victory at Linares 1994 (considered one of the greatest tournament results ever)',
      'Nine-time Chess Oscar winner'
    ],
    famousGames: [
      {
        title: 'The Prophylactic Masterpiece vs Boris Spassky',
        white: 'Anatoly Karpov',
        black: 'Boris Spassky',
        year: 1974,
        result: '1-0',
        description: 'Candidates Semifinal; Karpov completely bound Spassky\'s pieces to the back rank in the Queen\'s Gambit.'
      }
    ],
    strategicStrengths: [
      'Peerless master of prophylaxis (neutralizing enemy threats moves in advance)',
      'Subtle knight maneuvering and exploitation of microscopic pawn weaknesses',
      'Surgical endgame conversion'
    ],
    quote: 'Style? I have no style. I simply find the move that makes my opponent\'s position unbearable.',
    avatarSeed: 'karpov'
  },
  {
    id: 'jose-raul-capablanca',
    slug: 'jose-raul-capablanca',
    name: 'José Raúl Capablanca',
    title: 'World Champion',
    country: 'Cuba',
    countryCode: 'CU',
    bornYear: 1888,
    diedYear: 1942,
    era: 'Classical & Romantic',
    peakRating: 2725, // historical retro-rating estimate
    fideRank: '3rd World Champion (1921–1927)',
    playingStyle: 'Pure Intuitive Simplicity, Crystal-Clear Strategy & Flawless Endgames',
    shortBio: 'Known as the "Chess Machine," the Cuban prodigy Capablanca learned chess at age four and went undefeated in tournament play for eight consecutive years (1916–1924).',
    biography: [
      'Born in Havana, Cuba, Capablanca learned chess simply by watching his father play. In 1911 at San Sebastián, playing in his first major international tournament against the world\'s top masters, he won first prize outright.',
      'In 1921, Capablanca defeated Emanuel Lasker without losing a single game (+4 -0 =10) to become the 3rd World Champion. For eight years between 1916 and 1924, he did not lose a single tournament game.',
      'Capablanca\'s games are treasured for their effortless, crystal-clear logic, making him the supreme model for students studying endgame principles.'
    ],
    majorAchievements: [
      '3rd World Chess Champion (1921–1927)',
      'Eight-year undefeated streak (63 classical games, 1916–1924)',
      'Won San Sebastián 1911 on his international debut',
      'Pioneered modern endgame theory and Capablanca Chess variant'
    ],
    famousGames: [
      {
        title: 'The Immortal Endgame vs Tartakower',
        white: 'José Raúl Capablanca',
        black: 'Savielly Tartakower',
        year: 1924,
        result: '1-0',
        description: 'New York 1924; Capablanca walked his white king across the board to deliver a legendary rook and pawn lesson.'
      }
    ],
    strategicStrengths: [
      'Effortless simplification into winning piece-ending structures',
      'Flawless king placement in the endgame',
      'Incredible speed of sight requiring minimal clock expenditure'
    ],
    quote: 'You may learn much more from a game you lose than from a game you win. You will have to lose hundreds of games before becoming a good player.',
    avatarSeed: 'capablanca'
  },
  {
    id: 'emanuel-lasker',
    slug: 'emanuel-lasker',
    name: 'Emanuel Lasker',
    title: 'World Champion',
    country: 'Germany',
    countryCode: 'DE',
    bornYear: 1868,
    diedYear: 1941,
    era: 'Classical & Romantic',
    peakRating: 2720,
    fideRank: '2nd World Champion (1894–1921)',
    playingStyle: 'Deep Psychological Insight, Tenacious Defense & Tactical Resourcefulness',
    shortBio: 'A world-class mathematician and philosopher, Emanuel Lasker held the World Chess Championship for 27 consecutive years—the longest unbroken reign in chess history.',
    biography: [
      'Born in Berlinchen, Prussia (now Barlinek, Poland), Lasker earned a doctorate in mathematics under David Hilbert. In 1894, he defeated Wilhelm Steinitz to capture the World Chess Championship.',
      'Lasker successfully defended his title five times over nearly three decades against Frank Marshall, Siegbert Tarrasch, David Janowski, and Carl Schlechter.',
      'Lasker pioneered the psychological approach to chess: rather than seeking only "objective" perfection, he intentionally played moves that made his specific opponents uncomfortable or provoked them into catastrophic miscalculations.'
    ],
    majorAchievements: [
      '2nd World Chess Champion (1894–1921)',
      'Longest reign as World Champion in history: 27 years',
      'Won monumental tournaments: St. Petersburg 1896, Paris 1900, St. Petersburg 1914, New York 1924',
      'Significant mathematical contributions (Lasker-Noether theorem in commutative algebra)'
    ],
    famousGames: [
      {
        title: 'Double Bishop Sacrifice vs Bauer',
        white: 'Emanuel Lasker',
        black: 'Johann Bauer',
        year: 1889,
        result: '1-0',
        description: 'Amsterdam 1889; the original double-bishop sacrifice on h7 and g7 that remains a foundational tactical lesson.'
      }
    ],
    strategicStrengths: [
      'Match psychology and identifying opponent temperament flaws',
      'Unsurpassed tenacity when defending compromised positions',
      'Deep practical endgame intuition'
    ],
    quote: 'On the chessboard lies and hypocrisy do not survive long. The creative combination lies bare the presumption of a lie.',
    avatarSeed: 'lasker'
  },
  {
    id: 'mikhail-tal',
    slug: 'mikhail-tal',
    name: 'Mikhail Tal',
    title: 'World Champion',
    country: 'Soviet Union / Latvia',
    countryCode: 'LV',
    bornYear: 1936,
    diedYear: 1992,
    era: 'Soviet Hegemony',
    peakRating: 2705,
    peakRatingYear: 1980,
    fideRank: '8th World Champion (1960–1961)',
    playingStyle: 'The Magician of Riga: Wild Sacrifices, Romantic Complications & Hypnotic Initiative',
    shortBio: 'Known as the "Magician of Riga," Tal became the youngest World Champion of his era in 1960 at age 23, mesmerizing audiences with intuitive piece sacrifices that defied classical logic.',
    biography: [
      'Born in Riga, Latvia, Mikhail Tal possessed hypnotic, piercing dark eyes and a poetic view of chess. He believed chess was an art form where psychological terror and tactical chaos triumphed over dry positional rules.',
      'In 1960, Tal defeated the patriarch of Soviet chess, Mikhail Botvinnik, 12.5–8.5 to become the 8th World Champion at age 23.',
      'Tal was famous for sacrificing pawns, knights, and rooks not because computer analysis proved them sound, but because human opponents seated across the board simply could not calculate the defenses under ticking clocks.'
    ],
    majorAchievements: [
      '8th World Chess Champion (1960–1961)',
      'Six-time Soviet Chess Champion (tied record with Botvinnik)',
      'Unbroken 95-game classical undefeated streak (1973–1974)',
      'First World Blitz Champion (Saint John 1988 at age 51)'
    ],
    famousGames: [
      {
        title: 'Game 6 World Championship vs Botvinnik',
        white: 'Mikhail Botvinnik',
        black: 'Mikhail Tal',
        year: 1960,
        result: '0-1',
        description: 'Tal shocked the chess world by sacrificing a knight with 21...Nf4!!, destroying Botvinnik\'s defensive coordination.'
      }
    ],
    strategicStrengths: [
      'Intuitive sacrifice of material for pure attacking tempo and king assault',
      'Creation of unfathomable complications on the board',
      'Legendary blitz play and time-scramble mastery'
    ],
    quote: 'You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.',
    avatarSeed: 'tal'
  },
  {
    id: 'alireza-firouzja',
    slug: 'alireza-firouzja',
    name: 'Alireza Firouzja',
    title: 'GM',
    country: 'France / Iran',
    countryCode: 'FR',
    bornYear: 2003,
    era: 'Modern & Digital',
    peakRating: 2805,
    peakRatingYear: 2021,
    fideRank: 'World Top 5 & Sinquefield Cup Champion',
    playingStyle: 'Electric Dynamic Creativity, Lightning Speed & Tactical Brilliance',
    shortBio: 'The youngest player ever to cross the 2800 FIDE threshold at age 18, Firouzja is a generational talent, Grand Chess Tour victor, and two-time World Blitz silver medalist.',
    biography: [
      'Born in Babol, Iran, Firouzja won the Iranian Chess Championship at age 12. In 2018, he achieved the Grandmaster title at age 14.',
      'In November 2021 at the FIDE Grand Swiss in Riga, Firouzja scored 8/11 to qualify for the Candidates. Weeks later at the European Team Championship, he surged to 2804 FIDE rating at age 18 years and 5 months, breaking Magnus Carlsen\'s record as the youngest ever 2800 player.',
      'Now representing France, Firouzja captured the 2022 and 2024 Sinquefield Cup and Grand Chess Tour titles, proving his mettle among the absolute elite.'
    ],
    majorAchievements: [
      'Youngest player in history to surpass 2800 FIDE rating (18 years, 5 months)',
      'Champion of Grand Chess Tour & Sinquefield Cup (2022 & 2024)',
      'Winner of the FIDE Grand Swiss (Riga 2021)',
      'World Rapid Chess Silver Medalist (Moscow 2019 at age 16)'
    ],
    famousGames: [
      {
        title: 'Masterpiece vs Shakhriyar Mamedyarov',
        white: 'Alireza Firouzja',
        black: 'Shakhriyar Mamedyarov',
        year: 2021,
        result: '1-0',
        description: 'An aggressive Caro-Kann duel where Firouzja launched an unstoppable kingside piece assault to seal his 2800 rating.'
      }
    ],
    strategicStrengths: [
      'Tremendous tactical speed and calculating capacity',
      'Aggressive opening choices with both colors',
      'Ruthless conversion of initiative into decisive mating nets'
    ],
    quote: 'In chess you need passion. If you don\'t love every single move, you cannot stay at the top.',
    avatarSeed: 'firouzja'
  }
];
