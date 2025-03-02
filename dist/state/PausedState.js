import { GameState } from "./GameState.js";
export class PausedState extends GameState {
    constructor(game) {
        super(game);
    }
    start() {
        this.game.setState(this.game.getRunningState());
    }
    pause() {
        // Already paused, no action needed
    }
    resume() {
        this.game.setState(this.game.getRunningState());
    }
    changeSpeed(_speed) {
        // Do nothing while paused
    }
}
