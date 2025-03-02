import { IObserver } from "./IObserver";

// Observable interface defines the methods for adding, removing and notifying observers
export interface IObservable
{
    addObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(state: string, speed?: number): void;
}
