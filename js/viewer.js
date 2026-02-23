// viewer.js - Handles the match viewer page

let game; // Chess.js instance
let board; // Chessboard.js instance
let currentMatch; // Current match data
let moveHistory = []; // Array of all positions
let currentMoveIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    initializeViewer();
});

function initializeViewer() {
    // Get match ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const matchId = urlParams.get('match');
    
    if (!matchId) {
        alert('No match specified!');
        window.location.href = 'index.html';
        return;
    }
    
    // Find the match in our data
    currentMatch = matches.find(m => m.id === matchId);
    
    if (!currentMatch) {
        alert('Match not found!');
        window.location.href = 'index.html';
        return;
    }
    
    // Load match information
    loadMatchInfo();
    
    // Initialize chess game
    game = new Chess();
    
    // Parse PGN and build move history
    game.load_pgn(currentMatch.pgn);
    buildMoveHistory();
    
    // Reset game to start
    game.reset();
    currentMoveIndex = 0;
    
    // Initialize the chess board
    initializeBoard();
    
    // Set up control buttons
    setupControls();
    
    // Update display
    updateDisplay();
}

function loadMatchInfo() {
    // Populate all the match information fields
    document.getElementById('match-title').textContent = currentMatch.title;
    document.getElementById('players-info').innerHTML = `
        ⚪ White: ${currentMatch.white}<br>
        ⚫ Black: ${currentMatch.black}
    `;
    document.getElementById('match-date').textContent = currentMatch.date;
    document.getElementById('match-location').textContent = currentMatch.location;
    document.getElementById('match-result').textContent = currentMatch.result;
    document.getElementById('importance-text').textContent = currentMatch.importance;
    document.getElementById('strategy-text').textContent = currentMatch.strategy;
}

function buildMoveHistory() {
    moveHistory = [];
    const tempGame = new Chess();
    tempGame.load_pgn(currentMatch.pgn);
    
    // Store starting position
    moveHistory.push({
        fen: new Chess().fen(),
        move: null,
        moveNumber: 0,
        san: 'Start'
    });
    
    // Get all moves
    const moves = tempGame.history({ verbose: true });
    tempGame.reset();
    
    // Build history with each position
    moves.forEach((move, index) => {
        tempGame.move(move.san);
        moveHistory.push({
            fen: tempGame.fen(),
            move: move,
            moveNumber: Math.floor(index / 2) + 1,
            san: move.san,
            color: move.color
        });
    });
}

function initializeBoard() {
    const config = {
        position: 'start',
        draggable: false,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    };
    
    board = Chessboard('board', config);
    
    // Make board responsive
    window.addEventListener('resize', board.resize);
}

function setupControls() {
    document.getElementById('start-btn').addEventListener('click', goToStart);
    document.getElementById('prev-btn').addEventListener('click', previousMove);
    document.getElementById('next-btn').addEventListener('click', nextMove);
    document.getElementById('end-btn').addEventListener('click', goToEnd);
    
    // Keyboard controls
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') previousMove();
        if (e.key === 'ArrowRight') nextMove();
        if (e.key === 'Home') goToStart();
        if (e.key === 'End') goToEnd();
    });
}

function goToStart() {
    currentMoveIndex = 0;
    updateDisplay();
}

function previousMove() {
    if (currentMoveIndex > 0) {
        currentMoveIndex--;
        updateDisplay();
    }
}

function nextMove() {
    if (currentMoveIndex < moveHistory.length - 1) {
        currentMoveIndex++;
        updateDisplay();
    }
}

function goToEnd() {
    currentMoveIndex = moveHistory.length - 1;
    updateDisplay();
}

function jumpToMove(index) {
    currentMoveIndex = index;
    updateDisplay();
}

function updateDisplay() {
    const currentPosition = moveHistory[currentMoveIndex];
    
    // Update board
    board.position(currentPosition.fen);
    
    // Update move counter
    document.getElementById('current-move').textContent = currentMoveIndex;
    document.getElementById('total-moves').textContent = moveHistory.length - 1;
    
    // Update current move notation
    const moveNotation = document.getElementById('move-notation');
    if (currentMoveIndex === 0) {
        moveNotation.textContent = 'Starting Position';
    } else {
        const move = currentPosition;
        const prefix = move.color === 'w' ? '⚪' : '⚫';
        moveNotation.textContent = `${prefix} ${move.moveNumber}. ${move.san}`;
    }
    
    // Update commentary
    updateCommentary();
    
    // Update move list
    updateMoveList();
    
    // Update button states
    updateButtonStates();
}

function updateCommentary() {
    const commentaryDiv = document.getElementById('commentary-text');
    
    if (currentMatch.commentary && currentMatch.commentary[currentMoveIndex]) {
        commentaryDiv.innerHTML = `<p><strong>Move ${currentMoveIndex}:</strong> ${currentMatch.commentary[currentMoveIndex]}</p>`;
        commentaryDiv.parentElement.style.display = 'block';
    } else {
        if (currentMoveIndex === 0) {
            commentaryDiv.innerHTML = '<p>Starting position. Use the controls to navigate through the match. Commentary will appear here for key moves.</p>';
        } else {
            commentaryDiv.innerHTML = '<p>Continue through the moves to see more commentary on critical positions.</p>';
        }
    }
}

function updateMoveList() {
    const moveListDiv = document.getElementById('move-list');
    moveListDiv.innerHTML = '';
    
    moveHistory.forEach((position, index) => {
        if (index === 0) return; // Skip starting position in list
        
        const moveItem = document.createElement('div');
        moveItem.className = 'move-item';
        if (index === currentMoveIndex) {
            moveItem.classList.add('current');
        }
        
        const move = position;
        const moveText = move.color === 'w' 
            ? `${move.moveNumber}. ${move.san}`
            : `${move.moveNumber}... ${move.san}`;
        
        moveItem.textContent = moveText;
        moveItem.addEventListener('click', () => jumpToMove(index));
        
        moveListDiv.appendChild(moveItem);
    });
}

function updateButtonStates() {
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const endBtn = document.getElementById('end-btn');
    
    // Disable start/prev if at beginning
    startBtn.disabled = currentMoveIndex === 0;
    prevBtn.disabled = currentMoveIndex === 0;
    
    // Disable next/end if at end
    nextBtn.disabled = currentMoveIndex === moveHistory.length - 1;
    endBtn.disabled = currentMoveIndex === moveHistory.length - 1;
}