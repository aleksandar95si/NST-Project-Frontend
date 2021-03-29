import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path : 'login', component : LoginComponent},
  { path : 'signup', component: SignUpComponent},
  { path: 'home', component: HomeComponent
  ,canActivate: [AuthGuard]
},
  { path: 'products',
    loadChildren: () => import("./features/product/product.module").then(p => p.ProductModule)
    ,canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
