import { OrderStatus } from './interface/orderStatus';
import { Messaging } from '../services/Messaging';
import { Persistency } from '../services/Persistency';
import { ShoppingCart } from './ShoppingCart';
import { CustomerOrder } from './interface/customerProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Messaging,
    private readonly persistency: Persistency,
    private readonly client: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) return console.log('Carrinho vazio');
    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `${this.client.getName()} ${this.client.getIDN()} seu Pedido foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
