type Item = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: Item[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: Item): void {
    this._items.push(item);
  }

  removeItem(item: Item): void {
    this._items.splice(this._items.indexOf(item), 1);
  }

  get items(): Readonly<Item[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, value) => (total += value.price), 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) return console.log('Carrinho vazio');
    this._orderStatus = 'closed';
    this.sendMessage('Seu Pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('pedido salvo');
  }

  clear(): void {
    this._items.length = 0;
  }
}

const cart1 = new ShoppingCart();

const pain = { name: 'pain', price: 10.87 };
const book = { name: 'book', price: 20.82 };
const phone = { name: 'phone', price: 120.1012 };

cart1.addItem(pain);
cart1.addItem(book);
cart1.addItem(phone);
console.log(cart1.items);
console.log('-----------------------------------------');

cart1.removeItem(book);
console.log(cart1.items);
console.log(cart1.total());
console.log('-----------------------------------------');

console.log('Status do carrinho: ' + cart1.orderStatus);
cart1.checkout();
console.log(cart1.items);
console.log('Status do carrinho: ' + cart1.orderStatus);
