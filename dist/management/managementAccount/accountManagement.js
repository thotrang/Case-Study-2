"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManagement = void 0;
class AccountManagement {
    createNew(t) {
        AccountManagement.id++;
        t.id = AccountManagement.id;
        AccountManagement.listAccount.push(t);
    }
    getAll() {
        return AccountManagement.listAccount;
    }
    findByName(name) {
        let index = -1;
        for (let i = 0; i < AccountManagement.listAccount.length; i++) {
            if (name == AccountManagement.listAccount[i].accountName) {
                index = i;
            }
        }
        return index;
    }
    removeByName(name) {
        let index = this.findByName(name);
        if (index >= 0) {
            AccountManagement.listAccount.splice(index, 1);
        }
    }
    updateByName(name, t) {
        let index = this.findByName(name);
        if (index >= 0) {
            AccountManagement.listAccount[index] = t;
        }
        else {
            console.log('không có thông tin tài khoản ');
        }
    }
}
exports.AccountManagement = AccountManagement;
AccountManagement.listAccount = [];
AccountManagement.id = 1;
