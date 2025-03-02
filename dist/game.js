import { GameCanvas } from './canvas/GameCanvas.js';
import { GameObservable } from './observer/GameObservable.js';
import { GameStateObserver } from './observer/GameStateObserver.js';
import { SpeedObserver } from './observer/SpeedObserver.js';
import { PausedState } from './state/PausedState.js';
import { RunningState } from './state/RunningState.js';
export class Game {
    constructor(canvas) {
        this._canvas = canvas;
        this._gameCanvas = new GameCanvas(this._canvas);
        this._state = new PausedState(this); // Default state is paused
        this._speed = 2; // Default speed is 2
        // Create and add observers to the game observable
        this._observers = new GameObservable();
        const gameStateObserver = new GameStateObserver();
        this._observers.addObserver(gameStateObserver);
        const speedObserver = new SpeedObserver();
        this._observers.addObserver(speedObserver);
        // Get buttons
        this._buttons = [
            document.getElementById('startBtn'),
            document.getElementById('pauseBtn'),
            document.getElementById('resumeBtn'),
            document.getElementById('increaseSpeedBtn'),
            document.getElementById('decreaseSpeedBtn'),
            document.getElementById('restartBtn')
        ];
    }
    setState(state) {
        this._state = state;
        const stateString = state instanceof PausedState ? 'Paused' : 'Running';
        this.notifyObservers(stateString, this._speed);
    }
    // Method to increase speed
    increaseSpeed() {
        this._speed += 1;
        this._state.changeSpeed(this._speed); // Inform state that speed has changed
        this.notifyObservers(this._state instanceof PausedState ? 'Paused' : 'Running', this._speed);
    }
    // Method to decrease speed (called when user clicks 'decrease speed')
    decreaseSpeed() {
        if (this._speed > 1) {
            this._speed -= 1;
            this._state.changeSpeed(this._speed);
            this.notifyObservers(this._state instanceof PausedState ? 'Paused' : 'Running', this._speed);
        }
    }
    getRunningState() {
        return new RunningState(this);
    }
    getPausedState() {
        return new PausedState(this);
    }
    start() {
        this._state.start(); // Trigger the start action for the current state
        this.setState(this.getRunningState()); // Change state to RunningState
        this.animationLoop(); // Start the animation loop when the game starts
    }
    resume() {
        this._state.resume(); // Trigger the resume action for the current state
        this.setState(this.getRunningState()); // Change state to RunningState
        this.animationLoop(); // Start the animation loop when the game resumes
    }
    pause() {
        this._state.pause();
    }
    // Add a restart method to reset the game
    restart() {
        this._state = new PausedState(this); // Reset to paused state
        this._speed = 2;
        this._state.changeSpeed(this._speed); // Inform state that speed has changed
        this._gameCanvas.reset(); // Reset game canvas (if required)
        this.start(); // Start new game
    }
    // Game loop
    animationLoop() {
        if (this._state instanceof RunningState) {
            this._gameCanvas.update(); // Update the game state and redraw the canvas
            requestAnimationFrame(() => this.animationLoop()); // Continue the loop
        }
    }
    disableBtn(id, disable) {
        const button = this._buttons[id];
        if (disable) {
            button.setAttribute('disabled', 'true');
        }
        else {
            button.removeAttribute('disabled');
        }
    }
    getGameCanvas() {
        return this._gameCanvas;
    }
    // Method to notify observers when the game state or speed changes
    notifyObservers(state, speed) {
        this._observers.notifyObservers(state, speed);
    }
}
