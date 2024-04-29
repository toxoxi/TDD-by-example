import { Bank } from "./bank";
import { Expression } from "./expression";
import { Currency, Money } from "./money";

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  plus(addend: Expression): Expression {
    return this;
  }

  reduce(bank: Bank, to: Currency) {
    const amount =
      this.augend.reduce(bank, to).amount() +
      this.addend.reduce(bank, to).amount();
    return new Money(amount, to);
  }
}
