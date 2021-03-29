import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from 'src/app/shared/services/auth-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private as: AuthTokenService) {
    console.log(this.as.isLoggedIn());
   }

  ngOnInit(): void {
  }

}
