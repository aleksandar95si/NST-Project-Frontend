import { Pipe, PipeTransform } from '@angular/core';
import { ProductGroup } from '../model/product-group';

@Pipe({
  name: 'productGroup'
})
export class ProductGroupPipe implements PipeTransform {

  transform(value: ProductGroup, ...args: unknown[]): string {
    return `Grupa: ${value.name}`;
  }

}
