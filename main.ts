import { AccountManagement } from "./management/managementAccount/accountManagement";
import { MachineManagement } from "./management/managementMachine/MachineManagement";
import { LoginMenu } from "./menu/loginMenu";
import { Account } from "./model/Account";

let loginAccount=new LoginMenu();
let listAccount=new AccountManagement();
let ADMIN=new Account('ADMIN','admin','Admin2312@','0123456','admin@gmail.com',22);
ADMIN.role=0;
listAccount.createNew(ADMIN);
let listMachine=new MachineManagement();
listMachine.Machines();
loginAccount.run();

