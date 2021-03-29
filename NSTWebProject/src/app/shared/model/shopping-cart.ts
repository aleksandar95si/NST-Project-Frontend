import { CartItem } from "./cart-item";

export interface ShoppingCart {

    cartId?: number;
    username?: string;
    bill?: number;
    cartItem?: CartItem[];

}
