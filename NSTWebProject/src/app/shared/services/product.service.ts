import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductGroup } from '../model/product-group';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseEndpointUrl="http://localhost:8000/products-api/";



  constructor(private http: HttpClient) {
  }

  getProductsByGroupName(groupName: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseEndpointUrl+"products/category/"+groupName, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
  }

  getAllGroups(): Observable<ProductGroup[]>{
    return this.http.get<ProductGroup[]>(this.baseEndpointUrl+"group/all", {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
  }

  getGroupByName(group: string): Observable<ProductGroup> {
    return this.http.get<ProductGroup>(this.baseEndpointUrl+"group/get/"+group, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
  }
}
