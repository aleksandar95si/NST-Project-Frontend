import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/app/shared/services/auth-token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;
  loggedIn: boolean;


  constructor(private authTokenService: AuthTokenService, private router: Router) {

   }

  ngOnInit(): void {
    if(this.authTokenService.checkLog) {
      this.router.navigate(['home'])
    }
  }



 login(): void {

  console.log(this.username, " ", this.password)

  this.authTokenService.getAccessTokenFromServer(this.username, this.password).subscribe(
      response => {
        this.authTokenService.setAuthToken(response.access_token)
        this.authTokenService.setLoggedIn(true);
        localStorage.setItem("token",response.access_token)
        localStorage.setItem("user",this.username)
        this.loggedIn=true;
        this.router.navigate(['home'])
       console.log(this.authTokenService.isLoggedIn())
        // ...any login logic- cookies and all the good stuff goes here
          //this.isLoggedIn = true;
          console.log(response);
          console.log(this.authTokenService.getAccesToken());
      },
      error => {
          //this.isLoggedIn = false;
         // localStorage.setItem("isLoggedIn", "false")
         this.authTokenService.setLoggedIn(false)
          console.log(error);
      });
}

 /*
  getProducts(): Observable<Object>{



    const httpOption = {
      headers: new HttpHeaders({
         //'Content-Type': 'multipart/form-data',
          //'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + this.authToken
      })
  };

    return this.http.get("http://localhost:8081/products/3", httpOption);
  }

  consoleProducts(): void{
    this.getProducts().subscribe(res => console.log(res));

  }
  */

}
