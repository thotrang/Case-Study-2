
import { Machine } from "../../model/Machine";
import { IMachineManagement } from "./IMachineManagement";


export class MachineManagement implements IMachineManagement {

    private static listMachine: Machine[] = [];
    Machines():Machine[]{
        for(let i=1;i<=20;i++){
            let machine=new Machine(`machine ${i}`,0);
            MachineManagement.listMachine.push(machine);
        }
        return MachineManagement.listMachine;
    }

    getAll(): Machine[] {
        return MachineManagement.listMachine;
    }
    checkIndexByName(name: string): number {
        let index = -1;
        for (let i = 0; i < MachineManagement.listMachine.length; i++) {
            if (name == MachineManagement.listMachine[i].name) {
                index = i;
            }
        }
        return index;
    }
    findByName(name: string): Machine | null{
        let index = this.checkIndexByName(name);
        if (index >= 0) {
            return MachineManagement.listMachine[index];
        } else {
            return null;
        }
    }

    createNew(t: Machine): void {
        MachineManagement.listMachine.push(t);
    }
    updateByName(name: string, t: Machine): void {
        let index = this.checkIndexByName(name);
        if (index >= 0) {
            MachineManagement.listMachine[index] = t;
        } else {
            console.log('không có thông tin máy ');
        }
    }
    removeByName(name: string): void {
        let index = this.checkIndexByName(name);
        if (index >= 0) {
            MachineManagement.listMachine.splice(index, 1);
        }
    }

}
