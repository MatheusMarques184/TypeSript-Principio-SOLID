import { OrderStatus } from './interface/orderStatus';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) return console.log('Carrinho vazio');
    this._orderStatus = 'closed';
    this.msg.sendMessage('Seu Pedido foi recebido');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
