// Famous Chess Matches Database
const matches = [
    {
        id: "kasparov-deep-blue-1997",
        title: "Kasparov vs Deep Blue, Game 6",
        white: "Deep Blue (Computer)",
        black: "Garry Kasparov",
        date: "May 11, 1997",
        location: "New York, USA",
        result: "1-0 (White wins)",
        importance: "This match marked a watershed moment in history - the first time a reigning world chess champion lost a match to a computer under standard tournament conditions. It represented a symbolic victory of artificial intelligence over human intelligence in a domain long considered the pinnacle of human cognitive ability.",
        strategy: "Deep Blue employed a brute-force approach, calculating millions of positions per second. Kasparov tried aggressive tactics but made a critical error on move 45. The game demonstrated how raw computational power could overcome even the greatest human intuition and experience.",
        pgn: `[Event "IBM Man-Machine, New York USA"]
[Site "New York, NY USA"]
[Date "1997.05.11"]
[Round "6"]
[White "Deep Blue"]
[Black "Kasparov, Garry"]
[Result "1-0"]

1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Ng5 Ngf6 6. Bd3 e6 7. N1f3 h6
8. Nxe6 Qe7 9. O-O fxe6 10. Bg6+ Kd8 11. Bf4 b5 12. a4 Bb7 13. Re1 Nd5
14. Bg3 Kc8 15. axb5 cxb5 16. Qd3 Bc6 17. Bf5 exf5 18. Rxe7 Bxe7 19. c4 1-0`,
        commentary: {
            0: "We begin with the starting position. Deep Blue will play as White, Kasparov as Black.",
            1: "e4 - Deep Blue opens with the King's Pawn, the most popular first move in chess.",
            2: "c6 - Kasparov responds with the Caro-Kann Defense, a solid and strategic opening.",
            15: "Nxe6! - A bold knight sacrifice by Deep Blue. This type of aggressive computer play was unexpected.",
            21: "Bf4 - Deep Blue continues its aggressive plan, maintaining pressure.",
            35: "Rxe7! - The decisive blow. Deep Blue sacrifices the exchange but gains a winning position.",
            37: "c4 and Kasparov resigned. The computer's position is completely winning."
        }
    },
    {
        id: "fischer-spassky-1972",
        title: "Fischer vs Spassky, Game 6",
        white: "Bobby Fischer",
        black: "Boris Spassky",
        date: "July 23, 1972",
        location: "Reykjavik, Iceland",
        result: "1-0 (White wins)",
        importance: "Part of the 'Match of the Century' during the Cold War, this game showcased Fischer's brilliance against the Soviet chess machine. Game 6 is considered one of Fischer's finest positional masterpieces. The match transcended chess, becoming a proxy battle between the USA and USSR.",
        strategy: "Fischer demonstrated exceptional positional understanding, gradually squeezing Spassky in a Queen's Gambit. His moves were so strong that Spassky's team suspected computer assistance (impossible at the time). Fischer's technique in converting a small advantage into a win was textbook perfect.",
        pgn: `[Event "World Championship"]
[Site "Reykjavik ISL"]
[Date "1972.07.23"]
[Round "6"]
[White "Fischer, Robert J."]
[Black "Spassky, Boris V."]
[Result "1-0"]

1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6
8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8
14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6
20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5
27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8
33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6
39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0`,
        commentary: {
            0: "The starting position of one of the greatest games ever played.",
            1: "c4 - Fischer opens with the English Opening, a flexible choice.",
            20: "Nxd5 - Fischer captures, leading to a subtle positional struggle.",
            37: "Nxe6! - Fischer sacrifices a knight for long-term positional pressure.",
            53: "Rxf5 - Fischer's attack is perfectly coordinated.",
            75: "Rxf6! - The final sacrifice. Black's position collapses.",
            81: "Qf4 - Spassky resigned here. Checkmate is unavoidable. A masterpiece!"
        }
    },
    {
        id: "morphy-duke-1858",
        title: "Morphy vs Duke of Brunswick & Count Isouard",
        white: "Paul Morphy",
        black: "Duke of Brunswick and Count Isouard",
        date: "November 2, 1858",
        location: "Paris Opera House, France",
        result: "1-0 (White wins)",
        importance: "Known as 'The Opera Game,' this is one of the most famous chess games ever played. Morphy played this game in a private box at the Paris Opera House during a performance. It brilliantly demonstrates the principles of rapid development, center control, and devastating attack - concepts still taught to beginners today.",
        strategy: "Morphy's opponents played passively while he developed all his pieces rapidly. He sacrificed material to expose the enemy king, then delivered a beautiful checkmate using perfect piece coordination. This game is a textbook example of how to punish poor opening play.",
        pgn: `[Event "Paris Opera"]
[Site "Paris FRA"]
[Date "1858.11.02"]
[Round "?"]
[White "Morphy, Paul"]
[Black "Duke of Brunswick and Count Isouard"]
[Result "1-0"]

1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7
8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7
14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0`,
        commentary: {
            0: "The game begins. Morphy has White against two aristocratic opponents consulting together.",
            1: "e4 - Morphy opens aggressively, as was his style.",
            7: "dxe5 - Morphy accepts the pawn trade, gaining central control.",
            13: "Qb3! - Morphy's queen attacks both f7 and b7, creating immediate threats.",
            19: "Nxb5! - Morphy sacrifices his knight to destroy Black's pawn structure.",
            25: "Rxd7! - Another brilliant sacrifice! Morphy gives up his rook.",
            29: "Bxd7+! - The final piece sacrifice, forcing Black's pieces into fatal positions.",
            33: "Rd8# - Checkmate! A queen sacrifice leading to back-rank mate. Pure brilliance!"
        }
    },
    {
        id: "byrne-fischer-1956",
        title: "The Game of the Century",
        white: "Donald Byrne",
        black: "Bobby Fischer (13 years old)",
        date: "October 17, 1956",
        location: "New York, USA",
        result: "0-1 (Black wins)",
        importance: "Dubbed 'The Game of the Century' by chess commentators, this game featured 13-year-old Bobby Fischer defeating International Master Donald Byrne with a spectacular queen sacrifice. It announced Fischer's arrival as a chess prodigy and is still studied as an example of brilliant tactical play.",
        strategy: "Fischer demonstrated extraordinary tactical vision, sacrificing his queen on move 17 for a devastating attack. The combination required calculating many moves ahead - remarkable for any player, let alone a 13-year-old. Fischer's minor pieces dominated the board, proving that sometimes pawns and pieces are worth more than the queen.",
        pgn: `[Event "Rosenwald Memorial"]
[Site "New York, NY USA"]
[Date "1956.10.17"]
[Round "8"]
[White "Byrne, Donald"]
[Black "Fischer, Robert James"]
[Result "0-1"]

1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6
8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4
14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be2+ 18. Kg1 Nxd1+ 19. Kg2 Nxf2
20. Kxf2 Ng4+ 21. Kg1 Qb2 22. Qxb2 Bxb2 23. Re1 Re2 24. Rxe2 Bxe2 25. Bf1 Bc4
26. Bxc4 Nf2 27. Kg2 Nxh1 28. Kxh1 Rd8 29. Nxd8 Bxd8 0-1`,
        commentary: {
            0: "Starting position. White is International Master Donald Byrne, Black is 13-year-old Bobby Fischer.",
            21: "Bg5 - Byrne develops aggressively, but Fischer has a stunning surprise prepared.",
            27: "Bxe7 - Byrne captures a pawn, but Fischer's position is secretly winning.",
            33: "Be2+!! - The famous queen sacrifice! Fischer gives up his queen for unstoppable attack.",
            35: "Kg1 - Forced. White must move the king.",
            37: "Nxd1+ - Fischer's pieces swarm the white king. Material doesn't matter anymore.",
            43: "Qb2 - White tries to trade queens but it's too late.",
            57: "Bxd8 - Byrne resigned after this move. The 13-year-old prodigy had played a game for the ages!"
        }
    },
    {
        id: "anand-kasparov-1995",
        title: "Anand vs Kasparov, World Championship",
        white: "Viswanathan Anand",
        black: "Garry Kasparov",
        date: "September 11, 1995",
        location: "New York, USA",
        result: "0-1 (Black wins)",
        importance: "This game from the PCA World Championship showcased the clash between two chess titans - Kasparov's aggressive dynamism versus Anand's precise calculations. Kasparov's victory in this game demonstrated why he was considered the strongest player of his era, combining deep strategic understanding with tactical sharpness.",
        strategy: "Kasparov employed the Sicilian Defense, one of the most aggressive responses to e4. He created complex tactical complications while Anand tried for a positional advantage. Kasparov's superior calculation and dynamic piece play overwhelmed Anand's defenses, showing classical attacking chess at its finest.",
        pgn: `[Event "PCA World Championship"]
[Site "New York, NY USA"]
[Date "1995.09.11"]
[Round "10"]
[White "Anand, Viswanathan"]
[Black "Kasparov, Garry"]
[Result "0-1"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. f3 b5
8. Qd2 Nbd7 9. g4 Nb6 10. O-O-O Nfd7 11. h4 Nc4 12. Bxc4 bxc4 13. g5 Rb8
14. Nd5 exd5 15. exd5 Ne5 16. Kb1 Bd7 17. f4 Ng6 18. h5 Nxf4 19. Bxf4 Qa5
20. a3 Be7 21. Ka2 O-O 22. Rb1 Rb5 23. c3 Rfb8 24. Qc2 h6 25. g6 f5
26. Nxf5 Bxf5 27. Qxf5 Rxb2+ 28. Rxb2 Rxb2+ 29. Ka1 Qc5 0-1`,
        commentary: {
            0: "World Championship game between two legends. Anand is White, Kasparov Black.",
            11: "Be3 - Anand chooses a solid system against the Sicilian Defense.",
            17: "g4!? - Anand plays aggressively, launching a pawn storm on the kingside.",
            27: "Nd5 - A thematic knight jump, but Kasparov has calculated deeply.",
            35: "h5 - Anand tries to maintain the initiative with aggressive pawn play.",
            49: "g6 - The position becomes extremely sharp and tactical.",
            55: "Rxb2+ - Kasparov's attack crashes through on the queenside.",
            57: "Qc5 - Anand resigned. Kasparov's pieces dominate completely."
        }
    }
];