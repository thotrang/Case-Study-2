import * as rl from 'readline-sync'
import { Machine } from '../model/Machine';
import { MachineManagement } from '../management/managementMachine/MachineManagement';
import { UserMenu } from './userMenu';
import { IMachineManagement } from '../management/managementMachine/IMachineManagement';

export class MachineMenu {
    private listMachine: IMachineManagement = new MachineManagement();
    private accountUse = new UserMenu();
    static sum =0;
    menuViewMachine() {
        console.log("-- Quản lí máy tính --");
        console.log('1. Thêm máy tính ');
        console.log('2. Xóa máy tính ');
        console.log('3. Tìm kiếm máy tính');
        console.log('4. Xem thông tin tất cả máy tính ');
        console.log('0. Thoát');
    }
    menuEditMachine() {
        console.log('1. Bật tắt máy ');
        console.log('2. Sửa thông tin máy tính');
        console.log('3. Tính tiền ');
        console.log('0. Thoát');
    }
    createNewMachine() {
        let name = '';
        let isValidNameMachine = true;
        do {
            name = rl.question('Nhập tên máy ');
            let current = this.listMachine.findByName(name);
            if (current) {
                isValidNameMachine = false;
                console.log('Tên máy đã tồn tại ');
            } else {
                isValidNameMachine = true;
            }
        } while (!isValidNameMachine);
        return new Machine(name);
    }
    removeMachine() {
        let name = rl.question('Nhập tên máy ');
        this.listMachine.removeByName(name);
    }

    showAllMachine() {
        let machines = this.listMachine.getAll();
        for (let i = 0; i < machines.length; i++) {
            console.log(`name: ${machines[i].name} , id: ${machines[i].id} , status: ${machines[i].status == 0 ? 'Tắt' : 'Bật'}`);
        }
    }

    updateMachine(name: string) {
        let newId = +rl.question('Nhập id mới ');

        let newUpdate = this.createNewMachine()
        newUpdate.id = newId;
        this.listMachine.updateByName(name, newUpdate);
    }

    OpenMachine(machine: Machine) {
        if (machine.status == 0) {
            machine.status = 1;

        } else {
            if (machine) {
                machine.status = 0;
            }
        }
    }
    editMachine() {
        let name = rl.question('Nhập tên máy ');
        let machine = this.listMachine.findByName(name);
        if (machine == null) {
            console.log("Máy tính không tồn tại ");
        } else {
            console.log(`name: ${machine.name} , id: ${machine.id} , status: ${machine.status == 0 ? 'Tắt' : 'Bật'} , tài khoản sử dụng: ${machine.accountLogin?.accountName}`);
            if (machine.accountLogin?.role == 1) {
                let choice = '-1';
                do {
                    this.menuEditMachine();
                    choice = rl.question('Nhập lựa chọn ');
                    switch (choice) {
                        case '1':
                            this.OpenMachine(machine);
                            break;
                        case '2':
                            this.updateMachine(name);
                            break;
                        case '3':
                            MachineMenu.sum+=machine.payMoney;
                            console.log(machine.payMoney);
                            machine.payMoney=0;
                            machine.accountLogin=null;
                            machine.status=0;
                            break;

                    }
                } while (choice != '0');

            } else {
                console.log('Admin');
            }
        }
    }
    run() {
        let choice = '-1';
        do {
            this.menuViewMachine();
            choice = rl.question('Nhập lựa chọn ');

            switch (choice) {
                case '1':
                    let machine = this.createNewMachine();
                    this.listMachine.createNew(machine);
                    break;
                case '2':
                    this.removeMachine();
                    break;

                case '3': {
                    this.editMachine();
                    break;
                }
                case '4':
                    this.showAllMachine();
                    break;

            }

        } while (choice != '0');
    }
}