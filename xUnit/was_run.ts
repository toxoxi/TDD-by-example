import { TestCase } from "./test_case";

export class WasRun extends TestCase {
  wasRun: boolean;

  constructor(name: string) {
    super(name);
    this.wasRun = false;
  }

  testMethod = () => {
    this.wasRun = true;
  };
}
