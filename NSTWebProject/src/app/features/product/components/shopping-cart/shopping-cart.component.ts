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
  bill: number = 0;

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart() {
      this.listOfCartItems = this.shoppingCartService.getShoppingCartItems();
  }

  getItem(itemId: number) {
      this.shoppingCartService.getItem(itemId).subscribe(response => {
        this.cartItem=response
      })
  }

  getSum() : number {
    let sum = 0;
    for(let i = 0; i < this.listOfCartItems.length; i++) {
      sum += this.listOfCartItems[i].price;
    }
    return sum;
  }
  deleteItem(productId: number) {
      this.shoppingCartService.deleteShoppingCartItem(productId);

  }

 deleteCart(cartId: number) {
      this.shoppingCartService.deleteCart(cartId).subscribe(response => {})
 }

 submitOrder() {
      this.orderService.submitOrder(this.listOfCartItems, this.getSum()).subscribe(response => {});
 }

}
