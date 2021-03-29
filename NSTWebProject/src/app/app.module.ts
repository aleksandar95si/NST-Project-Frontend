import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthTokenService } from './shared/services/auth-token.service';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MenuComponent } from './core/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MenubarModule
  ],
  providers: [AuthTokenService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
