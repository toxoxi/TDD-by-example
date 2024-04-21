import Dollar from "./dollar";
import Franc from "./franc";

export default abstract class Money {
  protected amount: number;
  abstract times(multiplier: number): Money;

  equals(money: Money) {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}
