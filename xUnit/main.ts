/**
 * TODOリスト:
 * [x] テストメソッドを呼び出す
 * [ ] setUp を最初に呼び出す
 * [ ] tearDown を後で呼び出す
 * [ ] テストメソッドが失敗したとしても tearDown を呼び出す
 * [ ] 複数のテストを走らせる
 * [ ] 収集したテスト結果を出力する
 *
 * [ ] 存在しないメソッド名の testcase を作れないようにする
 */

import assert from "node:assert";
import { WasRun } from "./was_run";
import { TestCase } from "./test_case";

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun("testMethod");
    console.log(test.wasRun);
    assert(test.wasRun === false);
    test.run();
    console.log(test.wasRun);
    assert(test.wasRun);
  }
}

new TestCaseTest("testRunning").run();
