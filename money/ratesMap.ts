import { Currency } from "./money";

type RateKeys = { from: Currency; to: Currency };

export class RatesMap {
  #map = new Map();

  set(rateKeys: RateKeys, rate: number): void {
    const key = this.keysToString(rateKeys);
    this.#map.set(key, rate);
  }

  get(rateKeys: RateKeys): number {
    if (rateKeys.from === rateKeys.to) {
      return 1;
    }

    const key = this.keysToString(rateKeys);
    return this.#map.get(key);
  }

  private keysToString(rateKeys: RateKeys): string {
    return `${rateKeys.from}_${rateKeys.to}`;
  }
}
