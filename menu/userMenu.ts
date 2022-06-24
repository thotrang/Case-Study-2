import * as rl from 'readline-sync'
import { Machine } from '../model/Machine';
export class UserMenu {
    private _money: number = 0;
    private oder: string[] = [];
    constructor() {
    }
    get sum() {
        return this._money;
    }
    set sum(money) {
        this._money = money;
    }
    choiceMenu() {
        console.log('---Game Center---')
        console.log('1. kiểm tra thời gian sử dụng ')
        console.log('2. Gọi đồ')
        console.log('3. Thành tiền')
        console.log('0. Đăng xuất')
    }
    choiceOderMenu() {
        console.log('--Oder thêm đồ đi ae--');
        console.log('1. Bánh mì trứng (20000 đồng)');
        console.log('2. Phở bò (30000 đồng)');
        console.log('3. Mì tôm trứng lòng đào (50k), khuyến mãi thêm chai sting');
        console.log('4. Mực hấp xúc xích (100000k)');
        console.log('5. Coca Cola (15000k)');
        console.log('6. Sting nguyên chất (20000k)');
        console.log('0. Thoát ');

    }

    orderFoot() {
        let choice = '-1';
        do {
            this.choiceOderMenu();
            choice = rl.question(" chọn đồ đi ae ");
            switch (choice) {
                case '1':
                    this.sum += 20000;
                    this.oder.push('1 bánh mì trứng')
                    break;
                case '2':
                    this.sum += 30000;
                    this.oder.push('1 Phở bò')
                    break;
                case '3':
                    this.sum += 50000;
                    this.oder.push('1 Mì tôm trứng lòng đào')
                    break;
                case '4':
                    this.sum += 100000;
                    this.oder.push('1 Mực hấp xúc xích')
                    break;
                case '5':
                    this.sum += 15000;
                    this.oder.push('1 Coca Cola')
                    break;
                case '6':
                    this.sum += 20000;
                    this.oder.push('1 Sting nguyên chất')
                    break;
            }
        } while (choice != '0');
    }
    pay(useMachine:Machine) :number{
        useMachine.end();
        let sum = this.sum + useMachine.getTime()*166.66;
        useMachine.payMoney=sum;
        return sum;
    }
    run(useMachine:Machine) {
        let choice = '-1';
        do {
            this.choiceMenu();
            choice = rl.question("Nhập lựa chọn đi gammer ");
            switch(choice){
                case '1':
                    useMachine.end();
                    console.log(useMachine.getTime());
                    break;
                case '2':
                    this.orderFoot();
                    break;
                case '3':
                    for(let i=0;i<this.oder.length;i++){
                        console.log(this.oder[i]+'\n');   
                    }
                    console.log(this.pay(useMachine));
                    break;
            }

        }while(choice!='0');  
        
    }
}