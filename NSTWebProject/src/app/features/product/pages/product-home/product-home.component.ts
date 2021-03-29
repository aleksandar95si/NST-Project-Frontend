import { Component, OnInit} from '@angular/core';
import { ProductGroup } from 'src/app/shared/model/product-group';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  listOfGroups: ProductGroup[];
  private routeSub:any;


  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups() {
    this.productService.getAllGroups().subscribe(
    response => {this.listOfGroups=response},
    error => {console.log(error)}
    )
  }
}
