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
    private _startTime: number = 0;
    private _endTime: number = 0;
    private _money:number;

    constructor(name: string) {
        this._startTime = new Date().getMinutes();
        this._name = name;
        this._id = 1;
        this._money=0;
    }
    start() {
        this._startTime = new Date().getMinutes();
    }
    end() {
        this._endTime = new Date().getMinutes();
    }
    getTime() {
        return this._endTime - this._startTime;
    }
    get payMoney(){
        return this._money;
    }
    set payMoney(value:number){
        this._money=value;
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
