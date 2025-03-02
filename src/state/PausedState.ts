import { Game } from "../game";
import { GameState } from "./GameState";

export class PausedState extends GameState
{
    constructor(game: Game)
    {
        super(game);
    }

    public start()
    {
        this.game.setState(this.game.getRunningState());
    }

    public pause()
    {
        // Already paused, no action needed
    }

    public resume()
    {
        this.game.setState(this.game.getRunningState());
    }

    public changeSpeed(_speed: number)
    {
        // Do nothing while paused
    }
}
