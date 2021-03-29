import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AuthTokenService } from './shared/services/auth-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NSTWebProject';

constructor(private authService: AuthTokenService) {

}

get loggedUser() {
  return this.authService.checkLog();
}

}
