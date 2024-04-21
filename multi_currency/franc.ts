export default class Franc {
  #amount: number;

  constructor(amount: number) {
    this.#amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.#amount * multiplier);
  }

  equals(obj: Franc) {
    return this.#amount === obj.#amount;
  }
}
