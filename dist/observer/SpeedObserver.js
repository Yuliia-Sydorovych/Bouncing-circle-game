// SpeedObserver listens to the changes in the speed of the game (dx and dy)
export class SpeedObserver {
    constructor() {
        this._speed = 2; // Default speed (initial speed of the circle)
    }
    // The update method is called when the speed changes
    update(state, speed) {
        if (speed !== undefined) {
            this._speed = speed;
            // Update the UI with the new speed
            const speedElement = document.getElementById('circleSpeed');
            if (speedElement) {
                speedElement.textContent = `Circle Speed: ${this._speed}`;
            }
        }
    }
}
