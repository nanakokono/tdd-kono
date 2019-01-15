"use strict";
// 飲み物自動販売機
// - done:飲み物を選んで購入できる
// - done:お金を入れると、入金額が見られる
// - お金が足りないときは、購入できない
// - done:連続で入れると、入金額が加算される
// - 飲み物の在庫を追加できる
// - 飲み物の在庫を確認できる
// - 使えないお金がある(1,5,2000,5000,10000)
Object.defineProperty(exports, "__esModule", { value: true });
// given: 自動販売機の一覧にコーラがある
// コーラの値段(100円)が決まっている
// コーラの在庫がある
// when: 100円をいれる
// コーラを選択する
// then: コーラがでてくる
// [{名前： xx
// 値段: xx}
// , ...]
var vendingMachine_1 = require("./vendingMachine");
fdescribe('飲み物自動販売機', function () {
    describe('コーラを購入する', function () {
        var vendingMachine = new vendingMachine_1.VendingMachine();
        it('自動販売機が存在する', function () {
            expect(vendingMachine).toBeDefined();
        });
        it('飲み物一覧にコーラが存在すること', function () {
            expect(vendingMachine.drinks.some(function (drink) { return drink.name === 'コーラ'; })).toBeTruthy();
        });
        it('コーラの値段が100円であること', function () {
            expect(vendingMachine.drinks.filter(function (drink) { return drink.name === 'コーラ'; })[0].price)
                .toBe(100);
        });
        // it('コーラの在庫が１つ以上あること', () => {
        //   expect(vendingMachine.drinks.filter(
        //     drink => drink.name === 'コーラ')[0].stockNumber > 0
        //   ).toBeTruthy()
        // });
        it('100円を入れると入金額として100円が表示されること', function () {
            expect(vendingMachine.putInMoney(100)).toBe(100);
        });
        it('連続で入れると、入金額が加算されること', function () {
            var vendingMachine2 = new vendingMachine_1.VendingMachine();
            vendingMachine2.putInMoney(100);
            vendingMachine2.putInMoney(100);
            expect(vendingMachine2.amount).toBe(200);
        });
        it('コーラを選ぶとコーラが購入できること', function () {
            expect(vendingMachine.buyDrink('コーラ')).toBe('コーラ');
        });
        it('飲み物の在庫を追加できること', function () {
            var vendingMachine3 = new vendingMachine_1.VendingMachine();
            vendingMachine3.addDrink('コーラ', 1);
            var cola = vendingMachine3.drinks.filter(function (drink) {
                return drink.name === 'コーラ';
            })[0];
            expect(cola.stockNumber).toBe(1);
        });
    });
});
