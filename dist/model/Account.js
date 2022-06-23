"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var User;
(function (User) {
    User[User["admin"] = 0] = "admin";
    User[User["user"] = 1] = "user";
})(User || (User = {}));
class Account {
    constructor(username, password, phoneNumber, email, age, accountName) {
        this._id = 1;
        this.role = 0;
        this._username = username;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._age = age;
        this._accountName = accountName;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get accountName() {
        return this._accountName;
    }
    set accountName(value) {
        this._accountName = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    toString() { }
    ;
}
exports.Account = Account;
