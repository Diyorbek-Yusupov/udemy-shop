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

export const removeCartItem = (cartItemId) => ({
   type: CartActionTypes.REMOVE_CART_ITEM,
   payload: cartItemId,
});

export const decreaseQuantityOfItem = (cartItem) => ({
   type: CartActionTypes.DECREASE_QUINTITY_OF_ITEM,
   payload: cartItem,
});
