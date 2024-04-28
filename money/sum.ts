import { Expression } from "./expression";
import { Currency, Money } from "./money";

export class Sum implements Expression {
  augend: Money;
  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to: Currency) {
    const amount = this.augend.getAmount() + this.addend.getAmount();
    return new Money(amount, to);
  }
}
