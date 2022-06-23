import { Machine } from "../../model/Machine";
import { IManagement } from "../IManagement";

export interface IMachineManagement extends IManagement<Machine>{
    findByName(name:string):Machine|null;
}