interface IDrink {
  name: string;
  price: number;
  stockNumber: number
}

export class VendingMachine {
  drinks: IDrink[] = [
    {
      name: 'コーラ',
      price: 100,
      stockNumber: 0
    }
  ];
  amount = 0;
  changesAmount: number = 1;

  putInMoney(amount: number) {
    this.amount += amount;
    return amount;
  }

  buyDrink(selectedDrink: string) {
  //  amountが飲み物の値段より高いか
  //   コーラの在庫があるか
    return this.drinks.filter(drink => {
      return drink.name === selectedDrink
    })[0].name;
  }

  addDrink(selectedDrink: string, addStockNumber: number) {
    this.drinks.filter(drink => {
      return drink.name === selectedDrink
    })[0].stockNumber += addStockNumber;
  }
}