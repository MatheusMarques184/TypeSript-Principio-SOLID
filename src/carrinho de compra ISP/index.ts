/*
  os clientes nao devem ser forcados a depender de internaces que nao utilizam
*/
import { Messaging } from './services/Messaging';
import { Order } from './entities/Order';
import { Persistency } from './services/Persistency';
import { ShoppingCart } from './entities/ShoppingCart';
import { Product } from './entities/Product';
import { EnterpriseCustumer } from './entities/Custumer';
//import { individualCustumer } from './entities/Custumer';

const cart1 = new ShoppingCart();
//const client1 = new IndividualCustumer('Matheus', 'Marques', '121212');
const client2 = new EnterpriseCustumer('MatheusLTDA', '5385830');
const order1 = new Order(cart1, new Messaging(), new Persistency(), client2);

const pain = new Product('pain', 10.87);
const book = new Product('book', 20.82);
const phone = new Product('phone', 120.1012);

cart1.addItem(pain);
cart1.addItem(book);
cart1.addItem(phone);
console.log(cart1.items);
console.log('-----------------------------------------');

cart1.removeItem(book);
console.log(cart1.items);
console.log(cart1.total());
console.log(cart1.totalWithDiscount(10));
console.log('-----------------------------------------');

console.log('Status do carrinho: ' + order1.orderStatus);
order1.checkout();
console.log(cart1.items);
console.log('Status do carrinho: ' + order1.orderStatus);
