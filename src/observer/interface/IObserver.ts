// The Observer interface that defines the contract for all observers
export interface IObserver
{
    update(state: string, speed?: number): void;
}
