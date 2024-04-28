import { Bank } from "./bank";
import { Expression } from "./expression";
import { Sum } from "./sum";

export type Currency = "USD" | "CHF";

export class Money implements Expression {
  #amount: number;
  #currency: Currency;

  constructor(amount: number, currency: Currency) {
    this.#amount = amount;
    this.#currency = currency;
  }

  amount() {
    return this.#amount;
  }

  currency() {
    return this.#currency;
  }

  times(multiplier: number): Money {
    return new Money(this.#amount * multiplier, this.#currency);
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: Currency) {
    const rate = bank.rate(this.#currency, to);
    return new Money(this.#amount / rate, to);
  }

  equals(money: Money): boolean {
    return (
      this.#amount === money.#amount && this.#currency === money.currency()
    );
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
