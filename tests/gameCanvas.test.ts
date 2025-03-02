import { GameCanvas } from '../src/canvas/GameCanvas';

beforeAll(() =>
{
  // Mock the getContext method to include all required canvas context methods
  HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
    clearRect: jest.fn(),
    beginPath: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    stroke: jest.fn(),
    moveTo: jest.fn(),
    lineTo: jest.fn(),
    closePath: jest.fn(),
  });
});

afterEach(() =>
{
  jest.clearAllMocks(); // Reset mocks after each test
});

describe('GameCanvas Class', () =>
{
  let canvas: HTMLCanvasElement;
  let gameCanvas: GameCanvas;

  beforeEach(() =>
  {
    canvas = document.createElement('canvas');
    gameCanvas = new GameCanvas(canvas);
  });

  test('should correctly initialize canvas properties', () =>
  {
    expect(canvas.width).toBe(800);
    expect(canvas.height).toBe(600);
    expect(gameCanvas).toBeTruthy();
  });

  test('should draw a red circle', () =>
  {
    const circle = gameCanvas.getCircle();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const spy = jest.spyOn(ctx, 'arc');
    gameCanvas.update();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  });

  test('should update circle position', () =>
  {
    gameCanvas.update();
    const circle = gameCanvas.getCircle();
    expect(circle.x).toBeGreaterThan(100);
    expect(circle.y).toBeGreaterThan(100);
  });
});
