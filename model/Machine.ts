import { Account } from "./Account";

export enum Status {
    Disable = 0,
    Available = 1
}
export class Machine {
    private _name: string;
    private _id: number;
    private _status: Status = Status.Disable;
    private _accountLogin: Account|null=null;

    constructor(name: string) {
        this._name = name;
        this._id = 1;
    }
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
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

    get accountLogin(): Account | null {
        return this._accountLogin;
    }

    set accountLogin(value: Account | null) {
        this._accountLogin = value;
    }
}
