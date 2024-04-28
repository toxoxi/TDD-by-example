/**
 * TODOリスト
 * [ ] $5 + 10 CHF = $10 (レートが 2:1 の場合)
 * [ ] $5 + $5 = $10
 * [ ] $5 + $5 が Money を返す
 * [x] Bank.reduce(Money)
 * [ ] Money の丸め処理どうする？
 * [ ] hashCode()
 * [ ] null の等価性比較
 * [ ] 他のオブジェクトとの等価性比較
 */

import { describe, expect, test } from "@jest/globals";
import { Money } from "./money";
import { Bank } from "./bank";
import { Expression } from "./expression";
import { Sum } from "./sum";

describe("Money", () => {
  test("getAmount", () => {
    expect(Money.dollar(10).amount()).toBe(10);
  });

  test("currency", () => {
    expect(Money.dollar(1).currency()).toBe("USD");
    expect(Money.franc(1).currency()).toBe("CHF");
  });

  test("equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.dollar(10).equals(Money.franc(10))).toBe(false);
  });

  test("multiplication", () => {
    const five = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });

  test("addition", () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(reduced.equals(Money.dollar(10))).toBe(true);
  });

  test("plus returns sum", () => {
    const five = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum = result as Sum;
    expect(five).toBe(sum.augend);
    expect(five).toBe(sum.addend);
  });

  test("reduce sum", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result.equals(Money.dollar(7))).toBe(true);
  });

  test("reduce Money", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result.equals(Money.dollar(1)));
  });
});
