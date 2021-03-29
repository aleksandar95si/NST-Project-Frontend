import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductsByGroupComponent } from './pages/products-by-group/products-by-group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [ProductHomeComponent, ProductsByGroupComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
