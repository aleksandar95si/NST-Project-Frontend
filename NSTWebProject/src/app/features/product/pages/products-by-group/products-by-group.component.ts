import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-products-by-group',
  templateUrl: './products-by-group.component.html',
  styleUrls: ['./products-by-group.component.scss']
})
export class ProductsByGroupComponent implements OnInit, OnDestroy {

  @ViewChild(ShoppingCartComponent) childCart: ShoppingCartComponent;

  groupName: string
  products: Product[];
  routeSub: any;
  selectedItem: number;


  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService,private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.routeSub=this.router.params.subscribe(params => {
      this.groupName=params["groupName"]

    })
    this.getProductsByGroupName()
  }

  ngOnDestroy(): void {
     this.routeSub.unsubscribe()

  }

  getProductsByGroupName() {
    this.productService.getProductsByGroupName(this.groupName).subscribe(response => {
      this.products=response

    }, error => {} )
  }

   addItem(productId: number) {
    this.shoppingCartService.addItem(productId).subscribe(response => {this.childCart.getShoppingCart()})
   }


}
