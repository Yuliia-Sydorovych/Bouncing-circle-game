import { GameState } from "./GameState.js";
export class RunningState extends GameState {
    constructor(game) {
        super(game);
    }
    start() {
        // Game already running, no action needed
    }
    pause() {
        this.game.setState(this.game.getPausedState());
    }
    resume() {
        // Already running, no action needed
    }
    changeSpeed(speed) {
        const gameCanvas = this.game.getGameCanvas();
        const circle = gameCanvas.getCircle();
        circle.dx = speed;
        circle.dy = speed;
    }
}
