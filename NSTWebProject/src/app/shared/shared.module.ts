import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthTokenService } from './services/auth-token.service';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { UserService } from './services/user.service';
import { ProductPipe } from './pipes/product.pipe';
import { ProductGroupPipe } from './pipes/product-group.pipe';
import { ShoppingCartPipe } from './pipes/shopping-cart.pipe';
import { BillPipe } from './pipes/bill.pipe';



@NgModule({
  declarations: [ProductPipe, ProductGroupPipe, ShoppingCartPipe, BillPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ProductPipe,
    ProductGroupPipe,
    ShoppingCartPipe,
    BillPipe
  ],
  providers: [
    AuthTokenService,
    AuthGuard,
    UserService
  ]
})
export class SharedModule { }
