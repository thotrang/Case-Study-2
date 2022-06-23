export interface IManagement<T>{
    getAll(): T[];

    createNew(t: T): void;

    updateByName(name:string, t: T): void;

    removeByName(name:string): void;

}