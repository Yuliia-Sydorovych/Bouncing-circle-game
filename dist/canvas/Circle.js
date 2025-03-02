export class Circle {
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = y;
    }
    get y() {
        return this._y;
    }
    get radius() {
        return this._radius;
    }
    set dx(dx) {
        this._dx = dx;
    }
    get dx() {
        return this._dx;
    }
    set dy(dy) {
        this._dy = dy;
    }
    get dy() {
        return this._dy;
    }
    constructor(x, y, radius, dx, dy) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._dx = dx;
        this._dy = dy;
    }
    // Moves the circle and handles boundary collision
    move(canvasWidth, canvasHeight) {
        // Handle collision with the canvas boundaries
        if (this._x + this._radius > canvasWidth || this._x - this._radius < 0) {
            this._dx = -this._dx; // Reverse direction on X axis
        }
        if (this._y + this._radius > canvasHeight || this._y - this._radius < 0) {
            this._dy = -this._dy; // Reverse direction on Y axis
        }
        // Update the circle's position
        this._x += this._dx;
        this._y += this._dy;
    }
}
