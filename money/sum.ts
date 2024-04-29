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

  times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: Currency) {
    const amount =
      this.augend.reduce(bank, to).amount() +
      this.addend.reduce(bank, to).amount();
    return new Money(amount, to);
  }
}
