import { Expression } from "./expression";
import { Sum } from "./sum";

export type Currency = "USD" | "CHF";

export class Money implements Expression {
  protected amount: number;
  protected _currency: Currency;

  constructor(amount: number, currency: Currency) {
    this.amount = amount;
    this._currency = currency;
  }

  getAmount() {
    return this.amount;
  }

  currency() {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(to: Currency) {
    return this;
  }

  equals(money: Money): boolean {
    return this.amount === money.amount && this._currency === money.currency();
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
