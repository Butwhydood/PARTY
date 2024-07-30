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
    
    // Add stars and butterflies
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
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

    // Add mini flowers to create a field
    const flowerCount = Math.ceil((window.innerWidth * 30) / 100); // Adjust density as needed
    for (let i = 0; i < flowerCount; i++) {
        const miniFlower = document.createElement('div');
        miniFlower.className = 'mini-flower';
        
        // Randomize position within the container
        miniFlower.style.left = Math.random() * 100 + '%';
        miniFlower.style.bottom = Math.random() * 20 + '%';
        
        // Randomize size slightly
        const scale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
        miniFlower.style.transform = `scale(${scale})`;
        
        // Randomize animation delay
        miniFlower.style.animationDelay = Math.random() * 2 + 's';

        const petal = document.createElement('div');
        petal.className = 'petal';
        miniFlower.appendChild(petal);

        const center = document.createElement('div');
        center.className = 'center';
        miniFlower.appendChild(center);

        const stem = document.createElement('div');
        stem.className = 'stem';
        miniFlower.appendChild(stem);

        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        miniFlower.appendChild(leaf);

        flowersContainer.appendChild(miniFlower);
    }
}
