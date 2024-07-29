function checkWord() {
    const inputWord = document.getElementById('input-word').value;
    const correctWord = 'pumpkin';

    if (inputWord.toLowerCase() === correctWord) {
        document.getElementById('prompt').classList.add('hidden');
        document.getElementById('party-mode').classList.remove('hidden');
        startPartyMode();
    } else {
        alert('Incorrect word, try again!');
    }
}

function startPartyMode() {
    const loveMessage = document.querySelector('.love-message');
    loveMessage.style.display = 'block';
    addFlowersStarsAndButterflies();
}

function addFlowersStarsAndButterflies() {
    const flowersContainer = document.getElementById('flowers-container');
    const starsContainer = document.getElementById('stars-container');
    const butterfliesContainer = document.getElementById('butterflies-container');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.animationDelay = Math.random() * 2 + 's';
            flowersContainer.appendChild(flower);

            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 20 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            starsContainer.appendChild(star);

            if (i % 4 === 0) {
                const butterfly = document.createElement('div');
                butterfly.className = 'butterfly';
                butterfly.style.left = Math.random() * 100 + '%';
                butterfly.style.top = Math.random() * 60 + 20 + '%';
                butterfly.style.animationDelay = Math.random() * 2 + 's';
                butterfliesContainer.appendChild(butterfly);
            }
        }, i * 100);
    }
}
