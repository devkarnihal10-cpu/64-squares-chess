import { FamousGame } from '../types/chess';

export const FAMOUS_CHESS_GAMES: FamousGame[] = [
  {
    id: 'the-immortal-game',
    title: 'The Immortal Game',
    white: 'Adolf Anderssen',
    black: 'Lionel Kieseritzky',
    year: 1851,
    event: 'Casual encounter during the First International Tournament',
    site: 'London, England',
    result: '1-0',
    opening: "King's Gambit Accepted: Bishop's Gambit",
    eco: 'C33',
    significance: 'The ultimate pinnacle of the 19th-century Romantic Era of chess. White sacrifices a bishop, both rooks, and his queen to deliver a checkmate using only two knights and a single surviving bishop.',
    summary: 'During a break in the first international tournament in London, German mathematics teacher Adolf Anderssen played this casual skittles game against French-Estonian master Lionel Kieseritzky. Anderssen demonstrated that unassailable dynamic piece coordination can conquer overwhelming material advantage.',
    pgn: '1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7# 1-0',
    moveCommentary: {
      1: 'Anderssen opens with 1.e4, met by Kieseritzky\'s classical 1...e5.',
      3: 'The King\'s Gambit Accepted: Anderssen offers a pawn to gain rapid kingside mobilization.',
      6: 'White forfeits castling rights with Kf1 but rapidly activates minor pieces against Black\'s exposed queen.',
      18: '18.Bd6!! Anderssen offers both rooks to lure Black\'s queen completely away from the defense of Black\'s king.',
      19: '19.e5! Cutting off the black queen\'s connection to the critical g7 flight square.',
      22: '22.Qf6+!! Anderssen sacrifices his Queen! Kieseritzky is forced to capture.',
      23: '23.Be7# Checkmate. A poetic finish: White has only three minor pieces left, but Black\'s king is cornered.'
    }
  },
  {
    id: 'the-opera-game',
    title: 'The Opera Game',
    white: 'Paul Morphy',
    black: 'Duke of Brunswick and Count Isouard',
    year: 1858,
    event: 'Private consultation game at the Paris Opera (Il Barbiere di Siviglia)',
    site: 'Paris, France',
    result: '1-0',
    opening: 'Philidor Defense: Exchange Variation',
    eco: 'C41',
    significance: 'Regarded by grandmasters as the greatest instructive game ever played. It demonstrates the fundamental principles of rapid development, open lines, and decisive pin exploitation.',
    summary: 'Paul Morphy was invited to the royal box at the Paris Opera during a performance of Rossini\'s The Barber of Seville by the Duke of Brunswick and Count Isouard. Playing with white while conversing with the aristocrats, Morphy concluded the game in 17 moves with a queen sacrifice leading to back-rank mate.',
    pgn: '1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0',
    moveCommentary: {
      3: 'Morphy challenges Black\'s passive 2...d6 Philidor Defense immediately with 3.d4.',
      7: '7.Qb3! A classic double attack targeting both f7 and b7.',
      10: '10.Nxb5! Morphy sacrifices a piece to blast open lines against the uncastled black king.',
      12: '12.O-O-O! Morphy brings his king to safety while immediately placing a rook on the open d-file with tempo.',
      13: '13.Rxd7! White eliminates Black\'s defenders through relentless line clearance.',
      16: '16.Qb8+!! The legendary Queen sacrifice deflects the knight away from guarding d8.',
      17: '17.Rd8# Checkmate. Morphy used every single white piece with 100% efficiency.'
    }
  },
  {
    id: 'game-of-the-century',
    title: 'The Game of the Century',
    white: 'Donald Byrne',
    black: 'Bobby Fischer',
    year: 1956,
    event: 'Rosenwald Memorial Tournament',
    site: 'Marshall Chess Club, New York City',
    result: '0-1',
    opening: 'Grünfeld Defense: Russian Variation',
    eco: 'D92',
    significance: 'Played when Bobby Fischer was just 13 years old against one of the strongest masters in America. Fischer\'s queen sacrifice 17...Be6!! is celebrated as a miraculous feat of teenage calculation.',
    summary: 'Donald Byrne was an established American master and former Open Champion. The 13-year-old Fischer, with the black pieces, refused to defend his queen and instead orchestrated an unstoppable windmill assault with rooks and bishops.',
    pgn: '1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Rc2# 0-1',
    moveCommentary: {
      11: '11...Na4! Fischer starts creating sharp tactical threats against White\'s queen and c3.',
      17: '17...Be6!! The historic queen sacrifice. If White plays 18.Qxc3, Black plays 18...Qxc5 with an overwhelming position.',
      18: '18.Bxb6. Byrne accepts the Queen, walking into Fischer\'s tactical windmill.',
      20: '20...Nxd4+ Fischer executes discovery after discovery, picking off Byrne\'s material piece by piece.',
      41: '41...Rc2# Checkmate. Fischer completes the immortal masterwork at age 13.'
    }
  },
  {
    id: 'kasparovs-immortal',
    title: "Kasparov's Immortal",
    white: 'Garry Kasparov',
    black: 'Veselin Topalov',
    year: 1999,
    event: 'Wijk aan Zee Tournament (Corus Group A)',
    site: 'Wijk aan Zee, Netherlands',
    result: '1-0',
    opening: 'Pirc Defense',
    eco: 'B07',
    significance: 'Considered by many commentators, including Garry Kasparov himself, to be the most brilliant tactical combination of his storied career. Involves a 15-move king hunt chasing Topalov\'s monarch from e8 all the way to a1.',
    summary: 'Reigning World Champion Garry Kasparov unleashed a staggering rook sacrifice on d4 against future FIDE World Champion Veselin Topalov, calculating a long sequence of checks and quiet moves that forced the black king across the board into a mating web.',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0',
    moveCommentary: {
      24: '24.Rxd4!! The thunderbolt sacrifice. Kasparov gives up his rook on d4 to drag Black\'s king into the open.',
      25: '25.Re7+! Kasparov offers the second rook! Black cannot capture with Queen due to Qxd4+.',
      28: '28.Qc3! Quiet, lethal threat of mate on a3.',
      36: '36.Bf1! Deflecting Black\'s queen and securing the promotion square for White\'s pawns.',
      44: '1-0. Topalov resigns. A supreme masterpiece of deep human calculation.'
    }
  },
  {
    id: 'karpov-kasparov-1985-game-16',
    title: 'The Octopus Knight (Game 16)',
    white: 'Anatoly Karpov',
    black: 'Garry Kasparov',
    year: 1985,
    event: '1985 World Chess Championship Match',
    site: 'Moscow, Soviet Union',
    result: '0-1',
    opening: 'Sicilian Defense: Paulsen Variation',
    eco: 'B44',
    significance: 'The game that propelled 22-year-old Garry Kasparov to the world title. His knight entrenched on d3 like an octopus paralyzed Karpov\'s entire white army.',
    summary: 'Tied 7.5–7.5 in the match, Kasparov introduced a revolutionary gambit in the Sicilian Defense. Karpov was unable to dislodge Kasparov\'s monster knight on d3, which radiated pressure across White\'s back rank.',
    pgn: '1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5 9. cxd5 exd5 10. exd5 Nb4 11. Be2 Bc5 12. O-O O-O 13. Bf3 Bf5 14. Bg5 Re8 15. Qd2 b5 16. Rad1 Nd3 17. Nab1 h6 18. Bh4 b4 19. Na4 Bd6 20. Bg3 Rc8 21. b3 g5 22. Bxd6 Qxd6 23. g3 Nd7 24. Bg2 Qf6 25. a3 a5 26. axb4 axb4 27. Qa2 Bg6 28. d6 g4 29. Qd2 Kg7 30. f3 Qxd6 31. fxg4 Qd4+ 32. Kh1 Nf6 33. Rf4 Ne4 34. Qxd3 Nf2+ 35. Rxf2 Bxd3 36. Rfd2 Qe3 37. Rxd3 Rc1 38. Nb2 Qf2 39. Nd2 Rxd1+ 40. Nxd1 Re1+ 0-1',
    moveCommentary: {
      8: '8...d5! Kasparov sacrifices a central pawn to accelerate his piece activity.',
      16: '16...Nd3! The birth of the "Octopus Knight". From d3, the black horse controls c1, e1, b2, and f2.',
      21: '21...g5! Kasparov takes kingside space with courage against Karpov\'s bishop.',
      40: '0-1. Karpov resigns under unavoidable checkmate threats on e1 and f1.'
    }
  },
  {
    id: 'anand-aronian-2013',
    title: "Anand's Immortal",
    white: 'Levon Aronian',
    black: 'Viswanathan Anand',
    year: 2013,
    event: 'Tata Steel Masters (Round 4)',
    site: 'Wijk aan Zee, Netherlands',
    result: '0-1',
    opening: 'Semi-Slav Defense: Meran Variation',
    eco: 'D47',
    significance: 'Regarded by world champion Magnus Carlsen and chess media as Anand\'s absolute greatest victory with the black pieces. Anand sacrificed two minor pieces and his queen\'s safety to unleash a king attack in 23 moves.',
    summary: 'Playing against the World No. 2 Levon Aronian, Viswanathan Anand unveiled deep home preparation and fearless tactical intuition in the Semi-Slav Meran, ending with black knights and rooks executing an artistic masterpiece.',
    pgn: '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 5. e3 Nbd7 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 Bd6 9. O-O O-O 10. Qc2 Bb7 11. a3 Rc8 12. Ng5 c5 13. Nxh7 Ng4 14. f4 cxd4 15. exd4 Bc5 16. Be2 Nde5 17. Bxg4 Bxd4+ 18. Kh1 Nxg4 19. Nxf8 f5 20. Ng6 Qf6 21. h3 Qxg6 22. Qe2 Qh5 23. Qd3 Be3 0-1',
    moveCommentary: {
      12: '12...c5! Anand blows open the center despite Aronian\'s kingside threats.',
      15: '15...Bc5!! An astonishing piece sacrifice pinning White\'s bishop to the king.',
      16: '16...Nde5!! Anand offers a second minor piece! Black\'s pieces coordinate with supernatural force.',
      23: '23...Be3! 0-1. Aronian resigns immediately. If White takes with 24.Bxe3 or 24.Qxe3, Black delivers mate with 24...Qxh3+ 25.Kg1 Qxg2#.'
    }
  }
];
