import { Expression } from "./expression";
import { Currency, Money } from "./money";

export class Bank {
  reduce(source: Expression, to: Currency) {
    return source.reduce(to);
  }
}
