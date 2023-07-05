import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  submitOrder(listOfCartItems: CartItem[], bill: number): Observable<any> {
    let body = {
      bill: bill,
      cartItems: listOfCartItems
    }
   return this.http.post<any>("http://localhost:8000/orders-api/orders/submit",body,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
  }
}
