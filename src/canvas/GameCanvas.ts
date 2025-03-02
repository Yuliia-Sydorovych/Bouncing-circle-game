import { Circle } from "./Circle";

export class GameCanvas
{
    protected _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;
    protected _circle: Circle;

    constructor(canvas: HTMLCanvasElement)
    {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d')!;

        // Ensure canvas width and height are set
        this._canvas.width = 800;
        this._canvas.height = 600;

        // Initialize the circle in the center
        this._circle = new Circle(this._canvas.width / 2, this._canvas.height / 2, 20, 2, 2);
    }

    // Update circle
    public update()
    {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._circle.move(this._canvas.width, this._canvas.height);
        this.drawCircle();
    }

    // Get the current circle instance
    public getCircle()
    {
        return this._circle;
    }

    // Set the circle's speed (dx and dy)
    public setCircleSpeed(dx: number, dy: number)
    {
        this._circle.dx = dx;
        this._circle.dy = dy;
    }

    // Reset the game (e.g., reset the circle's position and speed)
    public reset()
    {
        // Reset the circle's position to the center of the canvas
        this._circle.x = this._canvas.width / 2;
        this._circle.y = this._canvas.height / 2;

        // Optionally reset speed to default
        this.setCircleSpeed(2, 2);

        // Redraw the canvas
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this.drawCircle();
    }

    // Draws the circle on the canvas
    protected drawCircle()
    {
        this._ctx.beginPath();
        this._ctx.arc(this._circle.x, this._circle.y, this._circle.radius, 0, Math.PI * 2);
        this._ctx.fillStyle = '#FF0000';
        this._ctx.fill();
        this._ctx.closePath();
    }
}
