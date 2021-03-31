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

  constructor(private authTokenService: AuthTokenService, private router: Router) {

   }

  ngOnInit(): void {
    if(this.authTokenService.checkLog) {
      this.router.navigate(['home'])
    }
  }

 login(): void {
  this.authTokenService.getAccessTokenFromServer(this.username, this.password).subscribe(
      response => {
        this.authTokenService.setAuthToken(response.access_token)
        localStorage.setItem("token",response.access_token)
        localStorage.setItem("user",this.username)
        this.router.navigate(['home'])
      },
      error => {
          console.log(error);
      });
}

}
