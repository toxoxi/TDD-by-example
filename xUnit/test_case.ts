export class TestCase {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  setUp() {}

  run() {
    this.setUp();
    const method: Function = (this as any)[this.name];
    method();
  }
}
