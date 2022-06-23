import { listenerCount } from "process";
import { Account } from "../../model/Account";
import { IAccountManagement } from "./IAccountManagement";

export class AccountManagement implements IAccountManagement {
    private static listAccount: Account[] = [];
    private static id: number = 1;
    createNew(t: Account): void {
        AccountManagement.id++;
        t.id = AccountManagement.id;
        AccountManagement.listAccount.push(t);

    }

    getAll(): Account[] {
        return AccountManagement.listAccount;
    }

    checkIndexByName(name: string): number {
        let index = -1;
        for (let i = 0; i < AccountManagement.listAccount.length; i++) {
            if (name == AccountManagement.listAccount[i].accountName) {
                index = i;
            }
        }
        return index;
    }
    findByAccountName(name: string): Account | null {
        let index = this.checkIndexByName(name);
        if (index >= 0) {
            return AccountManagement.listAccount[index];
        } else {
            return null;
        }

    }

    findByEmail(email: string): Account | null {
        for (let account of AccountManagement.listAccount) {
            if (email == account.email) {
                return account;
            }
        }
        return null;
    }
    findByPhoneNumber(number:string):Account|null{
        for (let account of AccountManagement.listAccount) {
            if (number == account.phoneNumber) {
                return account;
            }
        }
        return null;
    }
    removeByName(name: string): void {
        let index = this.checkIndexByName(name);
        if (index >= 0) {
            AccountManagement.listAccount.splice(index, 1);
        }
    }

    updateByName(name: string, t: Account): void {
        let index = this.checkIndexByName(name);
        if (index >= 0) {
            AccountManagement.listAccount[index] = t;
        } else {
            console.log('không có thông tin tài khoản ');
        }
    }

    login(accountName:string, password:string):Account|null {
        for (let account of AccountManagement.listAccount) {
            if (accountName == account.accountName && password == account.password) {
                return account;
            }
        }
        return null;
    }
}
