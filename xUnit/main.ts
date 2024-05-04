/**
 * TODOリスト:
 * [x] テストメソッドを呼び出す
 * [x] setUp を最初に呼び出す
 * [ ] tearDown を後で呼び出す
 * [ ] テストメソッドが失敗したとしても tearDown を呼び出す
 * [ ] 複数のテストを走らせる
 * [ ] 収集したテスト結果を出力する
 * [x] WasRun で文字列をログに記録する
 * [ ] 収集したテスト結果を出力する
 *
 * [ ] 存在しないメソッド名の testcase を作れないようにする
 */

import assert from "node:assert";
import { WasRun } from "./was_run";
import { TestCase } from "./test_case";

class TestCaseTest extends TestCase {
  testTemplateMethod() {
    const test = new WasRun("testMethod");
    test.run();
    assert("setUp testMethod tearDown " === test.log);
  }
}

new TestCaseTest("testTemplateMethod").run();
console.log("✅ tests passed!");
