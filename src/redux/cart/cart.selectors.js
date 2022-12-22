import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
   [selectCart],
   (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   (cartItems) => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

// const selectCart = (state) => {
//    return state.cart;
// };

// export const selectCartItems = createSelector(
//    [selectCart],
//    (cart) => cart.cartItems
// );

// export const selectCartItemsCount = createSelector(
//    [selectCartItems],
//    (cartItems) => {
//       return cartItems.reduce((acc, curr) => {
//          console.log("I am being called");
//          return acc + curr.quantity;
//       }, 0);
//    }
// );
