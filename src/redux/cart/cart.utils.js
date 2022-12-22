export const addItemToCart = (cartItems, cartItem) => {
   const existCardItemIndex = cartItems.findIndex(
      (cart) => cart.id === cartItem.id
   );

   if (existCardItemIndex >= 0) {
      return cartItems.map((item, index) =>
         index === existCardItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
      );
   } else {
      console.log("second");
      return [...cartItems, { ...cartItem, quantity: 1 }];
   }
};

export const removeItemFromCart = (cartItems, cartItemId) => {
   const cartItemsCopy = [...cartItems];
   const cartIndex = cartItems.findIndex(
      (cartItem) => cartItemId === cartItem.id
   );
   cartItemsCopy.splice(cartIndex, 1);
   return cartItemsCopy;
};

export const decreaseQuantityOfItem = (cartItems, cartItem) => {
   if (cartItem.quantity > 1) {
      return cartItems.map((item) =>
         item.id === cartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
      );
   }
   return removeItemFromCart(cartItems, cartItem.id);
};
