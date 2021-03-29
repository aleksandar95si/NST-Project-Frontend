import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken } from '../model/auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  authToken?: string;
  private loggedIn=false;

  constructor(private http : HttpClient) { }

  getAccessTokenFromServer(username: string, password: string): Observable<AuthToken> {

    let oauth2_token_endpoint = 'http://localhost:8282/oauth/token';
    let oauth2_client_id = 'cart';
    let oauth2_client_secret = 'cartpass';

     const httpOptions = {
         headers: new HttpHeaders({
            //'Content-Type': 'multipart/form-data',
             'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization': 'Basic ' + btoa(oauth2_client_id + ':' + oauth2_client_secret)
         })
     };

     const body = 'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
         .replace('{0}', oauth2_client_id)
         .replace('{1}', oauth2_client_secret)
         .replace('{2}', username)
         .replace('{3}', password);

     // console.log(body);

     return this.http.post<AuthToken>(oauth2_token_endpoint, body, httpOptions);
 }

  getAccesToken(): string {
    return this.authToken;
  }

  setAuthToken (authToken: string){
    this.authToken=authToken;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn=loggedIn;
  }

  checkLog() {
    return !!localStorage.getItem("token")
  }
}
