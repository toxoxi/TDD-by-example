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
 * [ ] times の一般化
 * [x] Franc と Dollar を比較する
 * [ ] 通貨の概念
 */

import { describe, expect, test } from "@jest/globals";
import Dollar from "./dollar";
import Franc from "./franc";

describe("Money", () => {
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

  describe("Franc class", () => {
    test("multiplication", () => {
      const five = new Franc(5);
      expect(five.times(2).equals(new Franc(10))).toBe(true);
      expect(five.times(3).equals(new Franc(15))).toBe(true);
    });

    test("equality", () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
    });
  });

  describe("Cross-currency", () => {
    test("equality", () => {
      expect(new Dollar(10).equals(new Franc(10))).toBe(false);
    });
  });
});
