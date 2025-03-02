import { Game } from "../game";
import { GameState } from "./GameState";

export class RunningState extends GameState
{
    constructor(game: Game)
    {
        super(game);
    }

    public start()
    {
        // Game already running, no action needed
    }

    public pause()
    {
        this.game.setState(this.game.getPausedState());
    }

    public resume()
    {
        // Already running, no action needed
    }

    public changeSpeed(speed: number)
    {
        const gameCanvas = this.game.getGameCanvas();
        const circle = gameCanvas.getCircle();
        circle.dx = speed;
        circle.dy = speed;
    }
}
