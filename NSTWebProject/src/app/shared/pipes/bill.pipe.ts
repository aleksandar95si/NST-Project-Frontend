import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCart } from '../model/shopping-cart';

@Pipe({
  name: 'bill'
})
export class BillPipe implements PipeTransform {

  transform(value: ShoppingCart, ...args: unknown[]): string {

    if(value?.bill==null) {
      return '0'
    }

      return `${value?.bill}`;
  }

}
