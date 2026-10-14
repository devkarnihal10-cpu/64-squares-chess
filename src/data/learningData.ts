import { LearnModule } from '../types/chess';

export const CHESS_LEARN_MODULES: LearnModule[] = [
  {
    id: 'intro',
    slug: 'intro',
    number: 1,
    title: 'Introduction to Chess',
    tagline: 'The 64 Squares, Board Geometry, and the Royal Objective',
    description: 'Discover the battlefield: ranks, files, diagonals, initial piece setup, and the ultimate purpose of the royal game.',
    estimatedMinutes: 12,
    topicsCount: 4,
    level: 'Absolute Beginner',
    lessons: [
      {
        id: 'the-board-and-squares',
        slug: 'the-board-and-squares',
        moduleId: 'intro',
        title: 'The Chessboard: 64 Squares of Combat',
        overview: 'Understand how the board is constructed, how ranks and files function as a coordinate grid, and the universal setup orientation rule.',
        contentSections: [
          {
            heading: 'The 8×8 Battlefield',
            paragraphs: [
              'The chessboard consists of exactly 64 squares arranged in an eight-by-eight grid. The squares alternate between light and dark colors.',
              'A golden universal rule for setting up any board: "White on right." Look at the corner square closest to your right hand—it must ALWAYS be a light-colored square. If it is dark, your board is rotated incorrectly.'
            ],
            bulletPoints: [
              'Files: The 8 vertical columns of squares, labeled with lowercase letters "a" through "h" from White\'s left to right.',
              'Ranks: The 8 horizontal rows of squares, numbered "1" through "8" from White\'s side to Black\'s side.',
              'Diagonals: Slanted straight lines of squares that share the exact same color.',
              'Square Names: Every single square has a unique coordinate name, like e4, c6, or h8, combining its file letter and rank number.'
            ],
            diagramFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            diagramCaption: 'Standard starting position on the 64 squares with coordinates a1 through h8.'
          },
          {
            heading: 'The Armies & Starting Setup',
            paragraphs: [
              'Each side begins with an army of 16 pieces: 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, and 8 Pawns. White always moves first.',
              'Notice the placement of the monarchs: "Queen on her own color." The White Queen starts on the light d1 square; the Black Queen starts on the dark d8 square.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'White always makes the opening move! Click the white pawn on e2 and advance it two squares to e4.',
          initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          expectedMoves: ['e2e4', 'e4'],
          hint: 'Select the pawn in front of the King (square e2) and click e4.',
          successMessage: 'Splendid! You played 1.e4, the "King\'s Pawn Opening", controlling the key center squares.',
          explanation: 'Advancing the king pawn opens lines for both the Queen and the light-squared Bishop while claiming the d5 and f5 squares.'
        },
        quizQuestions: [
          {
            question: 'When placing a chessboard on the table, what color square must be in each player\'s bottom-right corner?',
            options: ['A dark square', 'A light square', 'It does not matter', 'Only for White, not Black'],
            correctIndex: 1,
            explanation: 'The universal mnemonic is "White on right." The square at bottom-right for both players must be light.'
          },
          {
            question: 'What square does the White Queen begin on in the initial setup?',
            options: ['e1', 'd1', 'c1', 'f1'],
            correctIndex: 1,
            explanation: 'The mnemonic is "Queen on her color." The White Queen sits on the light d1 square.'
          }
        ]
      }
    ]
  },
  {
    id: 'pieces',
    slug: 'pieces',
    number: 2,
    title: 'Learn Every Piece',
    tagline: 'How Every Warrior Moves, Attacks, and Leaps',
    description: 'Master the unique powers of pawns, rooks, knights, bishops, queens, and kings with interactive legal move demonstrations.',
    estimatedMinutes: 20,
    topicsCount: 6,
    level: 'Absolute Beginner',
    lessons: [
      {
        id: 'pawns-and-pieces',
        slug: 'pawns-and-pieces',
        moduleId: 'pieces',
        title: 'The Six Unique Pieces',
        overview: 'Examine each piece individually: straight-marching rooks, diagonal bishops, all-powerful queens, leaping knights, marching pawns, and the royal king.',
        contentSections: [
          {
            heading: 'The Infantry: Pawns (Value: 1)',
            paragraphs: [
              'Pawns are the foot-soldiers. They move forward only, never backward. On their first move, each pawn has the option to advance either 1 or 2 squares. After that, they may only step 1 square forward.',
              'Pawns capture differently than they move: they capture one square diagonally forward.'
            ]
          },
          {
            heading: 'The Minor Pieces: Knights & Bishops (Value: 3)',
            paragraphs: [
              'The Knight is the only piece that can jump over other pieces! It moves in an "L-shape": two squares in one cardinal direction and then one square perpendicular. It always lands on a square of the opposite color.',
              'The Bishop moves diagonally as far as the path is open. A bishop is permanently confined to squares of its starting color (light or dark).'
            ]
          },
          {
            heading: 'The Major Pieces: Rooks & Queens (Value: 5 & 9)',
            paragraphs: [
              'The Rook moves horizontally along ranks and vertically along files as many unobstructed squares as desired.',
              'The Queen is the most lethal piece on the board: she combines the infinite range of the Rook and Bishop together in any direction.'
            ]
          },
          {
            heading: 'The King (Priceless)',
            paragraphs: [
              'The King can step one square in any direction. The king cannot be captured—if he is threatened and cannot escape, the game ends in checkmate.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Practice the Knight\'s unique jump! Move the White Knight from g1 to f3.',
          initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          expectedMoves: ['g1f3', 'Nf3'],
          hint: 'Click the knight on g1 and move it to the f3 square.',
          successMessage: 'Excellent jump! Knights leap cleanly over friendly or enemy pawns.',
          explanation: 'Knights are the only pieces that can participate in the battle on move one without moving a pawn first.'
        },
        quizQuestions: [
          {
            question: 'Which piece is the only one capable of leaping over other pieces?',
            options: ['The Bishop', 'The Pawn', 'The Knight', 'The Rook'],
            correctIndex: 2,
            explanation: 'Knights can hop directly over friendly or enemy pieces to reach their target square.'
          },
          {
            question: 'What is the conventional tactical point value assigned to a Rook?',
            options: ['1 point', '3 points', '5 points', '9 points'],
            correctIndex: 2,
            explanation: 'Pawns are 1, Knights/Bishops are 3, Rooks are 5, and Queens are 9.'
          }
        ]
      }
    ]
  },
  {
    id: 'rules',
    slug: 'rules',
    number: 3,
    title: 'Essential Rules',
    tagline: 'Check, Checkmate, Stalemate, Castling, & En Passant',
    description: 'Learn the difference between check and checkmate, how castling secures the king, and special maneuvers like promotion and en passant.',
    estimatedMinutes: 18,
    topicsCount: 5,
    level: 'Novice',
    lessons: [
      {
        id: 'check-checkmate-and-special-moves',
        slug: 'check-checkmate-and-special-moves',
        moduleId: 'rules',
        title: 'Check, Checkmate, and Special Rules',
        overview: 'Understand when a king is threatened, how to escape check (Capture, Block, Run), and the three special moves: Castling, Promotion, and En Passant.',
        contentSections: [
          {
            heading: 'The 3 Ways to Escape Check: C-B-R',
            paragraphs: [
              'When a king is under direct attack by an enemy piece, it is in "Check." You MUST eliminate the check on that very move. There are exactly 3 ways:',
              '1. Capture the attacking piece.',
              '2. Block the attack by sliding a piece between your king and the attacker (not possible against knight checks).',
              '3. Run away by stepping your king to an unthreatened adjacent square.',
              'If the king is in check and NONE of these 3 escapes is possible, it is CHECKMATE, and the game is over!'
            ]
          },
          {
            heading: 'Stalemate vs. Checkmate',
            paragraphs: [
              'Stalemate occurs when the player whose turn it is has NO legal moves, BUT their king is NOT currently in check. Stalemate is an automatic DRAW (1/2–1/2), regardless of how many pieces the other side possesses.'
            ]
          },
          {
            heading: 'Castling & En Passant',
            paragraphs: [
              'Castling: The King moves 2 squares toward a Rook, and that Rook hops over to the square the King just crossed. It can only be done if neither piece has moved yet, there are no pieces in between, and the king does not cross or land on check.',
              'En Passant: If an enemy pawn advances two squares past your pawn\'s capture square, you may capture that pawn diagonally as if it had only moved one square, on the very next turn only.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Deliver Scholar\'s Mate! The Black f7 square is weak. Move your Queen from h5 and capture the pawn on f7 to deliver checkmate.',
          initialFen: 'r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
          expectedMoves: ['h5f7', 'Qxf7#'],
          hint: 'Click the Queen on h5 and capture the pawn on f7.',
          successMessage: 'Checkmate! The Black King cannot capture the Queen because she is protected by the Bishop on c4.',
          explanation: 'Black\'s king is in check, has no safe escape squares, cannot block the adjacent queen, and cannot take the queen without walking into the bishop\'s crosshairs.'
        },
        quizQuestions: [
          {
            question: 'What is the outcome if a player has no legal moves left, but their King is NOT in check?',
            options: ['Loss for that player', 'Checkmate', 'Stalemate (Draw)', 'The player must skip a turn'],
            correctIndex: 2,
            explanation: 'When a player is not in check but has zero legal moves anywhere on the board, the game ends in Stalemate, scored as a draw.'
          }
        ]
      }
    ]
  },
  {
    id: 'strategy',
    slug: 'strategy',
    number: 4,
    title: 'First Chess Strategies',
    tagline: 'Opening Principles, King Safety & Piece Coordination',
    description: 'The three golden opening rules: Control the centre, develop your minor pieces quickly, and castle early for king safety.',
    estimatedMinutes: 15,
    topicsCount: 4,
    level: 'Novice',
    lessons: [
      {
        id: 'the-three-golden-principles',
        slug: 'the-three-golden-principles',
        moduleId: 'strategy',
        title: 'The Golden Opening Principles',
        overview: 'Stop wandering in the opening. Learn how grandmasters control central territory and mobilize their forces in under 10 moves.',
        contentSections: [
          {
            heading: 'Principle 1: Control the Central Four Squares (e4, d4, e5, d5)',
            paragraphs: [
              'The center is the hill overlooking the battlefield. A knight in the center controls 8 squares; a knight on the rim controls only 4. Pawns placed on e4 and d4 dominate space and push back opponent pieces.'
            ]
          },
          {
            heading: 'Principle 2: Develop Knights and Bishops First',
            paragraphs: [
              'Do not bring your Queen out prematurely! A Queen brought out on move 2 or 3 is repeatedly chased by opponent minor pieces, costing you valuable development time while your opponent builds a formidable army.',
              'Develop knights toward the center (Nf3, Nc3) before bishops, because the knights\' ideal squares are predictable.'
            ]
          },
          {
            heading: 'Principle 3: Castle Early for King Safety',
            paragraphs: [
              'A king remaining stranded on the central e-file is an easy target once files open up. Castling tucks your monarch behind a shield of three pawns (f2, g2, h2) while activating your rook to central files.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Execute Kingside Castling! Move the White King from e1 two squares right to g1.',
          initialFen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5',
          expectedMoves: ['e1g1', 'O-O'],
          hint: 'Click the King on e1 and click g1.',
          successMessage: 'King safely tucked away! The rook on h1 automatically jumps to f1.',
          explanation: 'Castling achieves two goals in one move: shields the King in a fortress and brings the Rook into the game.'
        },
        quizQuestions: [
          {
            question: 'Why is it usually a mistake to bring your Queen out on move 2 or 3?',
            options: [
              'The rules forbid it',
              'Opponent minor pieces will attack her, forcing her to flee while they develop',
              'The Queen cannot move diagonally in the opening',
              'Queens cannot cross the center until pawns are traded'
            ],
            correctIndex: 1,
            explanation: 'Opponent pieces attack the queen with tempo, forcing you to move the same piece multiple times while your opponent rapidly mobilizes their army.'
          }
        ]
      }
    ]
  },
  {
    id: 'tactics',
    slug: 'tactics',
    number: 5,
    title: 'Basic Tactics',
    tagline: 'Forks, Pins, Skewers, and Discovered Attacks',
    description: 'Chess is 99% tactics. Learn how to win enemy pieces through geometric forks, absolute pins, skewers, and discovered attacks.',
    estimatedMinutes: 22,
    topicsCount: 6,
    level: 'Intermediate',
    lessons: [
      {
        id: 'forks-pins-and-skewers',
        slug: 'forks-pins-and-skewers',
        moduleId: 'tactics',
        title: 'Weapons of Tactical Destruction',
        overview: 'Examine the fundamental tactical motifs that decide over 80% of amateur games: the Knight Fork, the Absolute Pin, the Skewer, and the Discovered Check.',
        contentSections: [
          {
            heading: '1. The Fork (Double Attack)',
            paragraphs: [
              'A fork occurs when a single piece attacks two or more enemy targets simultaneously. The Knight is the quintessential forking warrior, capable of attacking the enemy King and Queen at the exact same moment.'
            ]
          },
          {
            heading: '2. The Pin',
            paragraphs: [
              'A pin occurs when an attacking piece (bishop, rook, or queen) threatens a piece that cannot move without exposing a more valuable piece behind it.',
              'An "Absolute Pin" happens when the piece behind is the King: the pinned piece is legally forbidden from moving!'
            ]
          },
          {
            heading: '3. The Skewer (Reverse Pin)',
            paragraphs: [
              'In a skewer, the more valuable piece is in FRONT. When the valuable piece steps out of attack, the piece behind it is captured.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Execute the Royal Knight Fork! Move your Knight from d5 to c7, checking the Black King on e8 and attacking the Rook on a8.',
          initialFen: 'r3k2r/pppb1ppp/5n2/3N4/4P3/8/PPP2PPP/R1B1KB1R w KQkq - 0 1',
          expectedMoves: ['d5c7', 'd5c7+', 'Nxc7', 'Nxc7+'],
          hint: 'Select the Knight on d5 and jump to c7 to deliver a double attack.',
          successMessage: 'Devastating Fork! Black is forced to respond to the check, allowing you to win the rook on a8.',
          explanation: 'The knight attacks the King on e8 and the Rook on a8 at the same time. Since King safety takes precedence, Black cannot save both.'
        },
        quizQuestions: [
          {
            question: 'What is the key difference between a pin and a skewer?',
            options: [
              'Pins only use rooks; skewers only use bishops',
              'In a skewer the more valuable piece is in front; in a pin it is behind',
              'Pins are illegal in tournament play',
              'Skewers cannot attack the King'
            ],
            correctIndex: 1,
            explanation: 'In a pin, a lesser piece shields a valuable piece behind it. In a skewer, the valuable piece is attacked directly and must move, exposing the piece behind.'
          }
        ]
      }
    ]
  },
  {
    id: 'openings',
    slug: 'openings',
    number: 6,
    title: 'Openings for Beginners',
    tagline: 'Italian Game, Ruy Lopez, Queen\'s Gambit & London System',
    description: 'Learn the primary opening systems for White and Black, understand the ideas behind them, and avoid early theoretical traps.',
    estimatedMinutes: 25,
    topicsCount: 5,
    level: 'Intermediate',
    lessons: [
      {
        id: 'fundamental-openings',
        slug: 'fundamental-openings',
        moduleId: 'openings',
        title: 'The Essential Opening Repertoire',
        overview: 'Explore classic opening systems that have withstood centuries of grandmaster testing: Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4), Ruy Lopez, Queen\'s Gambit, and the rock-solid London System.',
        contentSections: [
          {
            heading: 'The Italian Game (Giuoco Piano)',
            paragraphs: [
              'Begins 1.e4 e5 2.Nf3 Nc6 3.Bc4. White develops smoothly toward the kingside, targeting the natural vulnerability on f7, while maintaining flexibility to castle quickly or push central pawns with c3 and d4.'
            ]
          },
          {
            heading: 'The Queen\'s Gambit (1.d4 d5 2.c4)',
            paragraphs: [
              'White immediately offers a flank wing pawn (c4) to challenge Black\'s central anchor on d5. If Black takes with 2...dxc4, White gains superior central space with e4.'
            ]
          },
          {
            heading: 'The London System',
            paragraphs: [
              'A universal setup for White (1.d4, 2.Bf4, 3.e3, 4.c3, 5.Nf3) creating a virtually impregnable pawn pyramid, beloved by beginners and grandmasters alike.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Play the signature move of the Italian Game! Move the light-squared Bishop from f1 to c4.',
          initialFen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
          expectedMoves: ['f1c4', 'Bc4'],
          hint: 'Select the bishop on f1 and place it on c4.',
          successMessage: 'The Italian Game is on the board! Bc4 directly puts pressure on Black\'s fragile f7 pawn.',
          explanation: 'The Bishop controls a vital diagonal and clears the path for immediate kingside castling on move 4.'
        },
        quizQuestions: [
          {
            question: 'In the Queen\'s Gambit (1.d4 d5 2.c4), why does White offer the c-pawn?',
            options: [
              'To blunder a pawn for an attack',
              'To deflect Black\'s central pawn and gain central domination with e4',
              'Because White cannot develop knights without trading pawns',
              'To prevent Black from castling'
            ],
            correctIndex: 1,
            explanation: 'By giving up a flank c-pawn, White lures Black\'s central d-pawn away, paving the way for White to place pawns on both d4 and e4.'
          }
        ]
      }
    ]
  },
  {
    id: 'endgames',
    slug: 'endgames',
    number: 7,
    title: 'Endgame Fundamentals',
    tagline: 'King & Queen Mate, King & Rook Mate, and Pawn Promotion',
    description: 'Learn how to convert material advantages into victory: staircase mates, boxing in with rook, opposition, and king activity.',
    estimatedMinutes: 20,
    topicsCount: 4,
    level: 'Intermediate',
    lessons: [
      {
        id: 'basic-checkmates-and-pawns',
        slug: 'basic-checkmates-and-pawns',
        moduleId: 'endgames',
        title: 'Delivering the Final Blow',
        overview: 'Master the clean techniques for checkmating with King + Queen and King + Rook, and understand how the "Opposition" wins pawn endings.',
        contentSections: [
          {
            heading: 'King & Queen Checkmate (The Box Technique)',
            paragraphs: [
              'The Queen acts as a fence, shrinking the enemy king\'s territory until he is confined to the rim. Then bring your King to support the Queen for the finishing kiss of death checkmate.',
              'BEWARE OF STALEMATE: Never trap the enemy king in the corner without leaving him a legal square before delivering checkmate!'
            ]
          },
          {
            heading: 'King & Rook Checkmate (The Boxing Technique)',
            paragraphs: [
              'A rook cannot checkmate alone without king assistance. Your King must face the enemy king directly (the Opposition), cutting off flight squares while the Rook slices through the back rank.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Deliver checkmate with your Queen! Move your Queen from d7 to b7 or c8 to deliver checkmate to the cornered black king.',
          initialFen: '7k/3Q4/6K1/8/8/8/8/8 w - - 0 1',
          expectedMoves: ['d7g7#', 'Qg7#', 'd7e8#', 'Qe8#'],
          hint: 'Place your Queen directly in front of the Black King on g7, backed by your King on g6.',
          successMessage: 'Splendid Checkmate! The Queen is protected by the King and leaves Black zero escape.',
          explanation: 'The queen takes away all 3 adjacent squares and the king provides protection. Game over!'
        },
        quizQuestions: [
          {
            question: 'What is the danger when executing a King + Queen checkmate against a lone King?',
            options: [
              'The enemy king can jump over the queen',
              'Accidental stalemate if you trap the king without putting him in check',
              'The queen loses value in the endgame',
              'Draw by 50-move rule on move 10'
            ],
            correctIndex: 1,
            explanation: 'Beginners frequently corner the king into a corner where he has 0 legal moves but is not in check, resulting in a frustrating stalemate draw.'
          }
        ]
      }
    ]
  },
  {
    id: 'practice',
    slug: 'practice',
    number: 8,
    title: 'Practice & Improvement',
    tagline: 'Tactical Puzzles, Daily Regimen & Grandmaster Advice',
    description: 'Build an effective daily practice regimen: solving tactics, analyzing your own losses, playing longer time controls, and studying master games.',
    estimatedMinutes: 15,
    topicsCount: 3,
    level: 'Intermediate',
    lessons: [
      {
        id: 'the-daily-routine',
        slug: 'the-daily-routine',
        moduleId: 'practice',
        title: 'The Master Improvement Formula',
        overview: 'Discover how grandmasters structure their training to build deep board vision and avoid plateauing at amateur ratings.',
        contentSections: [
          {
            heading: 'The 3-Pillar Training Formula',
            paragraphs: [
              '1. Daily Tactics (15–20 minutes): Solve 10–15 puzzles without moving pieces on the board until you see the full continuation to the end.',
              '2. Play Serious Games with Increment: Fast bullet chess develops bad habits. Play 15+10 rapid or 30-minute games where you have time to calculate.',
              '3. Review Every Loss Without Engines First: Before turning on Stockfish, identify the critical moment where your plan went wrong.'
            ]
          }
        ],
        interactiveChallenge: {
          instruction: 'Solve this tactical back-rank puzzle! White to move. Move the Rook from d1 to d8 delivering back-rank checkmate.',
          initialFen: '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',
          expectedMoves: ['d1d8#', 'Rd8#'],
          hint: 'The Black king has no "luft" (escape hatch) on the back rank. Slide your rook from d1 to d8.',
          successMessage: 'Back-Rank Mate! Black\'s own pawns on f7, g7, h7 trapped their king.',
          explanation: 'This classic pattern is known as the "Back-Rank Weakness." Moving h3 or g3 earlier in the game prevents this disaster.'
        },
        quizQuestions: [
          {
            question: 'What is the most effective habit when analyzing your own chess games?',
            options: [
              'Immediately memorizing the engine evaluation',
              'Ignoring losses and only saving wins',
              'Analyzing the critical turning points yourself before turning on the engine',
              'Playing 50 bullet games consecutively'
            ],
            correctIndex: 2,
            explanation: 'Active human reflection builds real intuition. Engines show what is right, but your own brain must understand why you were tempted by the wrong idea.'
          }
        ]
      }
    ]
  }
];
