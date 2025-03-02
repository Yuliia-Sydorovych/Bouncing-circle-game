import { Game } from './game.js';
// initialize canvas
const canvas = document.getElementById('gameCanvas');
// create game
const game = new Game(canvas);
// Button elements
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const increaseSpeedBtn = document.getElementById('increaseSpeedBtn');
const decreaseSpeedBtn = document.getElementById('decreaseSpeedBtn');
const restartBtn = document.getElementById('restartBtn');
startBtn.addEventListener('click', () => {
    game.start();
    // disable buttons
    game.disableBtn(0 /* ButtonId.START */, true);
    game.disableBtn(2 /* ButtonId.RESUME */, true);
    // enable buttons
    game.disableBtn(1 /* ButtonId.PAUSE */, false);
    game.disableBtn(3 /* ButtonId.INCREASE */, false);
    game.disableBtn(4 /* ButtonId.DECREASE */, false);
    game.disableBtn(5 /* ButtonId.RESTART */, false);
});
pauseBtn.addEventListener('click', () => {
    game.pause();
    // disable buttons
    game.disableBtn(1 /* ButtonId.PAUSE */, true);
    game.disableBtn(3 /* ButtonId.INCREASE */, true);
    game.disableBtn(4 /* ButtonId.DECREASE */, true);
    // enable button
    game.disableBtn(2 /* ButtonId.RESUME */, false);
});
resumeBtn.addEventListener('click', () => {
    game.resume();
    // disable button
    game.disableBtn(2 /* ButtonId.RESUME */, true);
    // enable buttons
    game.disableBtn(1 /* ButtonId.PAUSE */, false);
    game.disableBtn(3 /* ButtonId.INCREASE */, false);
    game.disableBtn(4 /* ButtonId.DECREASE */, false);
});
increaseSpeedBtn.addEventListener('click', () => {
    game.increaseSpeed();
});
decreaseSpeedBtn.addEventListener('click', () => {
    game.decreaseSpeed();
});
restartBtn.addEventListener('click', () => {
    game.restart();
    // disable buttons
    game.disableBtn(0 /* ButtonId.START */, true);
    game.disableBtn(2 /* ButtonId.RESUME */, true);
    // enable buttons
    game.disableBtn(1 /* ButtonId.PAUSE */, false);
    game.disableBtn(3 /* ButtonId.INCREASE */, false);
    game.disableBtn(4 /* ButtonId.DECREASE */, false);
});
