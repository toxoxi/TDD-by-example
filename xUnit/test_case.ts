export class TestCase {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run() {
    const method: Function = (this as any)[this.name];
    method();
  }
}
