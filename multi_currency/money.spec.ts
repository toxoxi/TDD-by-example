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
 */

import { describe, expect, test } from "@jest/globals";
import Dollar from "./dollar";

describe("Dollar class", () => {
  test("multiplication", () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);
    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  test("equality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
