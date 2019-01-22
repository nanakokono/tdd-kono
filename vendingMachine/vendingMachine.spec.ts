// 飲み物自動販売機
// - done:飲み物を選んで購入できる
// - done:お金を入れると、入金額が見られる
// - お金が足りないときは、購入できない
// - done:連続で入れると、入金額が加算される
// - done:飲み物の在庫を追加できる
// - done:飲み物の在庫を確認できる
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

import { VendingMachine, Stock } from "./vendingMachine";


describe('飲み物自動販売機', () => {
  describe('飲み物自動販売機が', () => {
    const stock = new Stock();
    const vendingMachine = new VendingMachine(stock);

    it('存在する', () => {
      expect(vendingMachine).toBeDefined();
    });
  });

  describe('飲み物自動販売機の', () => {
    const stock = new Stock();
    const vendingMachine = new VendingMachine(stock);

    it('飲み物一覧にコーラが存在すること', () => {
      expect(stock.drinks.some(drink => drink.name === 'コーラ')).toBeTruthy();
    });

    it('コーラの値段が100円であること', () => {
      expect(stock.drinks.filter(drink => drink.name === 'コーラ')[0].price)
        .toBe(100)
    });
  });

  describe('飲み物自動販売機に100円を入れると', () => {
    it('入金額として100円が表示されること', () => {
      const stock = new Stock();
      const vendingMachine = new VendingMachine(stock);
      vendingMachine.putInMoney(100);
      expect(vendingMachine.amount).toBe(100);
    });

    it('連続で入れると、入金額が加算されること', () => {
      const stock = new Stock();
      const vendingMachine = new VendingMachine(stock);
      vendingMachine.putInMoney(100);
      vendingMachine.putInMoney(100);
      expect(vendingMachine.amount).toBe(200);
    });
  });

  describe('飲み物自動販売機に1円を入れると', () => {
    it('1円が返却されること', () => {
      const stock = new Stock();
      const vendingMachine = new VendingMachine(stock);
      vendingMachine.putInMoney(1);
      expect(vendingMachine.changesAmount).toBe(1);
    });
  });

  describe('飲み物自動販売機でコーラを選ぶと', () => {
    const stock = new Stock();
    const vendingMachine = new VendingMachine(stock);
    it('コーラが購入できること',() => {
      expect(vendingMachine.buyDrink('コーラ')).toBe('コーラ')
    });
  });

  describe('飲み物自動販売機のコーラの在庫を追加する時', () => {
    it('はじめはコーラの在庫が０個であること', () => {
      const stock = new Stock();
      const vendingMachine = new VendingMachine(stock);
      // testにif書いているようなものなのでやめる
      expect(stock.getStockDrinkByName('コーラ')).toBeTruthy()
    });

    it('コーラを１つ追加すると、在庫を１個であること', () => {
      const stock = new Stock();
      const vendingMachine = new VendingMachine(stock);
      vendingMachine.addDrink('コーラ', 1);
      const cola = stock.drinks.filter(drink => {
        return drink.name === 'コーラ';
      })[0];
      expect(cola.stockNumber).toBe(1)
    });
  })
});