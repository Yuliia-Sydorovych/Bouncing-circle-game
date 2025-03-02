import { IObservable } from "./interface/IObservable";
import { IObserver } from "./interface/IObserver";

// GameObservable is the concrete class that manages observers
export class GameObservable implements IObservable
{
    protected _observers: IObserver[] = [];

    // Adds a new observer
    public addObserver(observer: IObserver): void
    {
        this._observers.push(observer);
    }

    // Removes an observer
    public removeObserver(observer: IObserver): void
    {
        const index = this._observers.indexOf(observer);
        if (index !== -1)
        {
            this._observers.splice(index, 1);
        }
    }

    // Notifies all observers with the current game state and optionally the speed
    public notifyObservers(state: string, speed?: number): void
    {
        this._observers.forEach(observer => observer.update(state, speed));
    }
}
