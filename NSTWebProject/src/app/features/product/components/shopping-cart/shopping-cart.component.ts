import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/model/cart-item';
import { ShoppingCart } from 'src/app/shared/model/shopping-cart';
import { OrderService } from 'src/app/shared/services/order.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: ShoppingCart;
  cartItem?: CartItem;
  listOfCartItems: CartItem[]

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart() {
      this.shoppingCartService.getShoppingCart().subscribe(response => {
        this.shoppingCart=response;
        this.listOfCartItems=response?.cartItem
      })
  }

  getItem(itemId: number) {
      this.shoppingCartService.getItem(itemId).subscribe(response => {
        this.cartItem=response
      })
  }

  deleteItem(itemId: number) {
      this.shoppingCartService.deleteItem(itemId).subscribe(response => {
        this.getShoppingCart()
      })

  }

 deleteCart(cartId: number) {
      this.shoppingCartService.deleteCart(cartId).subscribe(response => {})
 }

 submitOrder() {
      this.orderService.submitOrder().subscribe(response => {});
 }

}
