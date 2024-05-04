/**
 * TODOリスト:
 * [x] テストメソッドを呼び出す
 * [x] setUp を最初に呼び出す
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
  private test: WasRun | null;

  constructor(name: string) {
    super(name);
    this.test = null;
  }

  setUp() {
    this.test = new WasRun("testMethod");
  }

  testRunning = () => {
    this.test!.run();
    assert(this.test!.wasRun);
  };

  testSetup = () => {
    this.test!.run();
    assert(this.test!.wasSetup);
  };
}

new TestCaseTest("testRunning").run();
new TestCaseTest("testSetup").run();
