import { Bank } from "./bank";
import { Currency, Money } from "./money";

export interface Expression {
  times(multiplier: number): Expression;
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: Currency): Money;
}
