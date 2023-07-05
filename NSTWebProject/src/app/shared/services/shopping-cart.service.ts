import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { ShoppingCart } from '../model/shopping-cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  baseEndpointUrl="http://localhost:8000/cart"
  baseEndpointUrlProducts="http://localhost:8000/products-api/products"
  listOfCartItemsIds: number[]
  listOfCartItems: CartItem[] = [];

  constructor(private http: HttpClient) { }


 getShoppingCart(): Observable<ShoppingCart> {
      return this.http.get<ShoppingCart>(`${this.baseEndpointUrl}/get`,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
 }

 getItem(itemId: number): Observable<CartItem> {
      return this.http.get<CartItem>(`${this.baseEndpointUrl}/item/get/${itemId}`,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
 }

 addItem(productId: number): Observable<any> {
      return this.http.post<any>(`${this.baseEndpointUrl}/addItem/${productId}`, null,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
 }

addItemToShoppingCart(productId: number): void {

     
     this.http.get<Product>(this.baseEndpointUrlProducts + "/" + productId, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}}).subscribe(response => {
           if (response.availableAmount >= 0) {
               let cartItem = {
                    productId: response.productId,
                    productName: response.name,
                    price: response.price
               }
               this.listOfCartItems.push(cartItem)
           } else {
               console.log("out of stock")
           }
     })
}

getShoppingCartItems(): CartItem[] {     
     return this.listOfCartItems;
}


 deleteItem(itemId: number): Observable<CartItem> {
      return this.http.delete<CartItem>(`${this.baseEndpointUrl}/item/${itemId}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}`}});
 }

 deleteShoppingCartItem(productId: number): void {
     for (let i = this.listOfCartItems.length - 1; i >= 0; i--) {
          if (this.listOfCartItems[i].productId == productId) {
            this.listOfCartItems.splice(i, 1);
            break;
          }
     }
}

 deleteCart(cartId: number): Observable<ShoppingCart> {
      return this.http.delete<ShoppingCart>(`${this.baseEndpointUrl}/${cartId}`,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
 }

}
