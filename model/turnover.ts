export class Turnover{
    private _startTime: number = 0;
    private _endTime: number = 0;
    private static sumInDay:number=0;
    private static sumAll:number[]=[];
    constructor(){
        this._startTime = new Date().getHours();
    }
    start() {
        this._startTime = new Date().getHours();
    }
    end() {
        this._endTime = new Date().getHours();
    }
    getTime() {
        return this._endTime - this._startTime;
    }


}