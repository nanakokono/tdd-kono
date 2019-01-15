// 飲み物自動販売機
// - done:飲み物を選んで購入できる
// - done:お金を入れると、入金額が見られる
// - お金が足りないときは、購入できない
// - done:連続で入れると、入金額が加算される
// - 飲み物の在庫を追加できる
// - 飲み物の在庫を確認できる
// - 使えないお金がある(1,5,2000,5000,10000)

// given: 自動販売機の一覧にコーラがある
// コーラの値段(100円)が決まっている
// コーラの在庫がある
// when: 100円をいれる
// コーラを選択する
// then: コーラがでてくる

// [{名前： xx
// 値段: xx}
// , ...]

import {VendingMachine} from "./vendingMachine";

fdescribe('飲み物自動販売機', () => {
  describe('コーラを購入する', () => {
    const vendingMachine = new VendingMachine();

    it('自動販売機が存在する', () => {
      expect(vendingMachine).toBeDefined();
    });

    it('飲み物一覧にコーラが存在すること', () => {
      expect(vendingMachine.drinks.some(drink => drink.name === 'コーラ')).toBeTruthy();
    });

    it('コーラの値段が100円であること', () => {
      expect(vendingMachine.drinks.filter(drink => drink.name === 'コーラ')[0].price)
        .toBe(100)
    });

    // it('コーラの在庫が１つ以上あること', () => {
    //   expect(vendingMachine.drinks.filter(
    //     drink => drink.name === 'コーラ')[0].stockNumber > 0
    //   ).toBeTruthy()
    // });

    it('100円を入れると入金額として100円が表示されること', () => {
      expect(vendingMachine.putInMoney(100)).toBe(100);
    });

    it('連続で入れると、入金額が加算されること', () => {
    const vendingMachine2 = new VendingMachine();

    vendingMachine2.putInMoney(100);
    vendingMachine2.putInMoney(100);
    expect(vendingMachine2.amount).toBe(200);
    });

    it('コーラを選ぶとコーラが購入できること',() => {
      expect(vendingMachine.buyDrink('コーラ')).toBe('コーラ')
    });

    it('飲み物の在庫を追加できること', () => {
      const vendingMachine3 = new VendingMachine();
      vendingMachine3.addDrink('コーラ', 1);
      const cola = vendingMachine3.drinks.filter(drink => {
        return drink.name === 'コーラ';
      })[0];
      expect(cola.stockNumber).toBe(1)
    })
  })
});