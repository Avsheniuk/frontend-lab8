// Код у вигляді звичайного рядка

let username = prompt('Username: ');

let content = '<div id="main"><div id="human" class="player-block"><div class="name"></div>' +
    '<div class="points">0</div><div class="number">0</div></div>' +
    '<div id="computer" class="player-block"><div class="name">Computer</div>' +
    '<div class="points">0</div><div class="number">0</div></div>' +
    '<button id="generate">Generate</button></div>';

document.body.innerHTML = content;  // Всередину body вставив текстовий HTML

let computer = document.getElementById('computer');
let human = document.getElementById('human');
let computerPoints = 0;
let humanPoints = 0;

let button = document.getElementById('generate');
button.addEventListener('click', fight);

human.querySelector('.name').textContent = username;

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function fight() {
    let computerNum = getRandomNumber();
    let humanNum = getRandomNumber();

    human.querySelector('.number').textContent = humanNum.toString();
    computer.querySelector('.number').textContent = computerNum.toString();

    if (computerNum > humanNum) {
        computerPoints++;
        computer.querySelector('.points').textContent = computerPoints.toString();
    }
    if (computerNum < humanNum) {
        humanPoints++;
        human.querySelector('.points').textContent = humanPoints.toString();
    }

    if (computerPoints === 3 || humanPoints === 3) {
        if (computerPoints === 3) alert('Computer won!');
        if (humanPoints === 3) alert(username + ' won!');
        button.removeEventListener('click', fight);
    }
}
