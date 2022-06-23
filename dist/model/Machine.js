"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Disable"] = 0] = "Disable";
    Status[Status["Available"] = 1] = "Available";
})(Status = exports.Status || (exports.Status = {}));
class Machine {
    constructor(name, status) {
        this._status = Status.Disable;
        this._name = name;
        this._status = status;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    toSing() {
    }
}
exports.Machine = Machine;
