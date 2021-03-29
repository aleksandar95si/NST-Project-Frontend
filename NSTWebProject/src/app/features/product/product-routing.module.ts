import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductsByGroupComponent } from './pages/products-by-group/products-by-group.component';

const routes: Routes = [
  { path: "", component: ProductHomeComponent},
  { path: ':groupName', component: ProductsByGroupComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
