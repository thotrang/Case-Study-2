export enum Status{
    Disable = 0,
    Available = 1
}
export class Machine{
    private _name:string;
    private _status:Status=Status.Disable;


    constructor(name: string, status: Status) {
        this._name = name;
        this._status = status;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get status(): Status {
        return this._status;
    }

    set status(value: Status) {
        this._status = value;
    }
    toSing(){

    }
}
