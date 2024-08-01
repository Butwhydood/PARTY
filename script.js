const imageSources = [
    'arrow-heart.png',
    'basket-picnic.png',
    'book-heart.png',
    'candies.png',
    'champaigne-bottle.png',
    'champaigne-glasses.png',
    'cloud-angel@2x.png',
    'donut@2x.png',
    'gift-ornament@2x.png',
    'flower@2x.png',
    'laptop-heart@2x.png',
    'lock-heart@2x.png',
    'love-heart@2x.png',
    'mobile-heart@2x.png',
    'muffin@2x.png',
    'note-heart@2x.png',
    'plant-heart@2x.png',
    'plant-rose@2x.png',
    'shopping-bag-heart@2x.png'
];

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
    addImages();
}

function addImages() {
    const imagesContainer = document.getElementById('images-container');
    
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
            img.className = 'floating-image';
            img.style.left = Math.random() * 100 + '%';
            img.style.top = Math.random() * 100 + '%';
            img.style.animationDelay = Math.random() * 5 + 's';
            img.style.animationDuration = (Math.random() * 10 + 5) + 's';
            imagesContainer.appendChild(img);
        }, i * 20);
    }
}
