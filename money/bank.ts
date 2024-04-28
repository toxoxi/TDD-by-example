import { Expression } from "./expression";
import { Currency, Money } from "./money";
import { RatesMap } from "./ratesMap";

export class Bank {
  #rates = new RatesMap();

  reduce(source: Expression, to: Currency) {
    return source.reduce(this, to);
  }

  addRate(from: Currency, to: Currency, rate: number) {
    this.#rates.set({ from, to }, rate);
  }

  rate(from: Currency, to: Currency): number {
    return this.#rates.get({ from, to });
  }
}
