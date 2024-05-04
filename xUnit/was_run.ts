import { TestCase } from "./test_case";

export class WasRun extends TestCase {
  log: string = "";

  setUp = () => {
    this.log = "setUp ";
  };

  testMethod = () => {
    this.log = this.log + "testMethod ";
  };

  tearDown = () => {
    this.log = this.log + "tearDown ";
  };
}
