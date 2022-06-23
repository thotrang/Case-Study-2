import {IManagement} from "../IManagement";
import {Account} from "../../model/Account";

export interface IAccountManagement extends IManagement<Account> {
    findByAccountName(name: string): Account|null;
    checkIndexByName(name: string):number;

}