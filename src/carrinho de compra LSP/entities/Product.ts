import { Item } from './interface/cartItem';

export class Product implements Item {
  constructor(public name: string, public price: number) {}
}
