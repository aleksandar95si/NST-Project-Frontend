import { ProductGroup } from "./product-group";

export interface Product {

  productId: number;
  name: string;
  price: number;
  productImgPath: string;
  productGroup: ProductGroup;

}
