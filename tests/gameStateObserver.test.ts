import { GameStateObserver } from '../src/observer/GameStateObserver';

describe('GameStateObserver', () =>
{
    let observer: GameStateObserver;

    beforeEach(() =>
    {
        observer = new GameStateObserver();
    });

    test('should initialize with Paused state', () =>
    {
        expect(observer['_gameState']).toBe('Paused');
    });

    test('should update the game state', () =>
    {
        observer.update('Running');
        const statusElement = document.createElement('div');
        statusElement.id = 'gameStatus';
        document.body.appendChild(statusElement);

        observer.update('Running');
        expect(statusElement.textContent).toBe('Game Status: Running');
    });
});
