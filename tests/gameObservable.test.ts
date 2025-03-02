import { GameObservable } from '../src/observer/GameObservable';
import { GameStateObserver } from '../src/observer/GameStateObserver';
import { SpeedObserver } from '../src/observer/SpeedObserver';

describe('GameObservable', () =>
{
    let observable: GameObservable;
    let gameStateObserver: GameStateObserver;
    let speedObserver: SpeedObserver;

    beforeEach(() =>
    {
        observable = new GameObservable();
        gameStateObserver = new GameStateObserver();
        speedObserver = new SpeedObserver();
    });

    test('should add observers', () =>
    {
        observable.addObserver(gameStateObserver);
        observable.addObserver(speedObserver);
        expect(observable['_observers'].length).toBe(2);
    });

    test('should notify observers of state change', () =>
    {
        observable.addObserver(gameStateObserver);
        observable.notifyObservers('Running');
        expect(gameStateObserver['_gameState']).toBe('Running');
    });

    test('should notify observers of speed change', () =>
    {
        observable.addObserver(speedObserver);
        observable.notifyObservers('Running', 3);
        expect(speedObserver['_speed']).toBe(3);
    });
});
