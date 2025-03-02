import { Game } from "../game";

export abstract class GameState
{
    protected game: Game;

    constructor(game: Game)
    {
        this.game = game;
    }

    abstract start(): void;
    abstract pause(): void;
    abstract resume(): void;
    abstract changeSpeed(speed: number): void;
}
