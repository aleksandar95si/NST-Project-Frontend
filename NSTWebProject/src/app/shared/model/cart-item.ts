import { ShoppingCart } from "./shopping-cart";

export interface CartItem {

  itemId?: number;
  productId?: number;
  productName?: string;
  price?: number;
  shoppingCart?: ShoppingCart;

}
