import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
   return {
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
   };
};

export const addItem = (cartItem) => ({
   type: CartActionTypes.ADD_ITEM,
   payload: cartItem,
});
