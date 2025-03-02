import { SpeedObserver } from '../src/observer/SpeedObserver';

describe('SpeedObserver', () =>
{
    let observer: SpeedObserver;

    beforeEach(() =>
    {
        observer = new SpeedObserver();
    });

    test('should initialize with default speed', () =>
    {
        expect(observer['_speed']).toBe(2);
    });

    test('should update the circle speed', () =>
    {
        const speedElement = document.createElement('div');
        speedElement.id = 'circleSpeed';
        document.body.appendChild(speedElement);

        observer.update('Running', 4);
        expect(speedElement.textContent).toBe('Circle Speed: 4');
    });
});
