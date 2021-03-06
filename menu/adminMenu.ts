import * as rl from 'readline-sync'
import { AccountManagement } from '../management/managementAccount/accountManagement';
import { MachineMenu } from './machineMenu';
export class AdminMenu {
    private listAccount = new AccountManagement();
    private machineMenu=new MachineMenu();
    menuViewAccount() {
        console.log('-- Quản lí tài khoản người chơi --');
        console.log('1. Xem thông tin tất cả tài khoản ');
        console.log('2. Xóa tài khoản ');
        console.log('3. Chuyển đổi tài khoản thành admin ');
        console.log('0. Thoát');
    }
    viewAccount() {
        let choice = '-1';
        do {
            this.menuViewAccount();
            choice = rl.question("Nhập lựa chọn của bạn ");
            switch (choice) {
                case '1':
                    console.log(this.listAccount.getAll());
                    break;
                case '2': {
                    let name = rl.question('Nhập tên tài khoản bạn muốn xóa ');
                    this.listAccount.removeByName(name);
                    break;
                }
                case '3': {
                    let name = rl.question('Nhập tài tên tài khoản bạn muốn chuyển ');
                    let index = this.listAccount.checkIndexByName(name);
                    if (index == -1) {
                        console.log('Tài khoản không tồn tại ');
                    } else {
                        this.listAccount.getAll()[index].role = 0;
                    }
                    break;
                }
            }
        } while (choice != '0');
    }

    viewMachine() {
       this.machineMenu.run()
    }
    run() {
        let choice = '-1';
        do {
            console.log('Lựa chọn quản lí ');
            console.log('1. Quản lí tài khoản người dùng');
            console.log('2. Quản lí máy tính ');
            console.log('3. doanh thu ');
            console.log('0. Đăng xuất ');


            choice = rl.question('Nhập lựa chọn ');
            switch (choice) {
                case '1':
                    this.viewAccount()
                    break;
                case '2':
                    this.viewMachine();
                    break;
                case '3':
                    {
                        let choice='-1';
                        do{
                            console.log('1. doanh thu 1 tháng');
                            console.log('2. doanh thu 1 năm ');
                            console.log('3. doanh thu hôm nay');
                            console.log('0. Thoát ');
                            
                            choice=rl.question('lựa chọn của bạn')   

                        }while(choice!='0');
                    }
                    break;
            }

        } while (choice != '0')
    }
}
