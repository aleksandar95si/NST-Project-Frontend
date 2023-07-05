import { ProductGroup } from "./product-group";

export interface Product {

  productId: number;
  name: string;
  price: number;
  productImgPath: string;
  productCategory: ProductGroup;
  availableAmount: number;
  reservedAmount: number;

}
