interface IDrink {
  name: string;
  price: number;
  stockNumber: number
}

export class Stock {
  drinks: IDrink[] = [
    {
      name: 'コーラ',
      price: 100,
      stockNumber: 0
    }
  ];

  constructor() {}
  // constructor(public drinks: IDrink[]) {}

  getStockDrinkByName(drinkName: string): IDrink {
    return this.drinks.filter(drink => {
      return drink.name === drinkName;
    })[0];
  }

  addStock(selectedDrink: string, addStockNumber: number) {
    this.getStockDrinkByName(selectedDrink).stockNumber += addStockNumber;
  }

}


export class VendingMachine {
  amount = 0;
  changesAmount: number = 1;

  constructor(public stock: Stock) {}

  putInMoney(amount: number) {
    this.amount += amount;
    return amount;
  }

  buyDrink(selectedDrink: string): string {
    return this.stock.getStockDrinkByName(selectedDrink).name;
  }

  addDrink(selectedDrink: string, addStockNumber: number) {
    this.stock.addStock(selectedDrink, addStockNumber);
  }
}