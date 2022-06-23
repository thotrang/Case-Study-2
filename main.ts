import * as rl from 'readline-sync'
import { AccountManagement } from './management/managementAccount/accountManagement';
import { Account } from './model/Account';
function menuAccount() {
    console.log('----Account User----');
    console.log('1. Đăng kí tài khoản ');
    console.log('2. Đăng nhập tài khoản ');
    console.log('3. Chỉnh sửa tài khoản ');
    console.log('4. Xóa tài khoản ');
    console.log('5. Xem tất cả tài khoản ');
    console.log('0. Thoát !!! ');
}
let choice = '-1';
let listAccount = new AccountManagement();
function inputAccountName(): string {
    let name = '';
    let isValidAccountName = true;
    do {
        name = rl.question('Nhập tên tài khoản ');
        let current = listAccount.findByAccountName(name);
        if (current) {
            isValidAccountName = false;
            console.log('Tên tài khoản đã tồn tại');
        } else {
            isValidAccountName = true;
        }

    } while (!isValidAccountName);
    return name;
}

function inputPassword(): string {
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

function inputEmail(): string {
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
            let current = listAccount.findByEmail(email);
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

function inputPhoneNumber(): string {
    let phoneNumber = '';
    let isValidAccountName = true;
    do {
        phoneNumber = rl.question('Nhập số điện thoại ');
        let current = listAccount.findByAccountName(phoneNumber);
        if (current) {
            isValidAccountName = false;
            console.log('Tên tài khoản đã tồn tại');
        } else {
            isValidAccountName = true;
        }

    } while (!isValidAccountName);
    return phoneNumber;


}
function registerAccount(): Account {
    let username = rl.question("Nhập tên người dùng ");
    let accountName = inputAccountName();
    let password = inputPassword();
    let email = inputEmail();
    let phoneNumber = inputPhoneNumber();
    let age = +rl.question(' Nhập tuổi ');

    return new Account(username, accountName, password, email, phoneNumber, age);
}
function logInAccount() {
    let accountName = rl.question('Nhập tài khoản:');
    let password = rl.question('Nhập mật khẩu:');

    let current = listAccount.login(accountName, password);
        if (current) {
            console.log('Đăng nhập thành công!');
            //Check role => admin thì mở menu admin, user mở menu user
            if (current.role == 0) {
                //mở menu admin

            } else {
                //mở menu user
                console.log('---Game Center---')
                console.log('1. ')
                console.log('2. Gọi đồ')
                console.log('3. Thanh toán')
                console.log('0. Đăng xuất')
            }
        } else {
            console.log('Tài khoản hoặc mật khẩu không đúng!');
        }
}
do {
    menuAccount();
    choice = rl.question('Nhập lựa chọn của bạn ');
    switch (choice) {
        case '1':
            let newAccount = registerAccount();
            listAccount.createNew(newAccount);
            break;
        case '2':
            logInAccount();
            break;
    }
} while (choice !== '0');
