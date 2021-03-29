import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { ShoppingCart } from '../model/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  baseEndpointUrl="http://localhost:8081/cart"

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

 deleteItem(itemId: number): Observable<CartItem> {
      return this.http.delete<CartItem>(`${this.baseEndpointUrl}/item/${itemId}`, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}`}});
 }

 deleteCart(cartId: number): Observable<ShoppingCart> {
      return this.http.delete<ShoppingCart>(`${this.baseEndpointUrl}/${cartId}`,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}});
 }

}
