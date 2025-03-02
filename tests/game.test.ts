import { Game } from '../src/game';
import { PausedState } from '../src/state/PausedState';
import { RunningState } from '../src/state/RunningState';

describe('Game Class', () =>
{
    let game: Game;

    beforeEach(() =>
    {
        const canvas = document.createElement('canvas');
        game = new Game(canvas);
    });

    test('should start in Paused state', () =>
    {
        expect(game['_state']).toBeInstanceOf(PausedState);
    });

    test('should transition to Running state when started', () =>
    {
        game.start();
        expect(game['_state']).toBeInstanceOf(RunningState);
    });

    test('should resume from Paused state', () =>
    {
        game.start();
        game.pause();
        game.resume();
        expect(game['_state']).toBeInstanceOf(RunningState);
    });

    test('should increase speed when requested', () =>
    {
        const initialSpeed = game['_speed'];
        game.increaseSpeed();
        expect(game['_speed']).toBe(initialSpeed + 1);
    });

    test('should decrease speed when requested', () =>
    {
        game.decreaseSpeed();
        expect(game['_speed']).toBe(1);
    });
});
