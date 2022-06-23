import { AccountManagement } from "./management/managementAccount/accountManagement";
import { LoginMenu } from "./menu/loginMenu";
import { Account } from "./model/Account";

let loginAccount=new LoginMenu();
let listAccount=new AccountManagement();
let ADMIN=new Account('ADMIN','admin','admin2312@','0123456','admin@gmail.com',22);
ADMIN.role=0;
listAccount.createNew(ADMIN);
loginAccount.run();
console.log(listAccount.getAll());
