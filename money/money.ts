import { Expression } from "./expression";

type Currency = "USD" | "CHF";

export class Money {
  protected amount: number;
  protected _currency: Currency;

  constructor(amount: number, currency: Currency) {
    this.amount = amount;
    this._currency = currency;
  }

  currency() {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(added: Money): Expression {
    return new Money(this.amount + added.amount, this._currency);
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
