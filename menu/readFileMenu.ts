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

    readToFile(): Account[] {
        let data = fs.readFileSync('database/readFile.json', { encoding: 'utf8', flag: 'r' });
        let arrData: any[] = JSON.parse(data);
        let accounts:Account[]=[];
        for(let i=0;i<arrData.length;i++){
            let id=arrData[i]._id;
            let name=arrData[i]._username;
            let password=arrData[i]._password;
            let phoneNumber=arrData[i]._phoneNumber;
            let email=arrData[i]._email;
            let age=arrData[i]._age;
            let accountName=arrData[i]._accountName;
            let account=new Account(name,accountName,password,phoneNumber,email,age);
            account.id=id;
            
            accounts.push(account);
        }
        return accounts
    }

}