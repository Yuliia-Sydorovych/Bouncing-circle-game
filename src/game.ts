import { GameCanvas } from './canvas/GameCanvas';
import { GameObservable } from './observer/GameObservable';
import { GameStateObserver } from './observer/GameStateObserver';
import { SpeedObserver } from './observer/SpeedObserver';
import { GameState } from './state/GameState';
import { PausedState } from './state/PausedState';
import { RunningState } from './state/RunningState';

export class Game
{
    protected _canvas: HTMLCanvasElement;
    protected _gameCanvas: GameCanvas;
    protected _state: GameState;
    protected _buttons: HTMLButtonElement[];
    protected _speed: number;
    protected _observers: GameObservable;

    constructor(canvas: HTMLCanvasElement)
    {
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
            document.getElementById('startBtn') as HTMLButtonElement,
            document.getElementById('pauseBtn') as HTMLButtonElement,
            document.getElementById('resumeBtn') as HTMLButtonElement,
            document.getElementById('increaseSpeedBtn') as HTMLButtonElement,
            document.getElementById('decreaseSpeedBtn') as HTMLButtonElement,
            document.getElementById('restartBtn') as HTMLButtonElement
        ];
    }

    public setState(state: GameState)
    {
        this._state = state;
        const stateString = state instanceof PausedState ? 'Paused' : 'Running';
        this.notifyObservers(stateString, this._speed);
    }

    // Method to increase speed
    public increaseSpeed()
    {
        this._speed += 1;
        this._state.changeSpeed(this._speed); // Inform state that speed has changed
        this.notifyObservers(this._state instanceof PausedState ? 'Paused' : 'Running', this._speed);
    }

    // Method to decrease speed (called when user clicks 'decrease speed')
    public decreaseSpeed()
    {
        if (this._speed > 1)
        {
            this._speed -= 1;
            this._state.changeSpeed(this._speed);
            this.notifyObservers(this._state instanceof PausedState ? 'Paused' : 'Running', this._speed);
        }
    }

    public getRunningState(): GameState
    {
        return new RunningState(this);
    }

    public getPausedState(): GameState
    {
        return new PausedState(this);
    }

    public start()
    {
        this._state.start(); // Trigger the start action for the current state
        this.setState(this.getRunningState()); // Change state to RunningState
        this.animationLoop(); // Start the animation loop when the game starts
    }
    
    public resume()
    {
        this._state.resume(); // Trigger the resume action for the current state
        this.setState(this.getRunningState()); // Change state to RunningState
        this.animationLoop(); // Start the animation loop when the game resumes
    }

    public pause()
    {
        this._state.pause();
    }

    // Add a restart method to reset the game
    public restart()
    {
        this._state = new PausedState(this); // Reset to paused state
        this._speed = 2;
        this._state.changeSpeed(this._speed); // Inform state that speed has changed
        this._gameCanvas.reset(); // Reset game canvas (if required)
        this.start(); // Start new game
    }

    // Game loop
    public animationLoop()
    {
        if (this._state instanceof RunningState)
        {
            this._gameCanvas.update();  // Update the game state and redraw the canvas
            requestAnimationFrame(() => this.animationLoop()); // Continue the loop
        }
    }

    public disableBtn(id: number, disable: boolean)
    {
        const button = this._buttons[id];
        if (disable)
        {
            button.setAttribute('disabled', 'true');
        }
        else
        {
            button.removeAttribute('disabled');
        }
    }

    public getGameCanvas(): GameCanvas
    {
        return this._gameCanvas;
    }

    // Method to notify observers when the game state or speed changes
    protected notifyObservers(state: string, speed?: number)
    {
        this._observers.notifyObservers(state, speed);
    }
}
