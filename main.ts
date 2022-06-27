import { MachineManagement } from "./management/managementMachine/MachineManagement";
import { LoginMenu } from "./menu/loginMenu";

let listMachine=new MachineManagement();
let loginAccount=new LoginMenu();
listMachine.Machines();
loginAccount.run();
