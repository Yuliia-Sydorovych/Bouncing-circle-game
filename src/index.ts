import { Game } from './game';

const enum ButtonId
{
    START = 0,
    PAUSE,
    RESUME,
    INCREASE,
    DECREASE,
    RESTART
}

// initialize canvas
const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;

// create game
const game = new Game(canvas);

// Button elements
const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
const pauseBtn = document.getElementById('pauseBtn') as HTMLButtonElement;
const resumeBtn = document.getElementById('resumeBtn') as HTMLButtonElement;
const increaseSpeedBtn = document.getElementById('increaseSpeedBtn') as HTMLButtonElement;
const decreaseSpeedBtn = document.getElementById('decreaseSpeedBtn') as HTMLButtonElement;
const restartBtn = document.getElementById('restartBtn') as HTMLButtonElement;

startBtn.addEventListener('click', () =>
{
    game.start();

    // disable buttons
    game.disableBtn(ButtonId.START, true);
    game.disableBtn(ButtonId.RESUME, true);
    
    // enable buttons
    game.disableBtn(ButtonId.PAUSE, false);
    game.disableBtn(ButtonId.INCREASE, false);
    game.disableBtn(ButtonId.DECREASE, false);
    game.disableBtn(ButtonId.RESTART, false);
});

pauseBtn.addEventListener('click', () =>
{
    game.pause();

    // disable buttons
    game.disableBtn(ButtonId.PAUSE, true);
    game.disableBtn(ButtonId.INCREASE, true);
    game.disableBtn(ButtonId.DECREASE, true);

    // enable button
    game.disableBtn(ButtonId.RESUME, false);
});

resumeBtn.addEventListener('click', () =>
{
    game.resume();

    // disable button
    game.disableBtn(ButtonId.RESUME, true);

    // enable buttons
    game.disableBtn(ButtonId.PAUSE, false);
    game.disableBtn(ButtonId.INCREASE, false);
    game.disableBtn(ButtonId.DECREASE, false);
});

increaseSpeedBtn.addEventListener('click', () =>
{
    game.increaseSpeed();
});

decreaseSpeedBtn.addEventListener('click', () =>
{
    game.decreaseSpeed();
});

restartBtn.addEventListener('click', () =>
{
    game.restart();

    // disable buttons
    game.disableBtn(ButtonId.START, true);
    game.disableBtn(ButtonId.RESUME, true);

    // enable buttons
    game.disableBtn(ButtonId.PAUSE, false);
    game.disableBtn(ButtonId.INCREASE, false);
    game.disableBtn(ButtonId.DECREASE, false);
});
