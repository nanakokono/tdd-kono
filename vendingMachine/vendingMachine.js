"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.drinks = [
            {
                name: 'コーラ',
                price: 100,
                stockNumber: 0
            }
        ];
        this.amount = 0;
    }
    VendingMachine.prototype.putInMoney = function (amount) {
        this.amount += amount;
        return amount;
    };
    VendingMachine.prototype.buyDrink = function (selectedDrink) {
        //  amountが飲み物の値段より高いか
        //   コーラの在庫があるか
        return this.drinks.filter(function (drink) {
            return drink.name === selectedDrink;
        })[0].name;
    };
    VendingMachine.prototype.addDrink = function (selectedDrink, addStockNumber) {
        this.drinks.filter(function (drink) {
            return drink.name === selectedDrink;
        })[0].stockNumber += addStockNumber;
    };
    return VendingMachine;
}());
exports.VendingMachine = VendingMachine;
