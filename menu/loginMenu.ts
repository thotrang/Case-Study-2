import * as rl from 'readline-sync'
import { AccountManagement } from '../management/managementAccount/accountManagement';
import { Account } from '../model/Account';
import { AdminMenu } from './adminMenu';
import { UserMenu } from './userMenu';


export class LoginMenu {
    private listAccount = new AccountManagement();
    private userMenu = new UserMenu();
    private adminMenu=new AdminMenu();
    menuAccount() {
        console.log('----Account User----');
        console.log('1. Đăng kí tài khoản ');
        console.log('2. Đăng nhập tài khoản ');
        console.log('0. Thoát !!! ');
    }

    inputAccountName(): string {
        let name = '';
        let isValidAccountName = true;
        do {
            name = rl.question('Nhập tên tài khoản ');
            let current = this.listAccount.findByAccountName(name);
            if (current) {
                isValidAccountName = false;
                console.log('Tên tài khoản đã tồn tại');
            } else {
                isValidAccountName = true;
            }

        } while (!isValidAccountName);
        return name;
    }

    inputPassword(): string {
        let password = '';
        let isValidPassword = true;
        let regexForPassword: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        do {
            password = rl.question('Nhập mật khẩu (Có 1 ký tự viết hoa, 1 viết thường, 1 ký tự đặc biệt và 1 số):');
            if (!regexForPassword.test(password)) {
                isValidPassword = false;
                console.log('Password nhập vào phải có ít nhất 1 ký tự thường 1 hoa 1 đặc biệt 1 số!')
            } else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }

    inputEmail(): string {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question('Nhập email (abc@gmail.com):');
            let regexForEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexForEmail.test(email)) {
                isValidEmail = false;
                console.log('Định dạng email không hợp lệ!')
            } else {
                isValidEmail = true;
                let current = this.listAccount.findByEmail(email);
                if (current) {
                    console.log('Email đã tồn tại');
                    isValidEmail = false;
                } else {
                    isValidEmail = true;
                }
            }

        } while (!isValidEmail);
        return email;
    }

    inputPhoneNumber(): string {
        let phoneNumber = '';
        let isValidPhoneNumber = true;
        do {
            phoneNumber = rl.question('Nhập số điện thoại ');
            let current = this.listAccount.findByAccountName(phoneNumber);
            if (current) {
                isValidPhoneNumber = false;
                console.log('Tên tài khoản đã tồn tại');
            } else {
                isValidPhoneNumber = true;
            }

        } while (!isValidPhoneNumber);
        return phoneNumber;


    }
    inputAge() {
        let age = +rl.question('Nhập tuổi ');
        return age;
    }
    registerAccount(): Account | null {
        let username = rl.question("Nhập tên người dùng ");
        let accountName = this.inputAccountName();
        let password = this.inputPassword();
        let email = this.inputEmail();
        let phoneNumber = this.inputPhoneNumber();
        let age = this.inputAge();
        if (age < 18) {
            console.log("Không đủ tuổi. Vui lòng chờ đến tuổi để tạo tài khoản ");
            return null;
        }
        return new Account(username, accountName, password, email, phoneNumber, age);
    }
    logInAccount() {
        let accountName = rl.question('Nhập tài khoản:');
        let password = rl.question('Nhập mật khẩu:');
        let current = this.listAccount.login(accountName, password);
        if (current) {
            console.log('Đăng nhập thành công!');
            //Check role => admin thì mở menu admin, user mở menu user
            if (current.role == 0) {
                this.adminMenu.run();

            } else {
                this.userMenu.start();
                this.userMenu.run();

            }
        } else {
            console.log('Tài khoản hoặc mật khẩu không đúng!');
        }
    }
    run() {
        let choice = '-1';
        do {
            this.menuAccount();
            choice = rl.question('Nhập lựa chọn của bạn ');
            switch (choice) {
                case '1':
                    console.log("-- Đăng kí tài khoản --");
                    let newAccount = this.registerAccount();
                    if (newAccount == null) {
                        console.log('Đăng kí không thành công ');
                        break;
                    } else {
                        this.listAccount.createNew(newAccount);
                        console.log("-- Đăng kí thành công --");
                        break;
                    }
                case '2':
                    console.log("-- Đăng nhập --");
                    this.logInAccount();
                    break;
            }
        } while (choice !== '0');
    }

}