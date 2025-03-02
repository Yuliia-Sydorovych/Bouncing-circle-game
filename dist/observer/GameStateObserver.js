// GameStateObserver listens to the changes in the game state (running, paused, etc.)
export class GameStateObserver {
    constructor() {
        this._gameState = "Paused"; // Initial state is paused
    }
    // The update method is called when the state changes
    update(state, speed) {
        this._gameState = state;
        // Update the UI with the game state
        const statusElement = document.getElementById('gameStatus');
        if (statusElement) {
            statusElement.textContent = `Game Status: ${state}`;
        }
    }
}
