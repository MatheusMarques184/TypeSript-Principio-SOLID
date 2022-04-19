import { Item } from './interface/cartItem';

export class ShoppingCart {
  private readonly _items: Item[] = [];

  addItem(item: Item): void {
    this._items.push(item);
  }

  removeItem(item: Item): void {
    this._items.splice(this._items.indexOf(item), 1);
  }

  get items(): Readonly<Item[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, value) => (total += value.price), 0)
      .toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
