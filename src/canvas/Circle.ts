export class Circle
{
    protected _x: number;
    protected _y: number;
    protected _radius: number;
    protected _dx: number;
    protected _dy: number;

    public set x(x: number)
    {
        this._x = x;
    }

    public get x(): number
    {
        return this._x;
    }

    public set y(y: number)
    {
        this._y = y;
    }

    public get y(): number
    {
        return this._y;
    }

    public get radius(): number
    {
        return this._radius;
    }

    public set dx(dx: number)
    {
        this._dx = dx;
    }

    public get dx(): number
    {
        return this._dx;
    }

    public set dy(dy: number)
    {
        this._dy = dy;
    }

    public get dy(): number
    {
        return this._dy;
    }

    constructor(x: number, y: number, radius: number, dx: number, dy: number)
    {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._dx = dx;
        this._dy = dy;
    }

    // Moves the circle and handles boundary collision
    public move(canvasWidth: number, canvasHeight: number)
    {
        // Handle collision with the canvas boundaries
        if (this._x + this._radius > canvasWidth || this._x - this._radius < 0)
        {
            this._dx = -this._dx;  // Reverse direction on X axis
        }
        if (this._y + this._radius > canvasHeight || this._y - this._radius < 0)
        {
            this._dy = -this._dy;  // Reverse direction on Y axis
        }

        // Update the circle's position
        this._x += this._dx;
        this._y += this._dy;
    }
}
