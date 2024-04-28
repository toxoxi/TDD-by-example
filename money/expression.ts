import { Bank } from "./bank";
import { Currency, Money } from "./money";

export interface Expression {
  reduce(bank: Bank, to: Currency): Money;
}
