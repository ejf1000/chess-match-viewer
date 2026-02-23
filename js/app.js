// app.js - Handles the front page match list

document.addEventListener('DOMContentLoaded', function() {
    loadMatchList();
});

function loadMatchList() {
    const matchListContainer = document.getElementById('match-list');
    
    // Clear any existing content
    matchListContainer.innerHTML = '';
    
    // Create a card for each match
    matches.forEach(match => {
        const card = createMatchCard(match);
        matchListContainer.appendChild(card);
    });
}

function createMatchCard(match) {
    // Create the card element
    const card = document.createElement('a');
    card.href = `viewer.html?match=${match.id}`;
    card.className = 'match-card';
    
    // Build the card content
    card.innerHTML = `
        <h2>${match.title}</h2>
        <div class="players">
            <div class="player white">⚪ White: ${match.white}</div>
            <div class="player black">⚫ Black: ${match.black}</div>
        </div>
        <div class="meta">
            <span class="date">📅 ${match.date}</span>
            <span class="result">🏆 ${match.result}</span>
        </div>
        <div class="snippet">
            ${match.importance.substring(0, 150)}...
        </div>
    `;
    
    return card;
}