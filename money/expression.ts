import { Currency, Money } from "./money";

export interface Expression {
  reduce(to: Currency): Money;
}
