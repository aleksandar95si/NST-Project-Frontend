import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';

@Pipe({
  name: 'shoppingCart'
})
export class ShoppingCartPipe implements PipeTransform {

  productName: string;
  transform(value: ShoppingCart, ...args: unknown[]): string {
    value.cartItem.map(resposne => {this.productName=resposne.productName})
    return `STANJE U KORPI KORISNIKA ${value.username.toUpperCase()}:
    Proizvod: ${this.productName}
    Racun: ${value.bill} dinara`;
  }

}
