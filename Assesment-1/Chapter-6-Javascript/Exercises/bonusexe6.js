let correctColor = '';
let lives = 3;
let score = 0;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
    lives = 3;
    score = 0;
    document.getElementById('score').innerText = score;
    document.getElementById('lives').innerText = lives;
    document.getElementById('feedback').innerText = '';
    generateRound();
}

function generateRound() {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; // Clear previous options

    correctColor = getRandomColor();
    document.getElementById('rgbValue').innerText = correctColor;

    const correctIndex = Math.floor(Math.random() * 3);

    for (let i = 0; i < 3; i++) {
        const color = (i === correctIndex) ? correctColor : getRandomColor();
        const div = document.createElement('div');
        div.className = 'option';
        div.style.backgroundColor = color;

        div.addEventListener('click', () => handleGuess(color));

        optionsContainer.appendChild(div);
    }
}

function handleGuess(selectedColor) {
    if (selectedColor === correctColor) {
        document.getElementById('feedback').innerText = 'Correct!';
        score++;
        document.getElementById('score').innerText = score;
        generateRound();
    } else {
        lives--;
        document.getElementById('lives').innerText = lives;
        document.getElementById('feedback').innerText = 'Incorrect!';

        if (lives === 0) {
            document.getElementById('feedback').innerText = 'Game Over! Final Score: ' + score;
        }
    }
}

startGame();
