// GameObservable is the concrete class that manages observers
export class GameObservable {
    constructor() {
        this._observers = [];
    }
    // Adds a new observer
    addObserver(observer) {
        this._observers.push(observer);
    }
    // Removes an observer
    removeObserver(observer) {
        const index = this._observers.indexOf(observer);
        if (index !== -1) {
            this._observers.splice(index, 1);
        }
    }
    // Notifies all observers with the current game state and optionally the speed
    notifyObservers(state, speed) {
        this._observers.forEach(observer => observer.update(state, speed));
    }
}
