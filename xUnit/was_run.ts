import { TestCase } from "./test_case";

export class WasRun extends TestCase {
  wasSetup: boolean = false;
  wasRun: boolean = false;

  setUp = () => {
    this.wasSetup = true;
  };

  testMethod = () => {
    this.wasRun = true;
  };
}
