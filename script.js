function checkWord() {
    const inputWord = document.getElementById('input-word').value;
    const correctWord = 'party';

    if (inputWord.toLowerCase() === correctWord) {
        document.getElementById('prompt').classList.add('hidden');
        document.getElementById('party-mode').classList.remove('hidden');
        startPartyMode();
    } else {
        alert('Incorrect word, try again!');
    }
}

function startPartyMode() {
    // Add more party items dynamically
    const partyMode = document.getElementById('party-mode');
    const items = ['heart', 'confetti', 'flowers', 'cats'];
    
    for (let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.className = 'party-item ' + items[Math.floor(Math.random() * items.length)];
        div.style.left = Math.random() * 100 + '%';
        div.style.top = Math.random() * 100 + '%';
        div.style.animationDelay = Math.random() * 5 + 's';
        partyMode.appendChild(div);
    }
}