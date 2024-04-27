export default abstract class Money {
  protected amount: number;

  abstract currency(): string;
  abstract times(multiplier: number): Money;

  equals(money: Money) {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  currency(): string {
    return "USD";
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  currency(): string {
    return "CHF";
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
