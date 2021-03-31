import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8081/user/save", user)
  }

  logout(): Observable<User> {
    return this.http.delete<User>("http://localhost:8081/user/logout/"+localStorage.getItem('token'))
  }

}
