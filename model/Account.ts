enum User{
    admin=0,
    user=1,
}
export class Account{

    private _username:string;
    private _password:string;
    private _phoneNumber:string;
    private _email:string;
    private _age:number;
    private _accountName:string;
    private _id:number=1;
    private _role:User=1;

    constructor(username: string, accountName: string, password: string, phoneNumber: string, email: string, age: number) {
        this._username = username;
        this._password = password;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._age = age;
        this._accountName = accountName;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get accountName(): string {
        return this._accountName;
    }

    set accountName(value: string) {
        this._accountName = value;
    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get role(): User {
        return this._role;
    }

    set role(value: User) {
        this._role = value;
    }
}
