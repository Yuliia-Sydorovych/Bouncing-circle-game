import { Circle } from "../src/canvas/Circle";

describe('Circle Class', () =>
{
    let circle: Circle;

    beforeEach(() =>
    {
        circle = new Circle(100, 100, 10, 2, 2); // Initial position at (100, 100), moving with dx=2, dy=2
    });

    test('should move the circle correctly', () =>
    {
        circle.move(800, 600);
        expect(circle.x).toBe(102); // 100 + 2
        expect(circle.y).toBe(102); // 100 + 2
    });

    test('should bounce back on right boundary', () =>
    {
        circle.x = 780;  // Position the circle at the right boundary
        circle.move(800, 600);
        expect(circle.dx).toBe(2); // Should reverse the direction
        expect(circle.x).toBe(782); // 780 + 2
    });

    test('should bounce back on bottom boundary', () =>
    {
        circle.y = 580;  // Position the circle at the bottom boundary
        circle.move(800, 600);
        expect(circle.dy).toBe(2); // Should reverse the direction
        expect(circle.y).toBe(582); // 580 + 2
    });
});
