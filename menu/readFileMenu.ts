const fs = require("fs");
import { AccountManagement } from "../management/managementAccount/accountManagement";
import { Account } from "../model/Account";

export class ReadFile {
    private arrAccount: any[] = [];
    // private listAccount = new AccountManagement();


    writeToFile(account: Account): void {
        const data = fs.readFileSync('database/readFile.json', { encoding: 'utf8', flag: 'r' });
        this.arrAccount = JSON.parse(data);
        let id = this.arrAccount[this.arrAccount.length - 1]._id + 1;
        account.id = id;
        this.arrAccount.push(account);
        let data1 = JSON.stringify(this.arrAccount);

        fs.writeFileSync("database/readFile.json", data1);
    }

    readToFile(): any {
        let data = fs.readFileSync('database/readFile.json', { encoding: 'utf8', flag: 'r' });
        let arrData: any[] = JSON.parse(data);
        let accounts:Account[]=[];
        for(let i=0)
        return accounts
    }

}