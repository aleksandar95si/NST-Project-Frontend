import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  submitOrder(): Observable<any> {
   return this.http.post<any>("http://localhost:8081/order/submit",null,{headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
  }
}
