import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: Product, ...args: unknown[]): string {
    return `${value.name}, cena: ${value.price} dinara` ;
  }

}
