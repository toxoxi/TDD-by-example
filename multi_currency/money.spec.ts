/**
 * TODOリスト
 * [ ] $5 + 10 CHF = $10 (レートが 2:1 の場合)
 * [x] $5 * 2 = $10
 * [x] amount を private にする
 * [x] Dollar の副作用どうする？
 * [ ] Money の丸め処理どうする？
 * [x] equals()
 * [ ] hashCode()
 * [ ] null の等価性比較
 * [ ] 他のオブジェクトとの等価性比較
 * [x] 5CHF * 2 = 10CHF
 * [ ] Dollar と Franc の重複
 * [x] equals の一般化
 * [x] times の一般化
 * [x] Franc と Dollar を比較する
 * [x] 通貨の概念
 * [ ] testFrancMultiplication を削除する？
 */

import { describe, expect, test } from "@jest/globals";
import Money from "./money";

describe("Money", () => {
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
});
